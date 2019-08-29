import { connect } from 'react-redux'
import {LaunchLayout as LaunchLayoutC} from "../../../components/LaunchLayout";

const mapStateToProps = (state)=> {
	return {
		initialized: state.Reactor.initialized
	}
};


const LaunchLayout = connect(mapStateToProps, null)(LaunchLayoutC);
export default 	LaunchLayout;

