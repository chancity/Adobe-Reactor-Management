import { connect } from 'react-redux'
import {SocialLinks}  from "../../../layout/Header/SocialLinks";
import {setSecondaryNavOpen} from "../actions";

const mapStateToProps = (state)=>({
	isServer: state.UI.isServer
});

// eslint-disable-next-line no-undef
export const SocialLinksContainer = connect(mapStateToProps,{setSecondaryNavOpen})(SocialLinks);

