import React from 'react';
import Routes from "./Routes";
import {AppBodyContainer} from "../store/UI/containers/AppBodyContainer";
import {NavMenu} from "../layout/Header/NavMenu";
import {AppParentContainer} from "../store/UI/containers/AppContainer";

export const App = ({setIsMobile}) => {
	const [isMobile, localSetMobile] = React.useState(typeof window !== 'undefined' ? window.innerWidth <= 1000 : false);

	React.useEffect(() => {
		typeof window !== 'undefined' && window.addEventListener("resize", () => {
			const current = window.innerWidth <= 1000;
			if(current !== isMobile)
				localSetMobile(current);
				setIsMobile(current);

		});
	}, [setIsMobile, isMobile]);

	return (
		<AppParentContainer>
			<NavMenu/>
			<AppBodyContainer>
				<Routes/>
			</AppBodyContainer>
		</AppParentContainer>
	);
}

export default App;
