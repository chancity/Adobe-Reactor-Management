import { connect } from 'react-redux'
import ResourceWrapperC from "../../../components/ResourceWrapper";
import {listResource} from "../thunk";

const mapStateToProps = (state)=> {
	return {
		data: state.data,
		loaded: state.loaded,
		error: state.error
	}
};


const ResourceWrapper = connect(null,{listResource})(ResourceWrapperC);
export default 	ResourceWrapper;

