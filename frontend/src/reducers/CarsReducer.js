import { FETCH_CARS_SUCCESS, ADD_CAR_SUCCESS, UPDATE_CAR_SUCCESS, DELETE_CAR_SUCCESS } from "../actions/types";

export default (state = [], action) => {
    switch (action.type){
        case FETCH_CARS_SUCCESS:
            return action.payload;
        case ADD_CAR_SUCCESS:
            return [...state, action.payload];
        case UPDATE_CAR_SUCCESS:
            return state.map(car => car._id === action.payload._id ? action.payload : car);
        case DELETE_CAR_SUCCESS:
            return state.filter(({ _id }) => _id !== action.carId);
        default:
            return state;
    }
};
