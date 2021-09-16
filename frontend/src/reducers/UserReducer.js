import {FETCH_USER_SUCCESS, LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTER_SUCCESS} from "../actions/types";

const INITIAL_STATE = {
    isAuthenticated: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
        case FETCH_USER_SUCCESS:
            return {
                ...action.payload,
                isAuthenticated: true,
            };
        case LOGOUT_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
};
