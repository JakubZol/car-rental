import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import FormsReducer from './reducers/FormsReducer';
import UserReducer from './reducers/UserReducer';
import CarsReducer from './reducers/CarsReducer';
import ReservationsReducer from './reducers/ReservationsReducer';
import AppRouting from './routing';
import AppNavigation from './navigation';

const rootReducer = combineReducers({
    forms: FormsReducer,
    user: UserReducer,
    cars: CarsReducer,
    reservations: ReservationsReducer,
});

const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
);


function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppNavigation/>
                <AppRouting/>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
