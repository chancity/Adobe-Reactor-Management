import React from 'react';
import Routes from "./Routes";
//import {setIsMobile} from "../store/UI/actions";
//import {initialize} from "../store/Reactor/thunk";
import {AppBodyContainer} from "../store/UI/containers/AppBodyContainer";
import {NavMenu} from "../layout/Header/NavMenu";
import {AppParentContainer} from "../store/UI/containers/AppContainer";



export const App = ({isMobile, initialize, setIsMobile}) => {
	React.useEffect(() =>{
		initialize(window.location.pathname);
	}, [initialize]);

	React.useEffect(() => {
		window.addEventListener("resize", () => {
			const current = window.innerWidth <= 1000;
			if(current !== isMobile)
				setIsMobile(current);
		});
	}, [setIsMobile, isMobile]);

	return (
		<AppParentContainer isMobile={false}>
			<NavMenu/>
			<AppBodyContainer isMobile={false}>
				<Routes/>
			</AppBodyContainer>
		</AppParentContainer>
	);
}

export default App;
