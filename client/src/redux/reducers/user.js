
import { GET_USERS, USER_VALIDATE } from "../actions/action-type"
const initialState = {
    users: [],
    user: {}
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

        default:
            return state;
    }
}

export default user;