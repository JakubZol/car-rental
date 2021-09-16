import {
    UPDATE_RESERVATION_INIT,
    UPDATE_RESERVATION_SUCCESS,
    UPDATE_RESERVATION_FAILURE,
    UPDATE_UPDATE_RESERVATION_FORM, CLEAR_UPDATE_RESERVATION_FORM
} from "./types";
import axios from "axios";
import { DEFAULT_REQUEST_HEADERS, RESERVATIONS_API_URL } from "../consts";


export const updateUpdateReservationForm = reservationForm => ({
    type: UPDATE_UPDATE_RESERVATION_FORM,
    payload: reservationForm,
});

export const clearUpdateReservationForm = () => ({
    type: CLEAR_UPDATE_RESERVATION_FORM,
});

const updateReservationInit = () => ({
    type: UPDATE_RESERVATION_INIT
});

const updateReservationSuccess =  reservation => ({
    type: UPDATE_RESERVATION_SUCCESS,
    payload: reservation,
});

const updateReservationFailure = ({ error }) => ({
    type: UPDATE_RESERVATION_FAILURE,
    payload: error,
});

export default reservationData => dispatch => {
    dispatch(updateReservationInit());

    axios({
        url: RESERVATIONS_API_URL,
        method: 'PUT',
        headers: DEFAULT_REQUEST_HEADERS,
        withCredentials: true,
        data: JSON.stringify(reservationData),
    }).then(({ data }) => {
        dispatch(updateReservationSuccess(data));
        dispatch(clearUpdateReservationForm());
    }).catch(error => {
        dispatch(updateReservationFailure(error.response.data));
    })
};
