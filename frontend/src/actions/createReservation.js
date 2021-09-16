import { CREATE_RESERVATION_INIT, CREATE_RESERVATION_SUCCESS, CREATE_RESERVATION_FAILURE, UPDATE_RESERVATION_FORM, CLEAR_RESERVATION_FORM } from "./types";
import { RESERVATIONS_API_URL, DEFAULT_REQUEST_HEADERS } from "../consts";
import axios from "axios";

export const updateReservationForm = ({ id, ...reservationForm }) => ({
   type: UPDATE_RESERVATION_FORM,
   payload: reservationForm,
   carId: id,
});

const clearReservationForm = carId => ({
    type: CLEAR_RESERVATION_FORM,
    carId,
});


const addReservationInit = () => ({
    type: CREATE_RESERVATION_INIT
});

const addReservationSuccess =  reservation => ({
    type: CREATE_RESERVATION_SUCCESS,
    payload: reservation,
});

const addReservationFailure = ({ error }, carId) => ({
    type: CREATE_RESERVATION_FAILURE,
    payload: error,
    carId,
});

export default newReservation => dispatch => {
    dispatch(addReservationInit());

    axios({
        url: RESERVATIONS_API_URL,
        method: 'POST',
        headers: DEFAULT_REQUEST_HEADERS,
        withCredentials: true,
        data: JSON.stringify(newReservation),
    }).then(({ data }) => {
        dispatch(addReservationSuccess(data));
        dispatch(clearReservationForm(newReservation.car_id))
    }).catch(error => {
        dispatch(addReservationFailure(error.response.data, newReservation.car_id));
    })
};
