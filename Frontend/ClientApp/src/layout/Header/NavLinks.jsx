import { Wrapper } from "./Styled/NavLinks";
//import { Wrapper, NavLink } from "./Styled/NavLinks";
import React from 'react';
//import {Seperator} from "./Styled/Navbar";

const NavLinks = ({setSecondaryNavOpen, companyId}) => {
	return (
		<Wrapper style={{height:'44.44px'}}>
			{/*<NavLink to={`/companies`} onClick={onClick}>
				Companies
			</NavLink>
			<Seperator/>
			<NavLink to={`/companies/${companyId}/properties`} onClick={setSecondaryNavOpen}>
				Properties
			</NavLink>*/}
		</Wrapper>
	);
};

export default NavLinks
