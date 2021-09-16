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
    UPDATE_UPDATE_RESERVATION_FORM,
    CLEAR_UPDATE_RESERVATION_FORM,
    LOGIN_FAILURE,
    REGISTER_FAILURE,
    CREATE_RESERVATION_FAILURE,
    ADD_CAR_FAILURE,
    UPDATE_CAR_FAILURE,
    UPDATE_RESERVATION_FAILURE
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
        case LOGIN_FAILURE:
            return {
                ...state,
                login: { ...state.login, error: action.payload },
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
        case REGISTER_FAILURE:
            return {
                ...state,
                register: { ...state.register, error: action.payload },
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
        case CREATE_RESERVATION_FAILURE:
            return {
                ...state,
                reservation: state.reservation.map(reservation => reservation.carId === action.carId ? { ...reservation, error: action.payload } : reservation),
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
        case ADD_CAR_FAILURE:
            return {
                ...state,
                car: { ...state.car, error: action.payload },
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
        case UPDATE_CAR_FAILURE:
            return {
                ...state,
                updateCar: { ...state.updateCar, error: action.payload }
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
        case UPDATE_RESERVATION_FAILURE:
            return {
                ...state,
                updateReservation: { ...state.updateReservation, error: action.payload }
            };
        default:
            return state;
    }
}
