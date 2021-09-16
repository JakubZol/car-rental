import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import LoginForm from '../screens/LoginForm';
import RegisterForm from '../screens/RegisterForm';
import Reservations from '../screens/Reservations';
import Cars from '../screens/Cars';
import AddCarForm from "../screens/AddCarForm";
import NoContent from "../screens/NoContent";
import { PATHS } from "../consts";


const Main = ({ user, fetchUser }) => {
    const { isAuthenticated, isAdmin } = user;

    useEffect(() => {
        if(!isAuthenticated) {
            fetchUser();
        }
    }, []);

    return (
        <Switch>
                <Redirect exact from={PATHS.DEFAULT} to={PATHS.LOGIN}/>
                <ProtectedRoute path={PATHS.LOGIN} component={LoginForm} isAuthenticated={isAuthenticated} authenticationRequired={false}/>
                <ProtectedRoute path={PATHS.REGISTER} component={RegisterForm} isAuthenticated={isAuthenticated} authenticationRequired={false}/>
                <ProtectedRoute path={PATHS.RESERVATIONS} component={Reservations} componentProps={{ user }} isAuthenticated={isAuthenticated} authenticationRequired />
                <ProtectedRoute path={PATHS.CARS} component={Cars} componentProps={{ user }} isAuthenticated={isAuthenticated} authenticationRequired />
                {isAdmin && <ProtectedRoute path={PATHS.ADD_CAR} component={AddCarForm} isAuthenticated={isAuthenticated} authenticationRequired />}
                {!isAdmin && <Redirect from={PATHS.ADD_CAR} to={PATHS.LOGIN}/>}
                <Route component={NoContent}/>
        </Switch>
    )
};


export default Main;
