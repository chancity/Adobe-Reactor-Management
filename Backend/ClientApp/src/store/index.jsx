//import {applyMiddleware, combineReducers, createStore} from "redux";
import {combineReducers, createStore} from "redux";
//import thunk from 'redux-thunk';
import UIReducer from "./UI/reducers";


const rootReducer = combineReducers({
	UI: UIReducer
});

//const middlewares = [thunk.withExtraArgument];
//const middleWareEnhancer = applyMiddleware(...middlewares);
//export default createStore(rootReducer, middleWareEnhancer);
export default createStore(rootReducer);