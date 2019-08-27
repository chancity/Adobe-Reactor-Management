import { Wrapper, NavLink } from "./Styled/NavLinks";
import React from 'react';
//import {Seperator} from "./Styled/Navbar";

const NavLinks = ({onClick, companyId}) => {
	return (
		<Wrapper>
			{/*<NavLink to={`/companies`} onClick={onClick}>
				Companies
			</NavLink>
			<Seperator/>*/}
			<NavLink to={`/companies/${companyId}/properties`} onClick={onClick}>
				Properties
			</NavLink>
		</Wrapper>
	);
};

export default NavLinks
