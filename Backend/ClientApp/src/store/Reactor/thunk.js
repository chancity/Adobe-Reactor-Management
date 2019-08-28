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

import history from "../../app/History";

import {
	get,
	post,
	patch,
	del
} from "../../helpers/betterFetch";
import {PathHandler} from "./PathHandler";

export const initialize = (path) => async (dispatch, getState) => {
	const initializePath = "/companies";
	const pathHandler = new PathHandler(path);
	let response = null;
	try {
		response = await get(initializePath);

		const {parsedBody} = response;
		const {attributes, id} = parsedBody.data[0];

		dispatch(setInitializedAction());
		dispatch(setCompanyIdAction(id, attributes.name));
		pathHandler.parts.length >= 4 && dispatch(setPropertyIdAction(pathHandler.parts[3]));
		//dispatch(listResourceSuccessAction(initializePath, [],{}));
		pathHandler.parts.length <= 2 && history.push(`/companies/${id}/properties`)
	} catch (e) {
		dispatch(listResourceErrorAction(initializePath, e));
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

		dispatch(listResourceSuccessAction(pathHandler.resourceUri, parsedBody.data, parsedBody.meta));
	} catch (e) {
		dispatch(listResourceErrorAction(pathHandler.resourceUri, e));
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

