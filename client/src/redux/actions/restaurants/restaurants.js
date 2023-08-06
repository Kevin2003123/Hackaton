import { GET_RESTAURANTS } from "./restaurants-type";
import axios from "../../../axios";

export const getRestaurants = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/restaurant");
      return dispatch({
        type: GET_RESTAURANTS,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};