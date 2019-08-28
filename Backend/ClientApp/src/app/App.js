import React from 'react';
import Routes from "./Routes";
import {Router} from "react-router";
import {Provider} from "react-redux";
import AppStore from "../store";
import {setIsMobile} from "../store/UI/actions";
import AppBody from "../store/UI/containers/AppBody";
import {NavMenu} from "../layout/Header/NavMenu";
import AppParent from "../store/UI/containers/AppParent";
import ResourceWrapper from "../store/Reactor/containers/ResourceWrapper";
import history from "./History";
import {IntlProvider} from "react-intl";
import formats from '../dateTimeFormats'

const store = AppStore;

function App() {
    const [isMobile, setMobile] = React.useState(window.innerWidth <= 1000);

    React.useEffect(() => {
        store.dispatch(setIsMobile(isMobile));
    }, [isMobile]);

    React.useEffect(() => {
        window.addEventListener("resize", () => {
            const current = window.innerWidth <= 1000;
            if(current !== isMobile)
                setMobile(current);
        });
    }, [setMobile, isMobile]);

    return (
        <IntlProvider locale={'en'} formats={formats} >
        <Provider store={store}>
            <AppParent isMobile={isMobile}>
            <Router history={history}>
                <NavMenu/>
                <AppBody isMobile={isMobile}>
                 <ResourceWrapper/>
                  <Routes/>
                </AppBody>
              </Router>
            </AppParent>
        </Provider>
        </IntlProvider>
    );
}

export default App;
