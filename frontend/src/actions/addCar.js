import {ADD_CAR_INIT, ADD_CAR_SUCCESS, ADD_CAR_FAILURE, UPDATE_NEW_CAR_FORM, CLEAR_NEW_CAR_FORM} from "./types";
import axios from "axios";

export const updateNewCarForm = carForm => ({
    type: UPDATE_NEW_CAR_FORM,
    payload: carForm,
});

const clearNewCarForm = () => ({
    type: CLEAR_NEW_CAR_FORM,
});


const addCarInit = () => ({
    type: ADD_CAR_INIT
});

const addCarSuccess =  car => ({
    type: ADD_CAR_SUCCESS,
    payload: car,
});

const addCarFailure = error => ({
    type: ADD_CAR_FAILURE,
    payload: error,
});

export default newCar => dispatch => {
    dispatch(addCarInit());

    axios({
        url: 'http://localhost:2400/cars',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        withCredentials: true,
        data: JSON.stringify(newCar),
    }).then(({ data }) => {
        dispatch(addCarSuccess(data));
        dispatch(clearNewCarForm());
    }).catch(error => {
        dispatch(addCarFailure(error));
    })
};
