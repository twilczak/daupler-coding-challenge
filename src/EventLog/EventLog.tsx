import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";

import {fetchLog} from "../Store/EventLog/EventLogReducer";
import EventTable from "./EventTable/EventTable";

function EventLog(): React.ReactElement {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchLog());
    }, [dispatch]);

    return <EventTable/>;
}

export default EventLog;
