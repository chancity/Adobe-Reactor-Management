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
	try {

		dispatch(createResourceSuccessAction(path, data));
	} catch (e) {
		dispatch(createResourceErrorAction(path, e));
	}
};

export const updateResource = (path, data) => async (dispatch, getState) => {
	dispatch(updateResourceBeginAction(path));
	try {

		dispatch(updateResourceSuccessAction(path, data));
	} catch (e) {
		dispatch(updateResourceErrorAction(path, e));
	}
};

export const reviseResource = (path, data) => async (dispatch, getState) => {
	dispatch(reviseResourceBeginAction(path));
	try {

		dispatch(reviseResourceSuccessAction(path, data));
	} catch (e) {
		dispatch(reviseResourceErrorAction(path, e));
	}
};

export const deleteResource = (path, data) => async (dispatch, getState) => {
	dispatch(deleteResourceBeginAction(path));
	try {

		dispatch(deleteResourceSuccessAction(path, data));
	} catch (e) {
		dispatch(deleteResourceErrorAction(path, e));
	}
};

