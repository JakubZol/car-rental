import { CHECK_AVAILABILITY_INIT, CHECK_AVAILABILITY_SUCCESS, CHECK_AVAILABILITY_FAILURE } from "./types";

import axios from "axios";

const checkAvailabilityInit = () => ({
    type: CHECK_AVAILABILITY_INIT
});

const checkAvailabilitySuccess = ({ available }, carId) => ({
    type: CHECK_AVAILABILITY_SUCCESS,
    payload: available,
    carId
});

const checkAvailabilityFailure = error => ({
    type: CHECK_AVAILABILITY_FAILURE,
    payload: error,
});

export default params => dispatch => {
    dispatch(checkAvailabilityInit());

    axios({
        url: 'http://localhost:2400/cars/availability',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        withCredentials: true,
        params,
    }).then(({ data }) => {
        dispatch(checkAvailabilitySuccess(data, params.carId));
    }).catch(error => {
        dispatch(checkAvailabilityFailure(error));
    })
};
