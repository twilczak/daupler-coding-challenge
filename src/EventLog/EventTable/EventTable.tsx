import React from 'react';
import {EventTableProps} from "./EventTable.types";
import {LoggedEvent} from "../../Store/EventLog/EventLog.types";

import "./EventTable.css";

const EventTable = ({userName, log, loading}: EventTableProps): React.ReactElement => {

    const [issueIdFilter, setIssueIdFilter] = React.useState('');
    const [filterByUser, setFilterByUser] = React.useState(false);
    const [filteredIssues, setFilteredIssues] = React.useState(log);

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
    }, [filterByUser, issueIdFilter, log, userName]);

    const renderTableRow = (event: LoggedEvent, index: number) => (
        <tr key={index}>
            <td>{event.division}</td>
            <td>{event.issue_id}</td>
            <td>{event.event}</td>
            <td>{event.time}</td>
            <td>{event.user}</td>
        </tr>
    );

    return <>
        <div className="EventFilters">
            <span>
                <label className="EventFilters-label"
                       htmlFor="filter-events-by-id">
                    Filter by issue id:
                </label>
                <input className="EventFilters-input"
                       id="filter-events-by-id"
                       value={issueIdFilter}
                       onChange={(event) => setIssueIdFilter(event.target.value)}
                       disabled={loading}/>
            </span>
            <span>
                <input className="EventFilters-checkbox"
                       type="checkbox"
                       id="filter-events-by-user"
                       checked={filterByUser}
                       onChange={() => setFilterByUser(!filterByUser)}
                       disabled={loading}/>
                <label className="EventFilters-Label"
                       htmlFor="filter-events-by-user">
                    Display events for current user ({userName})
                </label>
            </span>
        </div>
        <div className="EventTable">
            <table className="EventTable-table">
                <thead>
                <tr>
                    <th>Division</th>
                    <th>Issue ID</th>
                    <th>Event</th>
                    <th>Time</th>
                    <th>User</th>
                </tr>
                </thead>
                <tbody>
                {filteredIssues && filteredIssues.map(renderTableRow)}
                </tbody>
            </table>
        </div>
    </>
}

export default EventTable;
