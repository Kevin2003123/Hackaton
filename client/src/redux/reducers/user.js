
import { GET_USERS, USER_VALIDATE, GET_USER_BY_USERNAME } from "../actions/action-type"
const initialState = {
    users: [],
    user: {},
    userByUserName: {}
};

const user = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_USERS:
            return {
                ...state,
                users: payload
            };

        case USER_VALIDATE:
            return {
                ...state,
                user: payload
            };
        case GET_USER_BY_USERNAME:
            return {
                ...state,
                userByUserName: payload
            };

        default:
            return state;
    }
}

export default user;