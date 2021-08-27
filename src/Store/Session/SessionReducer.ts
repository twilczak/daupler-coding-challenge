import * as data from "../../data/spa_mock_data.json";
import {SessionState} from "./Session.types";
import {AppDispatch} from "../Store";

//Action Types
const LOGIN_PENDING = 'Session/LoginPending';
const LOGIN_SUCCESS = 'Session/LoginSuccess';
const LOGIN_FAILURE = 'Session/LoginFailure';

// Action Creators
const LoginPending = (userName: string) =>
    ({ type: LOGIN_PENDING, payload: {userName} });

const LoginSuccess = (userName: string, userId: number) =>
    ({ type: LOGIN_SUCCESS, payload: {userName, userId} });

const LoginFailure = (error: any)  =>
    ({ type: LOGIN_FAILURE, payload: error });

export const login = (userName: string, password:string ) => (dispatch: AppDispatch) => {
    const delay = 1000;
    dispatch(LoginPending(userName));
    setTimeout(() => {
        const match = data.users.filter(value => value.username === userName && value.password === password)
        if(match && match.length > 0) {
            dispatch(LoginSuccess(userName, match[0].id));
        } else {
            dispatch(LoginFailure({error: "Invalid Credentials"}));
        }
    }, delay);
}

// State
const initialState: SessionState = {
    user: null,
    loading: false,
    error: null
};

// Reducer
const SessionReducer = (state = initialState, action: {type: string, payload?: any}): SessionState => {
    switch (action.type) {
        case LOGIN_PENDING:
            return {...state, loading: true, error: null, user: null};
        case LOGIN_SUCCESS:
            return {...state, loading: false, user: {id: action.payload.userId, name: action.payload.userName}};
        case LOGIN_FAILURE:
            return {...state, loading: false, error: action.payload.error};
        default:
            return state;
    }
};

export default SessionReducer;
