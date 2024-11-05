import { FETCH_PRODUCTS_FAILURE , FETCH_PRODUCTS_SUCCESS } from "../constants";

const initialState = {
  products : null,
  error: null,
};
export const fetchProductReducer = (state = initialState, action : any) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        error: null,
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};