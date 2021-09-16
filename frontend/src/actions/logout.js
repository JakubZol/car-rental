import {LOGOUT_INIT, LOGOUT_SUCCESS, LOGOUT_FAILURE } from "./types";
import {API_URL, DEFAULT_REQUEST_HEADERS} from "../consts";
import axios from "axios";

const logoutInit = () => ({
    type: LOGOUT_INIT
});

const logoutSuccess =  () => ({
    type: LOGOUT_SUCCESS,
});

const logoutFailure = ({ error }) => ({
    type: LOGOUT_FAILURE,
    payload: error,
});

export default () => dispatch => {
    dispatch(logoutInit());

    axios({
        url: `${API_URL}/logout`,
        method: 'GET',
        headers: DEFAULT_REQUEST_HEADERS,
        withCredentials: true,
    }).then(() => {
        dispatch(logoutSuccess());
    }).catch(error => {
        dispatch(logoutFailure(error.response.data));
    })
};
