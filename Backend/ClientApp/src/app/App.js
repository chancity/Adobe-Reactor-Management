import React from 'react';
import Routes from "./Routes";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import AppStore from "../store";
import {setIsMobile} from "../store/UI/actions";
import AppBody from "../store/UI/containers/AppBody";
import {NavMenu} from "../layout/Header/NavMenu";
import AppParent from "../store/UI/containers/AppParent";
import ResourceWrapper from "../store/Reactor/containers/ResourceWrapper";


const store = AppStore;

function App() {
    const [isMobile, setMobile] = React.useState(window.innerWidth <= 1000);

    React.useEffect(() => {
        store.dispatch(setIsMobile(isMobile));
    }, [isMobile]);

    React.useEffect(() => {
        window.addEventListener("resize", () => {
            setMobile(window.innerWidth <= 1000);
        });
    }, [setMobile]);

    return (
        <Provider store={store}>
            <AppParent isMobile={true}>
              <BrowserRouter>
                <NavMenu/>
                <AppBody isMobile={true}>
                 <ResourceWrapper/>
                  <Routes/>
                </AppBody>
              </BrowserRouter>
            </AppParent>
        </Provider>
    );
}

export default App;