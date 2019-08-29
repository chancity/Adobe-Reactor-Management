import { connect } from 'react-redux'
import {AppParent} from "../../../app/Styled";

const mapStateToProps = (state)=>({
	navOpen: state.UI.navOpen
});

export const AppParentContainer = connect(mapStateToProps,null)(AppParent);

