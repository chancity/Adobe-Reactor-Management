import {ArrowWrapper, Button, Wrapper, SecondaryMenu, SecondaryMenuItem} from "./Styled/SMobileNavbar";
import { ReactComponent as CloseSvg } from '../../static/images/layout/menu-close.svg';
import { ReactComponent as OpenSvg } from '../../static/images/layout/menu-open.svg';
import { ReactComponent as ArrowSvg } from '../../static/images/layout/menu-arrow.svg';
import { ReactComponent as SearchSvg } from '../../static/images/layout/menu-search.svg';
import React from "react";
import {Logo} from "../Logo";
import {NavLinksContainer} from "../../store/UI/containers/NavLinksContainer";
import {SocialLinksContainer} from "../../store/UI/containers/SocialLinksContainer";

const OpenButtonStyle = {background: "#2f3136"};
const arrowWrapperStyle = {transformOrigin: "center center",transform: "rotate(180deg)",transition: "transform 0.2s ease 0s"};
const arrowSvgStyle = {width: "2rem", height: "2rem"};
const searchWrapperStyle = { display: "inline-block",	justifyContent: "flex-end",	float: "right", backGroundColor:"transparent"};
const searchSvgStyle = {width: "1.55556rem", height: "1.55556rem"};

export const ButtonWrapper = ({children, onClick, open}) => {
	return(
		<Button onClick={onClick} style={open ? OpenButtonStyle : null}>
			{children}
		</Button>
	)
};

export const MobileNav = ({isServer, setSearchOpen, setNavOpen, setSecondaryNavOpen, navOpen, secondaryNavOpen, style}) => (
	<Wrapper style={style}>
		<ButtonWrapper onClick={setNavOpen} open={navOpen}>
			{!isServer && (navOpen ? <CloseSvg/> : <OpenSvg/>)}
		</ButtonWrapper>
		<Logo/>
		<div style={searchWrapperStyle}>
			<ButtonWrapper  onClick={setSearchOpen}>
				{!isServer && <SearchSvg style={searchSvgStyle}/>}
			</ButtonWrapper>
			<ButtonWrapper onClick={setSecondaryNavOpen} open={secondaryNavOpen}>
				<ArrowWrapper style={secondaryNavOpen ? arrowWrapperStyle : null}>
					{!isServer && <ArrowSvg style={arrowSvgStyle}/>}
				</ArrowWrapper>
			</ButtonWrapper>
		</div>
		<SecondaryMenu open={secondaryNavOpen}>
			<NavLinksContainer/>
			<SecondaryMenuItem>
				<SocialLinksContainer/>
			</SecondaryMenuItem>
		</SecondaryMenu>
	</Wrapper>
);

