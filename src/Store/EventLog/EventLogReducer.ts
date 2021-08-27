import * as data from "../../data/spa_mock_data.json";
import {EventLogState, LoggedEvent} from "./EventLog.types";
import {AppDispatch} from "../Store";

//Action types
const FETCH_EVENTS_PENDING = "EventLog/FetchEventsPending";
const FETCH_EVENTS_SUCCESS = "EventLog/FetchEventsSuccess";
const FETCH_EVENTS_FAILURE = "EventLog/FetchEventsFailure";

//Action Creators
const FetchEvents = () => ({type: FETCH_EVENTS_PENDING});
const FetchEventsSuccess = (log: LoggedEvent[]) => ({type: FETCH_EVENTS_SUCCESS, payload:{log}});
const FetchEventsFailure = (error: any) => ({type: FETCH_EVENTS_FAILURE, payload: {error}});

export const fetchLog = (error?: string) => (dispatch: AppDispatch) => {
    const delay = 1000;
    dispatch(FetchEvents());
    setTimeout(() => {
        if(!error) {
            dispatch(FetchEventsSuccess(data.log))
        } else {
            dispatch(FetchEventsFailure(error));
        }
    }, delay);
};

//State
const initialState: EventLogState = {
    log: null,
    loading: false,
    error: null,
}

// Reducer
const EventLogReducer = (state = initialState, action: {type: string, payload?: any}): EventLogState => {
    switch(action.type) {
        case FETCH_EVENTS_PENDING:
            return {...state, loading: true, log: null, error: null};
        case FETCH_EVENTS_SUCCESS:
            return {...state, loading: false, log: action.payload.log};
        case FETCH_EVENTS_FAILURE:
            return {...state, loading: false, error: action.payload.error};
        default:
            return state;
    }
}

export default EventLogReducer;
