import { DELETE_CAR_INIT, DELETE_CAR_SUCCESS, DELETE_CAR_FAILURE } from "./types";
import axios from "axios";


const deleteCarInit = () => ({
    type: DELETE_CAR_INIT
});

const deleteCarSuccess = carId => ({
    type: DELETE_CAR_SUCCESS,
    carId,
});

const deleteCarFailure = error => ({
    type: DELETE_CAR_FAILURE,
    payload: error,
});

export default carId => dispatch => {
    dispatch(deleteCarInit());

    axios({
        url: 'http://localhost:2400/cars',
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        withCredentials: true,
        data: JSON.stringify({ carId }),
    }).then(() => {
        dispatch(deleteCarSuccess(carId));
    }).catch(error => {
        dispatch(deleteCarFailure(error));
    })
};
