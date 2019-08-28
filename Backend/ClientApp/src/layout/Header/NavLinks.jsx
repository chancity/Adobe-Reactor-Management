import { Wrapper, NavLink } from "./Styled/NavLinks";
import React from 'react';
//import {Seperator} from "./Styled/Navbar";

const NavLinks = ({setSecondaryNavOpen, companyId}) => {
	return (
		<Wrapper>
			{/*<NavLink to={`/companies`} onClick={onClick}>
				Companies
			</NavLink>
			<Seperator/>*/}
			<NavLink to={`/companies/${companyId}/properties`} onClick={setSecondaryNavOpen}>
				Properties
			</NavLink>
		</Wrapper>
	);
};

export default NavLinks
