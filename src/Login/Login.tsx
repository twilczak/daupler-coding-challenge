import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

import LoginForm from "./LoginForm/LoginForm";
import {login} from "../Store/Session/SessionReducer";
import {RootState} from "../Store/Store";
import {isAuthenticated} from "../Components/ProtectedRoute/ProtectedRoute";

function Login(): React.ReactElement {

    const dispatch = useDispatch();
    const history = useHistory();
    const {user, error, loading} = useSelector((state:RootState) => state.session);

    const onLoginFormSubmit = (userName: string, password: string) => {
        dispatch(login(userName, password));
    }

    useEffect(() => {
        if(isAuthenticated(user)) {
            history.push('/eventLog');
        }
    }, [history, user]);

    return <LoginForm onFormSubmit={onLoginFormSubmit} {...{loading, error}} />;
}

export default Login
