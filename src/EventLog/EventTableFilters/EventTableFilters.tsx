import React from 'react';
import {EventTableFiltersProps} from "./EventTableFilters.types";

import './EventTableFilters.css';

const EventTableFilters = React.memo(({
  loading, issueIdFilter, filterByUser, userName, updateFilterByUser, updateIssueIdFilter
}: EventTableFiltersProps): React.ReactElement => {
    return (
        <div className="EventTableFilters">
            <span>
                <label htmlFor="filter-events-by-id">
                    Filter by issue id:
                </label>
                <input className="EventTableFilters-input"
                       id="filter-events-by-id"
                       value={issueIdFilter}
                       onChange={(event) => updateIssueIdFilter(event.target.value)}
                       disabled={loading}/>
            </span>
            <span>
                <input className="EventTableFilters-checkbox"
                       type="checkbox"
                       id="filter-events-by-user"
                       checked={filterByUser}
                       onChange={() => updateFilterByUser(!filterByUser)}
                       disabled={loading}/>
                <label htmlFor="filter-events-by-user">
                    Display events for current user ({userName})
                </label>
            </span>
        </div>
    );
});

export default EventTableFilters;
