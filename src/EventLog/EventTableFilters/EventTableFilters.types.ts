export interface EventTableFiltersProps {
    userName: string | null;
    loading: boolean;
    issueIdFilter: string;
    filterByUser: boolean;
    updateIssueIdFilter: (filterValue: string) => void;
    updateFilterByUser: (filterByUser: boolean) => void;
}
