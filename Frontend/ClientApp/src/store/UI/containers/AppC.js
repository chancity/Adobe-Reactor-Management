import { connect } from 'react-redux'
import {App} from "../../../app/App";
import {setIsMobile} from "../actions";
import {initialize} from "../../Reactor/thunk"

const mapStateToProps = (state)=>({
	isMobile: state.UI.isMobile
});

export const AppC = connect(mapStateToProps,{setIsMobile, initialize})(App);

