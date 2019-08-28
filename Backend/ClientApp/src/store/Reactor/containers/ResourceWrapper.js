import { connect } from 'react-redux'
import ResourceWrapperC from "../../../components/ResourceWrapper";
import {listResource} from "../thunk";

const mapStateToProps = (state)=> {
	return {
		initialized: state.Reactor.initialized
	}
};


const ResourceWrapper = connect(mapStateToProps, {listResource})(ResourceWrapperC);
export default 	ResourceWrapper;

