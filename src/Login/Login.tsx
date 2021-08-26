import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import LoginForm from "./LoginForm/LoginForm";
import {login} from "../Store/Session/SessionReducer";
import {RootState} from "../Store/Store";

function Login(): React.ReactElement {

    const dispatch = useDispatch();
    const sessionState = useSelector((state:RootState) => {
        const {loading, error} = state.session;
        return {loading, error};
    })

    const onLoginFormSubmit = (userName: string, password: string) => {
        dispatch(login(userName, password));
    }

    return <LoginForm onFormSubmit={onLoginFormSubmit} {...sessionState} />;
}

export default Login
