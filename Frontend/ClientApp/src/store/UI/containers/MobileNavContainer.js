import { connect } from 'react-redux'
import {MobileNav} from "../../../layout/Header/MobileNav";
import {setNavOpen, setSearchOpen, setSecondaryNavOpen} from "../actions";

const mapStateToProps = (state)=>({
	isMobile: state.UI.isMobile,
	navOpen: state.UI.navOpen,
	secondaryNavOpen: state.UI.secondaryNavOpen,
	isServer: state.UI.isServer
});

export const MobileNavContainer = connect(mapStateToProps,{setNavOpen, setSecondaryNavOpen, setSearchOpen})(MobileNav);

