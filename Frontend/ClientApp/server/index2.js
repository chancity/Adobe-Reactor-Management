import React from 'react'
import { Provider } from 'react-redux'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { createServerRenderer } from 'aspnet-prerendering';
import configureStore from '../src/store/configureStore'
import {IntlProvider} from "react-intl";
import formats from "../src/dateTimeFormats";
import {AppC} from "../src/store/UI/containers/AppC";
import { ServerStyleSheet } from 'styled-components'

import manifest from '../build/asset-manifest.json';

const createGlobals = (initialReduxState, styles, extraChunks) => ({
	initialReduxState,
	styles,
	extraChunks
});

export default createServerRenderer((params) => {
	return new Promise(resolve => {
		const basename = params.baseUrl.substring(0, params.baseUrl.length - 1); // Remove trailing slash.
		const urlAfterBasename = params.url.substring(basename.length);

		const routerContext = {};
		const {store} = configureStore(urlAfterBasename, JSON.parse(params.data));

		const app = (
			<IntlProvider locale={'en'} formats={formats} >
				<Provider store={store}>
					<StaticRouter
						basename={basename}
						location={params.location.path}
						context={routerContext}>
						<AppC />
					</StaticRouter>
				</Provider>
			</IntlProvider>
		);

		const renderApp = () => {
			const sheet = new ServerStyleSheet();
			try {
				const html = ReactDOMServer.renderToString(sheet.collectStyles(app));
				const styles = sheet.getStyleTags(); // or sheet.getStyleElement();

				const extractJsAssets = (assets) =>
					Object.keys(assets)
					.filter(asset => assets[asset].replace('.js','').endsWith('chunk') || assets[asset].endsWith('service-worker.js') || asset.endsWith('runtime~main.js'))
					.map(k => assets[k]);

				// Let's format those assets into pretty <script> tags
				const extraJSChunks = extractJsAssets(manifest.files).map(
					c => `<script type="text/javascript" src="/${c.replace(/^\//, '')}"></script>`
				);
				const extractCSSAssets = (assets) =>
					Object.keys(assets)
					.filter(asset => assets[asset].replace('.css','').endsWith('chunk'))
					.map(k => assets[k]);

				// Let's format those assets into pretty <script> tags
				const extraCSSChunks = extractCSSAssets(manifest.files).map(
					c => `<link rel="stylesheet" href="/${c.replace(/^\//, '')}">`
				);

				return {
					html,
					styles,
					extraChunks: [...extraCSSChunks, ...extraJSChunks].join('')
				}
			} catch (error) {
				// handle error
				console.error(error)
			} finally {
				sheet.seal()
			}
		};

		//  If there's a redirection, just send this information back to the host application.
		if (routerContext.url) {
			resolve({
				redirectUrl: routerContext.url,
				globals: createGlobals(store.getState())
			});
		} else {
			//  We also send the redux store state, so the client can continue execution where the server left off.
			const {html, styles, extraChunks} = renderApp();
			resolve({
				html,
				globals: createGlobals(store.getState(), styles, extraChunks)
			});
		}
	});
});
