import { connect } from 'react-redux'
import {AppParent} from "../../../app/Styled";

const mapStateToProps = (state)=> ({
	navOpen: state.UI.navOpen,
	isMobile: state.UI.isMobile
});

export const AppParentContainer = connect(mapStateToProps,null)(AppParent);

