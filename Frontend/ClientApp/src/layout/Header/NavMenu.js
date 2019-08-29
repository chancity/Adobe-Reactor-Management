import {NavHeader, Wrapper,} from "./Styled/SNavbar";
import React from 'react';
import {Nav} from "./Nav";
import {MobileNavContainer} from "../../store/UI/containers/MobileNavContainer";
import {SidebarContainer} from "../../store/UI/containers/SidebarContainer";


export const NavMenu = () => {
	return (
		<NavHeader>
			<Wrapper>
				<Nav/>
				<MobileNavContainer/>
			</Wrapper>
			<SidebarContainer/>
		</NavHeader>
	);
};
