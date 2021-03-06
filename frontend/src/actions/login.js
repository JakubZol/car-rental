import { UPDATE_LOGIN_FORM, CLEAR_LOGIN_FORM, LOGIN_INIT, LOGIN_SUCCESS, LOGIN_FAILURE } from "./types";
import {API_URL, DEFAULT_REQUEST_HEADERS} from "../consts";
import axios from 'axios';

export const updateLoginForm = loginForm => ({
    type: UPDATE_LOGIN_FORM,
    payload: loginForm
});

const loginInit = () => ({
    type: LOGIN_INIT
});

const loginSuccess =  user => ({
    type: LOGIN_SUCCESS,
    payload: user,
});

const loginFailure = ({ error }) => ({
    type: LOGIN_FAILURE,
    payload: error,
});

const cleanLoginForm = () => ({
    type: CLEAR_LOGIN_FORM,
});

export default loginCredentials => dispatch => {
    dispatch(loginInit());

    axios({
        url: `${API_URL}/login`,
        method: 'POST',
        headers: DEFAULT_REQUEST_HEADERS,
        data: JSON.stringify(loginCredentials),
        withCredentials: true,
    }).then(({ data }) => {
        dispatch(loginSuccess(data));
        dispatch(cleanLoginForm());
    }).catch(error => {
        dispatch(loginFailure(error.response.data));
    })
};
