import {
    UPDATE_REGISTER_FORM,
    CLEAR_REGISTER_FORM,
    REGISTER_INIT,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
} from "./types";
import axios from "axios";

export const updateRegisterForm = registerForm => ({
    type: UPDATE_REGISTER_FORM,
    payload: registerForm,
});

const registerInit = () => ({
    type: REGISTER_INIT
});

const registerSuccess =  user => ({
    type: REGISTER_SUCCESS,
    payload: user,
});

const registerFailure = error => ({
    type: REGISTER_FAILURE,
    payload: error,
});

const cleanRegisterForm = () => ({
    type: CLEAR_REGISTER_FORM,
});

export default registerCredentials => dispatch => {
    dispatch(registerInit());

    axios({
        url: 'http://localhost:2400/register',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        data: JSON.stringify(registerCredentials),
        withCredentials: true,
    }).then(({ data }) => {
        dispatch(registerSuccess(data));
        dispatch(cleanRegisterForm());
    }).catch(error => {
        dispatch(registerFailure(error));
    })
};
