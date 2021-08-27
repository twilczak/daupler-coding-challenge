import React from 'react';
import {EventTableProps} from "./EventTable.types";
import {LoggedEvent} from "../../Store/EventLog/EventLog.types";

import "./EventTable.css";

const EventTable = ({userName, log, loading, error}: EventTableProps): React.ReactElement => {

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
            <div>
                <label className="EventFilters-label" htmlFor="filter-events-by-id">
                    Filter by issue id:
                </label>
                <input className="EventFilters-input" id="filter-events-by-id"/>
            </div>
            <div>
                <input className="EventFilters-checkbox" type="checkbox" id="filter-events-by-user"/>
                <label className="EventFilters-Label" htmlFor="filter-events-by-user">
                    Display events for current user ({userName})
                </label>
            </div>
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
                {log && log.map(renderTableRow)}
                </tbody>
            </table>
        </div>
    </>
}

export default EventTable;
