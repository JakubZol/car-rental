import {
    UPDATE_RESERVATION_INIT,
    UPDATE_RESERVATION_SUCCESS,
    UPDATE_RESERVATION_FAILURE,
    UPDATE_UPDATE_RESERVATION_FORM, CLEAR_UPDATE_RESERVATION_FORM
} from "./types";
import axios from "axios";

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

const updateReservationFailure = error => ({
    type: UPDATE_RESERVATION_FAILURE,
    payload: error,
});

export default reservationData => dispatch => {
    dispatch(updateReservationInit());

    axios({
        url: 'http://localhost:2400/reservations',
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        withCredentials: true,
        data: JSON.stringify(reservationData),
    }).then(({ data }) => {
        dispatch(updateReservationSuccess(data));
        dispatch(clearUpdateReservationForm());
    }).catch(error => {
        dispatch(updateReservationFailure(error));
    })
};
