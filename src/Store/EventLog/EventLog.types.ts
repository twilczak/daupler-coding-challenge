export interface EventLogState {
    log: LoggedEvent[] | null
    loading: boolean;
    error: any;
}

export interface LoggedEvent {
    issue_id: number;
    division: string;
    time: string;
    event: string;
    user: string;
}
