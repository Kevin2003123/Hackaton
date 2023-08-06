import { GET_RESTAURANTS } from "./restaurants-type";
import axios from "../../../axios";

export const getRestaurants = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/restaurants/${id}`);
      return dispatch({
        type: GET_RESTAURANTS,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};