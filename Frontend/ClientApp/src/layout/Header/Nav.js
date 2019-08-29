import {Normal, StartWrapper, EndWrapper, SocialWrapper} from "./Styled/SNavbar";
import React from 'react';
import {Logo} from "../Logo";
import {SocialLinks} from "./SocialLinks";
import SearchContainer from "../../store/UI/containers/SearchContainer";
import {NavLinks} from "./NavLinks";



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
					<SocialLinks/>
				</SocialWrapper>
			</EndWrapper>
		</Normal>
	);
};
