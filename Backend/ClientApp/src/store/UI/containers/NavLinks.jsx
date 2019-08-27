import { connect } from 'react-redux'
import NavLinksC  from "../../../layout/Header/NavLinks";
import {setSecondaryNavOpen} from "../actions";

const mapStateToProps = (state)=>({
	companyId: state.Reactor.companyId
});

const NavLinks = connect(mapStateToProps,{setSecondaryNavOpen})(NavLinksC);
export default 	NavLinks;

