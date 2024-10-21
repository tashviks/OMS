import { SET_PRODUCTS, FILTER_PRODUCTS } from '../action';

const initialState = {
  products: [],
  filteredProducts: [],
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload,
      };
    case FILTER_PRODUCTS:
      const query = action.payload.toLowerCase();
      return {
        ...state,
        filteredProducts: state.products.filter(product =>
          product.name.toLowerCase().includes(query)
        ),
      };
    default:
      return state;
  }
};

export default filterReducer;