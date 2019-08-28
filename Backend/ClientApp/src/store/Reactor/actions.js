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

const setCompanyIdAction = (id, name) => ({
	type: SET_COMPANY_ID,
	payload:{
		id: id,
		name: name
	}
});

const setPropertyIdAction = (id, name) => ({
	type: SET_PROPERTY_ID,
	payload:{
		id: id,
		name: name
	}
});

const setResourceIdAction = (id, name) => ({
	type: SET_RESOURCE_ID,
	payload:{
		id: id,
		type: name
	}
});

const setInitializedAction = () => ({
	type: SET_INITIALIZED,
});

const listResourceBeginAction = (path) => ({
	type: LIST_RESOURCE_BEGIN,
	payload:{
		path: path
	}
});

const listResourceSuccessAction = (path, data, list, map, meta) => ({
	type: LIST_RESOURCE_SUCCESS,
	payload:{
		path: path,
		data: data,
		list: list,
		map: map,
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

const fetchResourceSuccessAction = (path, data, list, map, meta) => ({
	type: FETCH_RESOURCE_SUCCESS,
	payload:{
		path: path,
		data: data,
		list: list,
		map: map,
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

const createResourceSuccessAction =  (path, data, list, map, meta)=> ({
	type: CREATE_RESOURCE_SUCCESS,
	payload:{
		path: path,
		data: data,
		list: list,
		map: map,
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

const updateResourceSuccessAction =  (path, data, list, map, meta) => ({
	type: UPDATE_RESOURCE_SUCCESS,
	payload:{
		path: path,
		data: data,
		list: list,
		map: map,
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

const reviseResourceSuccessAction = (path, data, list, map, meta) => ({
	type: REVISE_RESOURCE_SUCCESS,
	payload:{
		path: path,
		data: data,
		list: list,
		map: map,
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

const deleteResourceSuccessAction =  (path, data, list, map, meta)=> ({
	type: DELETE_RESOURCE_SUCCESS,
	payload:{
		path: path,
		data: data,
		list: list,
		map: map,
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
	setResourceIdAction,
	setInitializedAction,
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
