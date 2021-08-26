export interface LoginFormProps {
    error?: string;
    loading?: boolean;
    onFormSubmit: (userName: string, password: string) => void;
}
