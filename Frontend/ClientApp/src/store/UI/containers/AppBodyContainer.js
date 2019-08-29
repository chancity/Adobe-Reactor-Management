import { connect } from 'react-redux'
import {AppBody} from "../../../app/Styled";

const mapStateToProps = (state)=>({
	navOpen: state.UI.navOpen
});

export const AppBodyContainer = connect(mapStateToProps,null)(AppBody);

