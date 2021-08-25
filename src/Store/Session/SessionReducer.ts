
//Action Types
const LOGIN_PENDING = 'Session/LoginPending';
const LOGIN_SUCCESS = 'Session/LoginSuccess';
const LOGIN_FAILURE = 'Session/LoginFailure';
const LOGOUT_PENDING = 'Session/LogoutPending';
const LOGOUT_SUCCESS = 'Session/LogoutSuccess';
const LOGOUT_FAILURE = 'Session/LogoutFailure';

/*
// Action Creators
const LoginPending = (userName: string, password: string) =>
    ({ type: LOGIN_PENDING, payload: {userName, password} });

const LoginSuccess = (userName: string, userId: number) =>
    ({ type: LOGIN_SUCCESS, payload: {userName, userId} });

const LoginFailure = (error: any)  =>
    ({ type: LOGIN_FAILURE, payload: error });

const LogoutPending = (userId: number) => ({ type: LOGOUT_PENDING, payload: {userId} });
const LogoutSuccess = () => ({ type: LOGOUT_SUCCESS});
const LogoutFailure = (error: any) => ({type: LOGOUT_FAILURE, payload: error});
*/

// State
type User = {id: number, name: string};
export interface SessionState {
    user: User | null;
    loading: boolean;
    error: any;
}

const initialState: SessionState = {
    user: null,
    loading: false,
    error: null
};

// Reducer
const SessionReducer = (state = initialState, action: {type: string, payload?: any}): SessionState => {
    switch (action.type) {
        case LOGIN_PENDING:
            return {...state, loading: true, error: null};
        case LOGIN_SUCCESS:
            return {...state, loading: false, user: {id: action.payload.userId, name: action.payload.userName}};
        case LOGIN_FAILURE:
            return {...state, loading: false, error: action.payload.error};
        case LOGOUT_PENDING:
            return {...state, loading: true, user: null};
        case LOGOUT_SUCCESS:
            return {...state, loading: false};
        case LOGOUT_FAILURE:
            return {...state, loading: false, error: action.payload.error};
        default:
            return state;
    }
};

export default SessionReducer;
