import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import UIReducer from "./UI/reducers";
import ReactorReducer from "./Reactor/reducers";

const rootReducer = combineReducers({
	UI: UIReducer,
	Reactor: ReactorReducer
});

const middlewares = [thunkMiddleware];
const middleWareEnhancer = applyMiddleware(...middlewares);
const store = createStore(rootReducer, middleWareEnhancer);
export default store;
