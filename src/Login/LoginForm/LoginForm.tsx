import React from "react";
import { LoginFormProps } from "./LoginForm.types";

import "./LoginForm.css";

const LoginForm = ({onFormSubmit, loading, error}: LoginFormProps): React.ReactElement => {

    const [userName, setUserName] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');

    const updateUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    };

    const updatePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    return (
        <form className="LoginForm" onSubmit={(event) => {event.preventDefault();}}>
            <div className="LoginForm-error">{error}</div>
            <label className="LoginForm-label" htmlFor="userName">Username</label>
            <input className="LoginForm-input" name="userName" id="userName" value={userName} onChange={updateUserName} disabled={loading}/>
            <label className="LoginForm-label" htmlFor="password">Password</label>
            <input className="LoginForm-input" name="password" type="password" id="password" value={password} onChange={updatePassword} disabled={loading}/>
            <button className="LoginForm-button" onClick={() => onFormSubmit(userName, password)} disabled={loading}>Submit</button>
        </form>
    );
}

export default LoginForm;
