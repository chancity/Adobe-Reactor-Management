import { connect } from 'react-redux'
import PropertiesPageC from "../../../pages/PropertiesPage/PropertiesPage";
import {setPropertyIdAction} from "../actions";

const mapStateToProps = (state)=> {
	return {
		list: state.Reactor.list,
		meta: state.Reactor.meta,
		loaded: state.Reactor.loaded,
		companyId: state.Reactor.companyId,
		propertyId: state.Reactor.propertyId,
		path: state.Reactor.path,
		companyName: state.Reactor.companyName
	}
};


const PropertiesPage = connect(mapStateToProps, {setPropertyIdAction})(PropertiesPageC);
export default 	PropertiesPage;

