import { connect } from 'react-redux'
import {App} from "../../../app/App";
import {setIsMobile} from "../actions";


export const AppC = connect(null,{setIsMobile})(App);

