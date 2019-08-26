import {
	SET_COMPANY_ID,
	SET_PROPERTY_ID,
	SET_RESOURCE_ID,
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

const setCompanyIdAction = (id) => ({
	type: SET_COMPANY_ID,
	payload:{
		id: id
	}
});

const setPropertyIdAction = (id) => ({
	type: SET_PROPERTY_ID,
	payload:{
		id: id
	}
});

const setResourceId = (id) => ({
	type: SET_RESOURCE_ID,
	payload:{
		id: id
	}
});
const listResourceBeginAction = (path) => ({
	type: LIST_RESOURCE_BEGIN,
	payload:{
		path: path
	}
});

const listResourceSuccessAction = (path, data, meta) => ({
	type: LIST_RESOURCE_SUCCESS,
	payload:{
		path: path,
		data: data,
		meta: meta
	}
});
const listResourceErrorAction = (path, error) => ({
	type: LIST_RESOURCE_ERROR,
	payload:{
		path: path,
		error: error
	}
});
const fetchResourceBeginAction = (path) => ({
	type: FETCH_RESOURCE_BEGIN,
	payload:{
		path: path
	}
});

const fetchResourceSuccessAction = (path, data, meta) => ({
	type: FETCH_RESOURCE_SUCCESS,
	payload:{
		path: path,
		data: data,
		meta: meta
	}
});
const fetchResourceErrorAction = (path, error) => ({
	type: FETCH_RESOURCE_ERROR,
	payload:{
		path: path,
		error: error
	}
});

const createResourceBeginAction = (path) => ({
	type: CREATE_RESOURCE_BEGIN,
	payload:{
		path: path
	}
});

const createResourceSuccessAction =  (path, data, meta)=> ({
	type: CREATE_RESOURCE_SUCCESS,
	payload:{
		path: path,
		data: data,
		meta: meta
	}
});

const createResourceErrorAction = (path, error) => ({
	type: CREATE_RESOURCE_ERROR,
	payload:{
		path: path,
		error: error
	}
});
const updateResourceBeginAction = (path) => ({
	type: UPDATE_RESOURCE_BEGIN,
	payload:{
		path: path
	}
});

const updateResourceSuccessAction =  (path, data, meta) => ({
	type: UPDATE_RESOURCE_SUCCESS,
	payload:{
		path: path,
		data: data,
		meta: meta
	}
});

const updateResourceErrorAction = (path, error) => ({
	type: UPDATE_RESOURCE_ERROR,
	payload:{
		path: path,
		error: error
	}
});

const reviseResourceBeginAction = (path) => ({
	type: REVISE_RESOURCE_BEGIN,
	payload:{
		path: path
	}
});

const reviseResourceSuccessAction = (path, data, meta) => ({
	type: REVISE_RESOURCE_SUCCESS,
	payload:{
		path: path,
		data: data,
		meta: meta
	}
});

const reviseResourceErrorAction = (path, error) => ({
	type: REVISE_RESOURCE_ERROR,
	payload:{
		path: path,
		error: error
	}
});

const deleteResourceBeginAction = (path) => ({
	type: DELETE_RESOURCE_BEGIN,
	payload:{
		path: path
	}
});

const deleteResourceSuccessAction =  (path, data, meta)=> ({
	type: DELETE_RESOURCE_SUCCESS,
	payload:{
		path: path,
		data: data,
		meta: meta
	}
});

const deleteResourceErrorAction = (path, error) => ({
	type: DELETE_RESOURCE_ERROR,
	payload:{
		path: path,
		error: error
	}
});

export {
	setCompanyIdAction,
	setPropertyIdAction,
	setResourceId,
	listResourceBeginAction,
	listResourceSuccessAction,
	listResourceErrorAction,
	fetchResourceBeginAction,
	fetchResourceSuccessAction,
	fetchResourceErrorAction,
	createResourceBeginAction,
	createResourceSuccessAction,
	createResourceErrorAction,
	updateResourceBeginAction,
	updateResourceSuccessAction,
	updateResourceErrorAction,
	reviseResourceBeginAction,
	reviseResourceSuccessAction,
	reviseResourceErrorAction,
	deleteResourceBeginAction,
	deleteResourceSuccessAction,
	deleteResourceErrorAction
}
