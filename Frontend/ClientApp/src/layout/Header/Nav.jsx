import {Normal, StartWrapper, EndWrapper, SocialWrapper} from "./Styled/Navbar";
import React from 'react';
import {Logo} from "../Logo";
import {SocialLinks} from "./SocialLinks";
import Search from "../../store/UI/containers/Search";
import NavLinks from "./NavLinks";



export const Nav = () => {
	return (
		<Normal>
			<StartWrapper>
				<Logo/>
				<NavLinks/>
			</StartWrapper>
			<EndWrapper>
				<Search/>
				<SocialWrapper>
					<SocialLinks/>
				</SocialWrapper>
			</EndWrapper>
		</Normal>
	);
};
