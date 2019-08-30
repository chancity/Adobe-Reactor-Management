import {Normal, StartWrapper, EndWrapper, SocialWrapper} from "./Styled/SNavbar";
import React from 'react';
import {Logo} from "../Logo";
import {SearchContainer} from "../../store/UI/containers/SearchContainer";
import {NavLinks} from "./NavLinks";
import {SocialLinksContainer} from "../../store/UI/containers/SocialLinksContainer";



export const Nav = () => {
	return (
		<Normal>
			<StartWrapper>
				<Logo/>
				<NavLinks/>
			</StartWrapper>
			<EndWrapper>
				<SearchContainer/>
				<SocialWrapper>
					<SocialLinksContainer/>
				</SocialWrapper>
			</EndWrapper>
		</Normal>
	);
};
