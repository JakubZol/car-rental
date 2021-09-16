import { CHECK_AVAILABILITY_INIT, CHECK_AVAILABILITY_SUCCESS, CHECK_AVAILABILITY_FAILURE } from "./types";
import { CARS_API_URL, DEFAULT_REQUEST_HEADERS } from "../consts";
import axios from "axios";

const checkAvailabilityInit = () => ({
    type: CHECK_AVAILABILITY_INIT
});

const checkAvailabilitySuccess = ({ available }, carId) => ({
    type: CHECK_AVAILABILITY_SUCCESS,
    payload: available,
    carId
});

const checkAvailabilityFailure = ({ error }) => ({
    type: CHECK_AVAILABILITY_FAILURE,
    payload: error,
});

export default params => dispatch => {
    dispatch(checkAvailabilityInit());

    axios({
        url: `${CARS_API_URL}/availability`,
        method: 'GET',
        headers: DEFAULT_REQUEST_HEADERS,
        withCredentials: true,
        params,
    }).then(({ data }) => {
        dispatch(checkAvailabilitySuccess(data, params.carId));
    }).catch(error => {
        dispatch(checkAvailabilityFailure(error.response.data));
    })
};
