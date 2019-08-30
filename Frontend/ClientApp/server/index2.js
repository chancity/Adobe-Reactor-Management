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

const createGlobals = (initialReduxState, styles) => ({
	initialReduxState,
	styles
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

				return {
					html,
					styles
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
			const {html, styles} = renderApp();
			resolve({
				html,
				globals: createGlobals(store.getState(), styles)
			});
		}
	});
});
