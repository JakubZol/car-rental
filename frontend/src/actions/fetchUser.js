import { FETCH_USER_INIT, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from "./types";
import { API_URL, DEFAULT_REQUEST_HEADERS } from "../consts";

import axios from "axios";

const fetchUserInit = () => ({
    type: FETCH_USER_INIT
});

const fetchUserSuccess =  user => ({
    type: FETCH_USER_SUCCESS,
    payload: user,
});

const fetchUserFailure = ({ error }) => ({
    type: FETCH_USER_FAILURE,
    payload: error,
});

export default () => dispatch => {
    dispatch(fetchUserInit());

    axios({
        url: `${API_URL}/user`,
        method: 'GET',
        headers: DEFAULT_REQUEST_HEADERS,
        withCredentials: true,
    }).then(({ data }) => {
        dispatch(fetchUserSuccess(data));
    }).catch(error => {
        dispatch(fetchUserFailure(error.response.data));
    })
};
