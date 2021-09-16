import { FETCH_RESERVATIONS_INIT, FETCH_RESERVATIONS_SUCCESS, FETCH_RESERVATIONS_FAILURE } from "./types";

import axios from "axios";
import {DEFAULT_REQUEST_HEADERS, RESERVATIONS_API_URL} from "../consts";

const fetchReservationsInit = () => ({
    type: FETCH_RESERVATIONS_INIT
});

const fetchReservationsSuccess =  reservations => ({
    type: FETCH_RESERVATIONS_SUCCESS,
    payload: reservations,
});

const fetchReservationsFailure = ({ error }) => ({
    type: FETCH_RESERVATIONS_FAILURE,
    payload: error,
});

export default () => dispatch => {
    dispatch(fetchReservationsInit());

    axios({
        url: RESERVATIONS_API_URL,
        method: 'GET',
        headers: DEFAULT_REQUEST_HEADERS,
        withCredentials: true,
    }).then(({ data }) => {
        dispatch(fetchReservationsSuccess(data));
    }).catch(error => {
        dispatch(fetchReservationsFailure(error.response.data));
    })
};
