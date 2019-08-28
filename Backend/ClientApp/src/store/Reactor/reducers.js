import {
	SET_COMPANY_ID,
	SET_PROPERTY_ID,
	SET_RESOURCE_ID,
	SET_INITIALIZED,
	LIST_RESOURCE_BEGIN,
	LIST_RESOURCE_SUCCESS,
	LIST_RESOURCE_ERROR,
	FETCH_RESOURCE_BEGIN,
	FETCH_RESOURCE_SUCCESS,
	FETCH_RESOURCE_ERROR,
	CREATE_RESOURCE_BEGIN,
	CREATE_RESOURCE_SUCCESS,
	CREATE_RESOURCE_ERROR,
	UPDATE_RESOURCE_BEGIN,
	UPDATE_RESOURCE_SUCCESS,
	UPDATE_RESOURCE_ERROR,
	REVISE_RESOURCE_BEGIN,
	REVISE_RESOURCE_SUCCESS,
	REVISE_RESOURCE_ERROR,
	DELETE_RESOURCE_BEGIN,
	DELETE_RESOURCE_SUCCESS,
	DELETE_RESOURCE_ERROR,
} from './types'

const initialState = {
	initialized: false,
	loaded: false,
	companyId: undefined,
	companyName: undefined,
	propertyId: undefined,
	propertyName: undefined,
	resourceId: undefined,
	resourceType: undefined,
	path: window.location.pathname,
	data: {},
	list: [],
	map: {},
	meta: {}
};

export default (state = initialState, action)  => {
	switch (action.type) {
		case SET_COMPANY_ID:
			return {
				...state,
				companyId: action.payload.id,
				companyName: action.payload.name
			};
		case SET_PROPERTY_ID:
			return {
				...state,
				propertyId: action.payload.id,
				propertyName: action.payload.name
			};
		case SET_RESOURCE_ID:
			return {
				...state,
				resourceId: action.payload.id,
				resourceName: action.payload.name
			};
		case SET_INITIALIZED:
			return {
				...state,
				initialized: true
			};
		case LIST_RESOURCE_BEGIN:
		case FETCH_RESOURCE_BEGIN:
		case CREATE_RESOURCE_BEGIN:
		case UPDATE_RESOURCE_BEGIN:
		case REVISE_RESOURCE_BEGIN:
		case DELETE_RESOURCE_BEGIN:
			return {
				...state,
				path: action.payload.path,
				loaded: false,
			};
		case LIST_RESOURCE_SUCCESS:
		case FETCH_RESOURCE_SUCCESS:
		case CREATE_RESOURCE_SUCCESS:
		case UPDATE_RESOURCE_SUCCESS:
		case REVISE_RESOURCE_SUCCESS:
		case DELETE_RESOURCE_SUCCESS:
			const newState = {
				...state,
				error: {},
				loaded: true,
				...action.payload,
			};
			return newState;
		case LIST_RESOURCE_ERROR:
		case FETCH_RESOURCE_ERROR:
		case CREATE_RESOURCE_ERROR:
		case UPDATE_RESOURCE_ERROR:
		case REVISE_RESOURCE_ERROR:
		case DELETE_RESOURCE_ERROR:
			return {
				...state,
				path: action.payload.path,
				error: action.payload.error,
				loaded: true
			};
		default:
			return state
	}
};
