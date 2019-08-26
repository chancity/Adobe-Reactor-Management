import { Wrapper, NavLink } from "./Styled/NavLinks";
import React from 'react';
import {Seperator} from "./Styled/Navbar";

export const NavLinks = ({onClick, companyId}) => {
	return (
		<Wrapper>
			<NavLink to={`/companies/${companyId}/properties`} onClick={onClick} activeClassName={"navActive"}>
				Properties
			</NavLink>
			<Seperator/>
			<NavLink to={`/companies/${companyId}/auditEvents`} onClick={onClick} activeClassName={"navActive"}>
				Audit Events
			</NavLink>
		</Wrapper>
	);
};
