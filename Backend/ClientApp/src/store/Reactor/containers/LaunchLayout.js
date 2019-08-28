import { connect } from 'react-redux'
import {LaunchLayoutHeader as LaunchLayoutHeaderC} from "../../../components/LaunchLayoutHeader";
import {setPropertyIdAction} from "../actions";

const mapStateToProps = (state)=> {
	return {
		companyName: state.Reactor.companyName,
		propertyName: state.Reactor.propertyName,
		propertyPlatform: state.Reactor.propertyPlatform
	}
};


const LaunchLayoutHeader = connect(mapStateToProps, null)(LaunchLayoutHeaderC);
export default 	LaunchLayoutHeader;

