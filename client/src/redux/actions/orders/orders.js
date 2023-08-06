import {VERIFY_BUDGED_IS_ACTIVE} from "../orders/orders-type"
import axios from "../../../axios";

export const verifyBudgedIsActive = (date, UserId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/order/verify/budget", {date, UserId});
      return dispatch({
        type: VERIFY_BUDGED_IS_ACTIVE,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};