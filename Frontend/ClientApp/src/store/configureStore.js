import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { createMemoryHistory, createBrowserHistory } from 'history';
import thunk from 'redux-thunk'
import UIReducer from "./UI/reducers";
import { routerMiddleware, connectRouter } from 'connected-react-router'
import ReactorReducer from "./Reactor/reducers";

// A nice helper to tell us if we're on the server
export const isServer = !(
	typeof window !== 'undefined' &&
	window.document &&
	window.document.createElement
);

export default (url = '/', initialState) => {
	const history = isServer
		? createMemoryHistory({
			initialEntries: [url]
		})
		: createBrowserHistory();

	const enhancers = [];
	const isDevelopment = process.env.NODE_ENV === 'development';
	// Dev tools are helpful
	if (isDevelopment && !isServer) {
		const devToolsExtension = window.devToolsExtension;

		if (typeof devToolsExtension === 'function') {
			enhancers.push(devToolsExtension());
		}
	}
	const middleware = [
		thunk,
		routerMiddleware(history)
	];

	const reducers = {
		UI: UIReducer,
		Reactor: ReactorReducer
	};

	const rootReducer = combineReducers({
		...reducers,
		router: connectRouter(history)
	});

	const store = createStore(
		rootReducer,
		initialState,
		compose(applyMiddleware(routerMiddleware(history), ...middleware), ...enhancers)
	);

	return {
		store,
		history
	}
}
