import {Menu, MenuInner, Section, SectionTitle, StyledLink} from "./Styled/Sidebar";
import React from 'react';
import {withRouter} from "react-router-dom";
import navOptions from "./NavOptions";



const Sidebar = ({ navOpen, isMobile, setNavOpen, companyId, propertyId }) => {
	const display = navOpen && isMobile;

	const toggle = ()=>{
		if(isMobile)
			setNavOpen();
	};

	return (
		<Menu style={display ? { transform:"translateX(0rem)" } : undefined }>
			<MenuInner>
				{propertyId ?
						navOptions.map((value, index) => (
							<Section key={index}>
								<SectionTitle>
									<StyledLink to={`/properties/${propertyId}/${value.path}`}
									            onClick={toggle} exact activeClassName="navActive">
										{value.text}
									</StyledLink>
								</SectionTitle>
							</Section>
						))

					:
					<Section>
						<SectionTitle>
							Select property
						</SectionTitle>
					</Section>
				}
			</MenuInner>
		</Menu>
	);
};

export default withRouter(Sidebar);
