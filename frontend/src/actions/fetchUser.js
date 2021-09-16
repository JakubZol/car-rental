import { FETCH_USER_INIT, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from "./types";

import axios from "axios";

const fetchUserInit = () => ({
    type: FETCH_USER_INIT
});

const fetchUserSuccess =  user => ({
    type: FETCH_USER_SUCCESS,
    payload: user,
});

const fetchUserFailure = error => ({
    type: FETCH_USER_FAILURE,
    payload: error,
});

export default () => dispatch => {
    dispatch(fetchUserInit());

    axios({
        url: 'http://localhost:2400/user',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        withCredentials: true,
    }).then(({ data }) => {
        dispatch(fetchUserSuccess(data));
    }).catch(error => {
        dispatch(fetchUserFailure(error));
    })
};
