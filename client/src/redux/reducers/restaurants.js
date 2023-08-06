import { GET_RESTAURANTS } from "../actions/restaurants/restaurants-type";

const initialState = {
  restaurants: [],
};

const restaurants = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_RESTAURANTS:
      return {
        ...state,
        restaurants: payload
      };

    default:
      return state;
  }
}

export default restaurants;