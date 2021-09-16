import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navigation.scss';

export const AUTHENTICATED_NAVIGATION = {
    RESERVATIONS: 'Rezerwacje',
    CARS: 'Dostępne Samochody',
};

export const PUBLIC_NAVIGATION = {
    LOGIN: 'Zaloguj się',
    REGISTER: 'Utwórz konto',
};


const Navigation = ({ user, logout }) => {

    const { isAuthenticated, isAdmin } = user;
    const navigationBar = isAuthenticated ? AUTHENTICATED_NAVIGATION : PUBLIC_NAVIGATION;
    const { pathname: currentPath } = useLocation();

    return (
        <nav className="navigation">
            {Object.keys(navigationBar).map(link => {
                const path = `/${link.toLowerCase()}`;

                return (
                    <Link className={`navigation__link ${path === currentPath ? 'active' : ''}`} to={path}
                          key={navigationBar[link]}>{navigationBar[link]}</Link>)
            })}
            {isAuthenticated && isAdmin && <Link className={`navigation__link ${currentPath === '/add-car-form' ? 'active' : ''}`} to='/add-car-form'>Dodaj nowy samochód</Link>}
            <div className="navigation__additional-buttons">
                {isAuthenticated && <div className="navigation__user-panel">
                    <div>{user.surname}, {user.name} | {user.email} {user.isAdmin && <>| <b>Administrator</b> </>}</div>
                    <button className="navigation__link navigation__logout" onClick={logout}>Wyloguj się</button>
                </div>}
            </div>
        </nav>
    )
};

export default Navigation;
