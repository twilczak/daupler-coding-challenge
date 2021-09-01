import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {fetchLog} from "../Store/EventLog/EventLogReducer";
import EventTable from "./EventTable/EventTable";
import EventTableFilters from './EventTableFilters/EventTableFilters';
import {RootState} from "../Store/Store";

import "./EventLog.css";

function EventLog(): React.ReactElement {
    const dispatch = useDispatch();

    const eventLogState = useSelector((state:RootState) => {
        const userName = state.session.user ? state.session.user.name : null;
        const {log, loading} = state.eventLog;

        return {userName, log, loading};
    });

    const {userName, log, loading} = eventLogState;

    const [issueIdFilter, setIssueIdFilter] = React.useState('');
    const [filterByUser, setFilterByUser] = React.useState(false);
    const [filteredIssues, setFilteredIssues] = React.useState(eventLogState.log);

    React.useEffect(() => {
        if(log) {
            if(filterByUser || !!issueIdFilter) {
                setFilteredIssues(log.filter((event) => {
                    if(filterByUser && !issueIdFilter) {
                        return event.user === userName;
                    } else if(issueIdFilter && !filterByUser) {
                        return event.issue_id.toString(10) === issueIdFilter;
                    } else {
                        return event.issue_id.toString(10) === issueIdFilter &&  event.user === userName;
                    }
                }));
            } else {
                setFilteredIssues(log);
            }
        }
    }, [filterByUser, issueIdFilter, userName, log, loading]);

    useEffect(() => {
        dispatch(fetchLog());
    }, [dispatch]);

    return (
        <div className="EventLog">
            <EventTableFilters filterByUser={filterByUser}
                               issueIdFilter={issueIdFilter}
                               userName={eventLogState.userName}
                               loading={eventLogState.loading}
                               updateFilterByUser={setFilterByUser}
                               updateIssueIdFilter={setIssueIdFilter}/>
            <EventTable log={filteredIssues}/>
        </div>
    );
}

export default EventLog;
