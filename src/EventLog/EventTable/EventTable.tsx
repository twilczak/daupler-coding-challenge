import React from 'react';
import {EventTableProps} from "./EventTable.types";
import {LoggedEvent} from "../../Store/EventLog/EventLog.types";

import "./EventTable.css";

const EventTable = ({log}: EventTableProps): React.ReactElement => {

    const renderTableRow = (event: LoggedEvent, index: number) => (
        <tr key={index}>
            <td>{event.division}</td>
            <td>{event.issue_id}</td>
            <td>{event.event}</td>
            <td>{event.time}</td>
            <td>{event.user}</td>
        </tr>
    );

    return (
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
    );
}

export default EventTable;
