import {
    CLEAR_LOGIN_FORM,
    UPDATE_LOGIN_FORM,
    CLEAR_REGISTER_FORM,
    UPDATE_REGISTER_FORM,
    UPDATE_RESERVATION_FORM,
    CLEAR_RESERVATION_FORM,
    CHECK_AVAILABILITY_SUCCESS,
    UPDATE_NEW_CAR_FORM,
    CLEAR_NEW_CAR_FORM,
    UPDATE_UPDATE_CAR_FORM,
    CLEAR_UPDATE_CAR_FORM,
    UPDATE_UPDATE_RESERVATION_FORM, CLEAR_UPDATE_RESERVATION_FORM
} from "../actions/types";

const INITIAL_STATE = {
    login: {},
    register: {},
    reservation: [],
    car: {},
    updateCar: {},
    updateReservation: {},
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_LOGIN_FORM:
            return {
                ...state,
                login: { ...state.login, ...action.payload }
            };
        case CLEAR_LOGIN_FORM:
            return {
                ...state,
                login: INITIAL_STATE.login,
            };
        case UPDATE_REGISTER_FORM:
            return {
                ...state,
                register: { ...state.register, ...action.payload }
            };
        case CLEAR_REGISTER_FORM:
            return {
                ...state,
                register: INITIAL_STATE.register,
            };
        case UPDATE_RESERVATION_FORM:
            return {
                ...state,
                reservation: state.reservation.some(reservation => reservation.carId === action.carId) ?
                    state.reservation.map(reservation => reservation.carId === action.carId ? { ...reservation, ...action.payload, available: undefined } : reservation) :
                    [...state.reservation, { carId: action.carId, ...action.payload }],
            };
        case CLEAR_RESERVATION_FORM:
            return {
                ...state,
                reservation: INITIAL_STATE.reservation,
            };
        case CHECK_AVAILABILITY_SUCCESS:
            return {
                ...state,
                reservation: state.reservation.map(reservation => reservation.carId === action.carId ? { ...reservation, available: action.payload } : reservation),
            };
        case UPDATE_NEW_CAR_FORM:
            return {
                ...state,
                car: { ...state.car, ...action.payload },
            };
        case CLEAR_NEW_CAR_FORM:
            return {
                ...state,
                car: INITIAL_STATE.car,
            };
        case UPDATE_UPDATE_CAR_FORM:
            return {
                ...state,
                updateCar: { ...state.updateCar, ...action.payload }
            };
        case CLEAR_UPDATE_CAR_FORM:
            return {
                ...state,
                updateCar: INITIAL_STATE.updateCar,
            };
        case UPDATE_UPDATE_RESERVATION_FORM:
            return {
                ...state,
                updateReservation: { ...state.updateReservation, ...action.payload }
            };
        case CLEAR_UPDATE_RESERVATION_FORM:
            return {
                ...state,
                updateReservation: INITIAL_STATE.updateReservation,
            };
        default:
            return state;
    }
}
