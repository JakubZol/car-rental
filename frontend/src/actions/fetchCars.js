import { FETCH_CARS_INIT, FETCH_CARS_SUCCESS, FETCH_CARS_FAILURE } from "./types";
import { CARS_API_URL, DEFAULT_REQUEST_HEADERS } from "../consts";
import axios from "axios";

const fetchCarsInit = () => ({
    type: FETCH_CARS_INIT
});

const fetchCarsSuccess =  cars => ({
    type: FETCH_CARS_SUCCESS,
    payload: cars,
});

const fetchCarsFailure = ({ error }) => ({
    type: FETCH_CARS_FAILURE,
    payload: error,
});

export default () => dispatch => {
    dispatch(fetchCarsInit());

    axios({
        url: CARS_API_URL,
        method: 'GET',
        headers: DEFAULT_REQUEST_HEADERS,
        withCredentials: true,
    }).then(({ data }) => {
        dispatch(fetchCarsSuccess(data));
    }).catch(error => {
        dispatch(fetchCarsFailure(error.response.data));
    })
};
