import { FETCH_CARS_INIT, FETCH_CARS_SUCCESS, FETCH_CARS_FAILURE } from "./types";

import axios from "axios";

const fetchCarsInit = () => ({
    type: FETCH_CARS_INIT
});

const fetchCarsSuccess =  cars => ({
    type: FETCH_CARS_SUCCESS,
    payload: cars,
});

const fetchCarsFailure = error => ({
    type: FETCH_CARS_FAILURE,
    payload: error,
});

export default () => dispatch => {
    dispatch(fetchCarsInit());

    axios({
        url: 'http://localhost:2400/cars',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        withCredentials: true,
    }).then(({ data }) => {
        dispatch(fetchCarsSuccess(data));
    }).catch(error => {
        dispatch(fetchCarsFailure(error));
    })
};
