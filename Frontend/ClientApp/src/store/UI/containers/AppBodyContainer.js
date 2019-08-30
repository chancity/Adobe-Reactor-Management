import { connect } from 'react-redux'
import {AppBody} from "../../../app/Styled";

const mapStateToProps = (state)=>({
	navOpen: state.UI.navOpen,
	isMobile: state.UI.isMobile
});

export const AppBodyContainer = connect(mapStateToProps,null)(AppBody);

