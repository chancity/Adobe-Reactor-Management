import { connect } from 'react-redux'
import {NavLinks}  from "../../../layout/Header/NavLinks";
import {setSecondaryNavOpen} from "../actions";

const mapStateToProps = (state)=>({
	companyId: state.Reactor.companyId
});

// eslint-disable-next-line no-undef
export const NavLinksContainer = connect(mapStateToProps,{setSecondaryNavOpen})(NavLinks);

