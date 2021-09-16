import {CREATE_RESERVATION_SUCCESS, FETCH_RESERVATIONS_SUCCESS, UPDATE_RESERVATION_SUCCESS} from '../actions/types';

export default (state = [], action) => {
    switch(action.type) {
        case FETCH_RESERVATIONS_SUCCESS:
            return action.payload;
        case UPDATE_RESERVATION_SUCCESS:
            return state.map(reservation => reservation._id === action.payload._id ? action.payload : reservation);
        case CREATE_RESERVATION_SUCCESS:
            return [ ...state, action.payload ];
        default:
            return state;
    }
}
