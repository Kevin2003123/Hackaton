import { GET_DISCHES_BY_RESTAURANT_ID } from "./disches-type";
import axios from "../../../axios";

export const getDishes = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/dish/restaurant/${id}`);
      return dispatch({
        type: GET_DISCHES_BY_RESTAURANT_ID,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};