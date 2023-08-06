import { VERIFY_BUDGED_IS_ACTIVE } from "../actions/orders/orders-type";

const initialState = {
  budged: false,
};

const orders = (state = initialState, { type, payload }) => {
  switch (type) {
    case VERIFY_BUDGED_IS_ACTIVE:
      return {
        ...state,
        budged: payload
      };

    default:
      return state;
  }
}

export default orders;