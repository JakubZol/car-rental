import { CREATE_RESERVATION_INIT, CREATE_RESERVATION_SUCCESS, CREATE_RESERVATION_FAILURE, UPDATE_RESERVATION_FORM, CLEAR_RESERVATION_FORM } from "./types";
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

const addReservationFailure = error => ({
    type: CREATE_RESERVATION_FAILURE,
    payload: error,
});

export default newReservation => dispatch => {
    dispatch(addReservationInit());

    axios({
        url: 'http://localhost:2400/reservations',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        withCredentials: true,
        data: JSON.stringify(newReservation),
    }).then(({ data }) => {
        dispatch(addReservationSuccess(data));
        dispatch(clearReservationForm(newReservation.car_id))
    }).catch(error => {
        dispatch(addReservationFailure(error));
    })
};
