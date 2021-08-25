import React from 'react';
import LoginForm from "./LoginForm/LoginForm";

function Login(): React.ReactElement {

    const onLoginFormSubmit = (userName: string, password: string) => {
        console.log("username: " + userName, "password: " + password);
    }

    return <LoginForm onFormSubmit={onLoginFormSubmit}/>;
}

export default Login
