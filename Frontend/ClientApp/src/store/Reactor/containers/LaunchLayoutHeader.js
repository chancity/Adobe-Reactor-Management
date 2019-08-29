import { connect } from 'react-redux'
import LaunchLayoutHeaderC from "../../../components/LaunchLayoutHeader";

const mapStateToProps = (state)=> {
	return {
		companyName: state.Reactor.companyName,
		companyId: state.Reactor.companyId,
		propertyName: state.Reactor.propertyName,
		propertyPlatform: state.Reactor.propertyPlatform
	}
};


const LaunchLayoutHeader = connect(mapStateToProps, null)(LaunchLayoutHeaderC);
export default 	LaunchLayoutHeader;

