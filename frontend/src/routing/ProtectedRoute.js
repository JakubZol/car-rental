import React from 'react'
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, path, authenticationRequired, componentProps, component: Component }) => {

    const routeRender = props => (
        authenticationRequired === isAuthenticated ? (
            <Component {...{...props, ...componentProps}} />
        ) : (
            <Redirect to={{
                pathname: authenticationRequired ? '/login' : '/reservations',
                state: props.location,
            }}/>
        )
    );

    return <Route exact path={path} component={routeRender} />
};

export default ProtectedRoute;
