import {LOGOUT_INIT, LOGOUT_SUCCESS, LOGOUT_FAILURE } from "./types";
import axios from "axios";

const logoutInit = () => ({
    type: LOGOUT_INIT
});

const logoutSuccess =  () => ({
    type: LOGOUT_SUCCESS,
});

const logoutFailure = error => ({
    type: LOGOUT_FAILURE,
    payload: error,
});

export default () => dispatch => {
    dispatch(logoutInit());

    axios({
        url: 'http://localhost:2400/logout',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        withCredentials: true,
    }).then(() => {
        dispatch(logoutSuccess());
    }).catch(error => {
        dispatch(logoutFailure(error));
    })
};
