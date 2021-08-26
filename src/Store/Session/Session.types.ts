export interface User {
    id: number, name: string
};

export interface SessionState {
    user: User | null;
    loading: boolean;
    error: any;
}
