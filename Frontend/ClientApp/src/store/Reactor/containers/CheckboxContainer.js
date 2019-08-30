import { connect } from 'react-redux'
import {Checkbox as CheckboxC} from "../../../layout/Checkbox";

const mapStateToProps = (state)=> {
	return {
		isServer: state.UI.isServer
	}
};


const Checkbox = connect(mapStateToProps, null)(CheckboxC);
export default 	Checkbox;

