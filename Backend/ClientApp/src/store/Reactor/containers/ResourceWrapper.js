import { connect } from 'react-redux'
import ListResourceWrapperC from "../../../components/ListResourceWrapper";
import {listResource} from "../thunk";

const mapStateToProps = (state)=> {
	return {
		data: state.data,
		loaded: state.loaded,
		error: state.error
	}
};


const ListResourceWrapper = connect(mapStateToProps,{listResource})(ListResourceWrapperC);
export default 	ListResourceWrapper;

