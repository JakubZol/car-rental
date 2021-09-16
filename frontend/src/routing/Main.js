import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import LoginForm from '../screens/LoginForm';
import RegisterForm from '../screens/RegisterForm';
import Reservations from '../screens/Reservations';
import Cars from '../screens/Cars';
import AddCarForm from "../screens/AddCarForm";


const Main = ({ user, fetchUser }) => {
    const { isAuthenticated, isAdmin } = user;

    useEffect(() => {
        if(!isAuthenticated) {
            fetchUser();
        }
    }, []);

    return (
        <Switch>
                <Redirect exact from='/' to='/login'/>
                <ProtectedRoute path="/login" component={LoginForm} isAuthenticated={isAuthenticated} authenticationRequired={false}/>
                <ProtectedRoute path="/register" component={RegisterForm} isAuthenticated={isAuthenticated} authenticationRequired={false}/>
                <ProtectedRoute path="/reservations" component={Reservations} componentProps={{ user }} isAuthenticated={isAuthenticated} authenticationRequired />
                <ProtectedRoute path="/cars" component={Cars} componentProps={{ user }} isAuthenticated={isAuthenticated} authenticationRequired />
                {isAdmin && <ProtectedRoute path="/add-car-form" component={AddCarForm} isAuthenticated={isAuthenticated} authenticationRequired />}
                <Route component={() => <div>no content</div>}/>
        </Switch>
    )
};


export default Main;
