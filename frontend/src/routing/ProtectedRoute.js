import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import { PATHS } from "../consts";

const ProtectedRoute = ({ isAuthenticated, path, authenticationRequired, componentProps, component: Component }) => {

    const routeRender = props => (
        authenticationRequired === isAuthenticated ? (
            <Component {...{...props, ...componentProps}} />
        ) : (
            <Redirect to={{
                pathname: authenticationRequired ? PATHS.LOGIN : PATHS.RESERVATIONS,
                state: props.location,
            }}/>
        )
    );

    return <Route exact path={path} component={routeRender} />
};

export default ProtectedRoute;
