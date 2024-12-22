// cartReducer.js
import { FETCH_CART_ITEMS_FAILURE , FETCH_CART_ITEMS_SUCCESS } from "../constants";

const initialState = {
  cartItems : null,
  error: null,
};

export const fetchCartItemsReducer = (state = initialState, action : any) => {
  switch (action.type) {
    case FETCH_CART_ITEMS_SUCCESS:
      return {
        ...state,
        cartItems: action.payload,
        error: null,
      };
    case FETCH_CART_ITEMS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
