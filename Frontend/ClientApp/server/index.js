import path from 'path'
import fs from 'fs'
import React from 'react'
import { Provider } from 'react-redux'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { createServerRenderer } from 'aspnet-prerendering';

import configureStore from '../src/store/configureStore'
import App from '../src/app/App'
import {IntlProvider} from "react-intl";
import formats from "../src/dateTimeFormats";

//import manifest from '../build/asset-manifest.json';


export default createServerRenderer((params) => {
	return new Promise((res, rej) => {
		const filePath = path.resolve(__dirname, '..', 'public', 'index.html');

		fs.readFile(filePath, 'utf8', (err, htmlData) => {
			if (err) {
				console.error('read err', err);
				return rej('no file read')
			}
			const context = {};
			const {store, history} = configureStore(params.location.path, JSON.parse(params.data));
			store.dispatch(initialize(params.location.path));

			const markup = ReactDOMServer.renderToString(
				<IntlProvider locale={'en'} formats={formats} >
					<Provider store={store}>
						<StaticRouter location={params.location.path} context={context}>
							<App />
						</StaticRouter>
					</Provider>
				</IntlProvider>
			);

			// Let's give ourself a function to load all our page-specific JS assets for code splitting
			const extractAssets = (assets, chunks) =>
				Object.keys(assets)
				.filter(asset => chunks.indexOf(asset.replace('.js', '')) > -1)
				.map(k => assets[k]);

			// Let's format those assets into pretty <script> tags
			//const extraChunks = extractAssets(manifest).map(
			//	c => `<script type="text/javascript" src="/${c.replace(/^\//, '')}"></script>`
			//);

			if (context.url) {
				// Somewhere a `<Redirect>` was rendered
				res({ redirectUrl: context.url });
				return;
			} else {
				// we're good, send the response
				const RenderedApp = htmlData
				.replace('<div id="root"></div>', `<div id="root">${markup}</div>`)
				.replace('window.__PRELOADED_STATE__={}', `window.__PRELOADED_STATE__=${JSON.stringify(params.data)}`)
				.replace(/\%PUBLIC_URL\%/g, '')
				.replace('</body>', '<script type="text/javascript" src="/static/js/bundle.js"></script>\n</body>')

				res({
					html: RenderedApp,
					globals: { initialReduxState: store.getState() }
				});
			}
		})
	});
});
