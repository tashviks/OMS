// cartReducer.js
import { FETCH_CART_FAILURE , FETCH_CART_SUCCESS } from "../constants";

const initialState = {
  cart: null,
  error: null,
};

export const fetchCartReducer = (state = initialState, action : any) => {
  switch (action.type) {
    case FETCH_CART_SUCCESS:
      return {
        ...state,
        cart: action.payload,
        error: null,
      };
    case FETCH_CART_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
