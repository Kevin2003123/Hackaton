import { GET_DISCHES_BY_RESTAURANT_ID } from "../actions/disches/disches-type";

const initialState = {
  dishes: [],
};

const dishes = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DISCHES_BY_RESTAURANT_ID:
      return {
        ...state,
        dishes: payload
      };

    default:
      return state;
  }
}

export default dishes;