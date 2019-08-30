import { connect } from 'react-redux'
import {PropertiesPage as PropertiesPageC} from "../../../pages/PropertiesPage/PropertiesPage";
import {setPropertyIdAction} from "../actions";

const mapStateToProps = (state)=> {
	return {
		list: state.Reactor.list,
		meta: state.Reactor.meta,
		loaded: state.Reactor.loaded,
		companyId: state.Reactor.companyId,
		propertyId: state.Reactor.propertyId,
		pathname: state.router.location.pathname,
		companyName: state.Reactor.companyName
	}
};


const PropertiesPage = connect(mapStateToProps, {setPropertyIdAction})(PropertiesPageC);
export default 	PropertiesPage;

