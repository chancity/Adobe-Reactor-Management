import { connect } from 'react-redux'
import PropertiesPageC from "../../../pages/PropertiesPage";
import {setPropertyIdAction, setResourceIdAction} from "../actions";

const mapStateToProps = (state)=> {
	return {
		list: state.Reactor.list,
		meta: state.Reactor.meta,
		loaded: state.Reactor.loaded,
		companyId: state.Reactor.companyId,
		propertyId: state.Reactor.propertyId,
		companyName: state.Reactor.companyName
	}
};


const PropertiesPage = connect(mapStateToProps, {setPropertyIdAction})(PropertiesPageC);
export default 	PropertiesPage;

