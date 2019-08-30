import {
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
	deleteResourceErrorAction,
	setInitializedAction,
	setCompanyIdAction, setPropertyIdAction
} from "./actions";

import {
	get,
	post,
	patch,
	del
} from "../../helpers/betterFetch";

import { push } from 'connected-react-router'

import {PathHandler} from "./PathHandler";

export const initialize = (path) => async (dispatch, getState) => {
	const initializeCompaniesPath = "/companies";
	const pathHandler = new PathHandler(path);
	let response = null;
	try {
		response = await get(initializeCompaniesPath);
		const companyData = response.parsedBody.data[0];

		dispatch(setInitializedAction());
		dispatch(setCompanyIdAction(companyData.id, companyData.attributes.name));

		if(pathHandler.parts.length >= 4) {
			const propertyId = pathHandler.parts[3];
			const initializePropertyPath = `/properties/${propertyId}`;
			response = await get(initializePropertyPath);
			const propertyData = response.parsedBody.data;
			dispatch(setPropertyIdAction(propertyData.id, propertyData.attributes.name, propertyData.attributes.platform));
		} else if (pathHandler.parts.length <= 2 ) {
			dispatch(push(`/companies/${companyData.id}/properties`))
		}

	} catch (e) {
		dispatch(listResourceErrorAction(initializeCompaniesPath, e));
	}
};

export const listResource = (path) => async (dispatch, getState) => {
	const pathHandler = new PathHandler(path);
	pathHandler.parts.length < 4 && dispatch(setPropertyIdAction(undefined));
	dispatch(listResourceBeginAction(pathHandler.resourceUri));
	let response = null;
	try {
		response = await get(pathHandler.resourceUri + "?page[size]=10");
		const {parsedBody} = response;
		const {data, list, map, meta} = formatDataForState(parsedBody);

		dispatch(listResourceSuccessAction(pathHandler.pathname, data, list, map, meta));
	} catch (e) {
		dispatch(listResourceErrorAction(pathHandler.pathname, e));
	}
};

export const fetchResource = (path) => async (dispatch, getState) => {
	dispatch(fetchResourceBeginAction(path));
	let response = null;
	try {
		response = await get(path);
		const {parsedBody} = response;
		dispatch(fetchResourceSuccessAction(path, parsedBody.data, parsedBody.meta));
	} catch (e) {
		dispatch(fetchResourceErrorAction(path, e));
	}
};

export const createResource = (path, data) => async (dispatch, getState) => {
	dispatch(createResourceBeginAction(path));
	let response = null;
	try {
		response = await post(path, data);
		const {parsedBody} = response;
		dispatch(createResourceSuccessAction(path, parsedBody.data, parsedBody.meta));
	} catch (e) {
		dispatch(createResourceErrorAction(path, e));
	}
};

export const updateResource = (path, data) => async (dispatch, getState) => {
	dispatch(updateResourceBeginAction(path));
	let response = null;
	try {
		response = await patch(path, data);
		const {parsedBody} = response;
		dispatch(updateResourceSuccessAction(path, parsedBody.data, parsedBody.meta));
	} catch (e) {
		dispatch(updateResourceErrorAction(path, e));
	}
};

export const reviseResource = (path, data) => async (dispatch, getState) => {
	dispatch(reviseResourceBeginAction(path));
	let response = null;
	try {
		data.meta = {action:'revise'};
		response = await patch(path, data);
		const {parsedBody} = response;
		dispatch(reviseResourceSuccessAction(path, parsedBody.data, parsedBody.meta));
	} catch (e) {
		dispatch(reviseResourceErrorAction(path, e));
	}
};

export const deleteResource = (path, data) => async (dispatch, getState) => {
	dispatch(deleteResourceBeginAction(path));
	let response = null;
	try {
		response = await del(path);
		const {parsedBody} = response;
		dispatch(deleteResourceSuccessAction(path, parsedBody.data, parsedBody.meta));
	} catch (e) {
		dispatch(deleteResourceErrorAction(path, e));
	}
};


const formatDataForState = (parsedBody) => {
	const {data, meta} = parsedBody;
	const formattedState = {};
	const dataIsArray = Array.isArray(data);

	if(!dataIsArray) {
		formattedState.data =  data;
	} else {
		formattedState.list = data;
		formattedState.map = {};

		data.forEach((value, index) => {
			const valueCopy = {...value};
			valueCopy._index = index;
			formattedState.map[valueCopy.id] = valueCopy
		});
	}

	formattedState.meta = meta;
	return formattedState;
};
