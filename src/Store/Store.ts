import {createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

import session from './Session/SessionReducer';

// TODO: add eventLog reducer
const reducers = combineReducers({session});
const initialState = {};

const middleware = [thunk];
const middlewareEnhancer = applyMiddleware(...middleware);
const enhancers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);

const Store = createStore(reducers, initialState, composedEnhancers);

export default Store;
