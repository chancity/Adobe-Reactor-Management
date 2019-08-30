import { connect } from 'react-redux'
import {ResourceWrapper } from  "../../../components/ResourceWrapper";
import {listResource} from "../thunk";

const mapStateToProps = (state)=> {
	return {
		initialized: state.Reactor.initialized,
		pathname: state.router.location.pathname
	}
};


export const ResourceWrapperContainer = connect(mapStateToProps, {listResource})(ResourceWrapper);


