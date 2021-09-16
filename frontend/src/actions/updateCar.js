import {
    UPDATE_CAR_INIT,
    UPDATE_CAR_SUCCESS,
    UPDATE_CAR_FAILURE,
    UPDATE_UPDATE_CAR_FORM,
    CLEAR_UPDATE_CAR_FORM
} from "./types";
import axios from "axios";

export const updateUpdateCarForm = reservationForm => ({
    type: UPDATE_UPDATE_CAR_FORM,
    payload: reservationForm,
});

export const clearUpdateCarForm = () => ({
    type: CLEAR_UPDATE_CAR_FORM,
});


const updateCarInit = () => ({
    type: UPDATE_CAR_INIT
});

const updateCarSuccess =  car => ({
    type: UPDATE_CAR_SUCCESS,
    payload: car,
});

const updateCarFailure = error => ({
    type: UPDATE_CAR_FAILURE,
    payload: error,
});

export default carData => dispatch => {
    dispatch(updateCarInit());

    axios({
        url: 'http://localhost:2400/cars',
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        withCredentials: true,
        data: JSON.stringify(carData),
    }).then(({ data }) => {
        dispatch(updateCarSuccess(data));
        dispatch(clearUpdateCarForm());
    }).catch(error => {
        dispatch(updateCarFailure(error));
    })
};
