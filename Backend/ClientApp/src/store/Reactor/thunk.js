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
	deleteResourceErrorAction
} from "./actions";


import {
	get,
	post,
	patch,
	del
} from "../../helpers/betterFetch";

export const listResource = (path) => async (dispatch, getState) => {
	dispatch(listResourceBeginAction(path));
	let response = null;
	try {
		response = await get(path);
		const {parsedBody} = response;

		dispatch(listResourceSuccessAction(path, parsedBody.data, parsedBody.meta));
	} catch (e) {
		dispatch(listResourceErrorAction(path, e));
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

