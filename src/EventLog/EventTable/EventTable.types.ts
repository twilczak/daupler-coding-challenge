import {LoggedEvent} from "../../Store/EventLog/EventLog.types";

export interface EventTableProps {
    userName: string | null;
    log: LoggedEvent[] | null
    loading: boolean;
    error: any;
}
