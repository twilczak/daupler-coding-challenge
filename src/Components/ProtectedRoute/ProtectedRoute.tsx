import React from 'react';
import {Redirect, Route, RouteProps} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../Store/Store";
import {User} from "../../Store/Session/Session.types";


export const isAuthenticated = (user: User|null) => !!user && !!user.name && !!user.id;

const ProtectedRoute = ({children, ...rest}: any): React.ReactElement<RouteProps> => {

    const {user} = useSelector((state:RootState) => state.session);

    return (
        <Route {...rest} render={() => {
            return isAuthenticated(user)
                ? children
                : <Redirect to="/login"/>
        }}/>
    );
}

export default ProtectedRoute;
