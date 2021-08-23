import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from "redux-thunk";

import session from './Session/SessionReducer';

// TODO: add eventLog reducer
const reducers = combineReducers({session});
const initialState = {};

const Store = createStore(reducers, initialState, applyMiddleware(thunk));

export default Store;
