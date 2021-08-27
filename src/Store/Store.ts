import {createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

import session from './Session/SessionReducer';
import eventLog from "./EventLog/EventLogReducer";

const reducers = combineReducers({session, eventLog});
const initialState = {};

const middleware = [thunk];
const middlewareEnhancer = applyMiddleware(...middleware);
const enhancers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);

const Store = createStore(reducers, initialState, composedEnhancers);

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export default Store;
