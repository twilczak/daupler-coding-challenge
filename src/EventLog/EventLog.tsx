import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {fetchLog} from "../Store/EventLog/EventLogReducer";
import EventTable from "./EventTable/EventTable";
import {RootState} from "../Store/Store";

function EventLog(): React.ReactElement {
    const dispatch = useDispatch();

    const eventTableProps = useSelector((state:RootState) => {
        const userName = state.session.user ? state.session.user.name : null;
        const {log, loading} = state.eventLog;

        return {userName, log, loading};
    });

    useEffect(() => {
        dispatch(fetchLog());
    }, [dispatch]);

    return <EventTable {...eventTableProps}/>;
}

export default EventLog;
