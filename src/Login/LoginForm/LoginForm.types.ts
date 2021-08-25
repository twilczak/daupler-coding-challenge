export interface LoginFormProps {
    error?: string;
    onFormSubmit: (userName: string, password: string) => void;
}
