import { FETCH_RESERVATIONS_INIT, FETCH_RESERVATIONS_SUCCESS, FETCH_RESERVATIONS_FAILURE } from "./types";

import axios from "axios";

const fetchReservationsInit = () => ({
    type: FETCH_RESERVATIONS_INIT
});

const fetchReservationsSuccess =  reservations => ({
    type: FETCH_RESERVATIONS_SUCCESS,
    payload: reservations,
});

const fetchReservationsFailure = error => ({
    type: FETCH_RESERVATIONS_FAILURE,
    payload: error,
});

export default () => dispatch => {
    dispatch(fetchReservationsInit());

    axios({
        url: 'http://localhost:2400/reservations',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        withCredentials: true,
    }).then(({ data }) => {
        dispatch(fetchReservationsSuccess(data));
    }).catch(error => {
        dispatch(fetchReservationsFailure(error));
    })
};
