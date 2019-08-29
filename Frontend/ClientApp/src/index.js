import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import configureStore from "./store/configureStore";
import {Provider} from "react-redux";
import {IntlProvider} from "react-intl";
import formats from "./dateTimeFormats";
import { ConnectedRouter } from 'connected-react-router'
import './index.scss'
import {AppC} from "./store/UI/containers/AppC";

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');

const initialState = window.initialReduxState;

const {store, history} = configureStore(baseUrl, initialState);

const rootElement = document.getElementById('root');



ReactDOM.render(
    <IntlProvider locale={'en'} formats={formats} >
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <AppC/>
            </ConnectedRouter>
        </Provider>
    </IntlProvider>,
    rootElement);

registerServiceWorker();
