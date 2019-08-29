import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from 'redux-thunk'
import UIReducer from "./UI/reducers";
import { routerReducer, routerMiddleware } from 'react-router-redux';
import ReactorReducer from "./Reactor/reducers";

export default function configureStore(history, initialState) {

	const middleware = [
		thunk,
		routerMiddleware(history)
	];

	const enhancers = [];
	const isDevelopment = process.env.NODE_ENV === 'development';
	if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
		enhancers.push(window.devToolsExtension());
	}

	const reducers = {
		UI: UIReducer,
		Reactor: ReactorReducer
	};

	const rootReducer = combineReducers({
		...reducers,
		routing: routerReducer
	});

	return createStore(
		rootReducer,
		initialState,
		compose(applyMiddleware(...middleware), ...enhancers)
	);
}
