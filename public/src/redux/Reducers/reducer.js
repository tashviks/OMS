import { ADD_TO_CART , DECREASE_QUANTITY, INCREASE_QUANTITY } from "../constants";
const initialState = [];

const reducer = (state = initialState, action) => {
  if (state === undefined) {
    return state;
  }
  switch (action.type) {
    case ADD_TO_CART:
      const itemIndex = state.findIndex(item => item.id === action.payload.id);
      if (itemIndex !== -1) {
        const updatedState = state.map((item, index) =>
          index === itemIndex ? { ...item, quantity: item.quantity + action.payload.quantity } : item
        );
        console.log(action.payload.quantity);
        return updatedState;
      } else {
        return [...state, action.payload];
      }


    case DECREASE_QUANTITY :
      const decItemIndex = state.findIndex(item => item.id === action.payload.id);
      // on clicking the minus button , if qty less than 1 , remove from cart else decrease the qty
      if(state[decItemIndex].quantity <= 1){
        return state.filter((item) => item.id !== action.payload.id);
      }
      else{
        const updatedState = state.map((item, index) =>
          index === decItemIndex ? { ...item, quantity: item.quantity - 1 } : item
        );
        return updatedState;
      }


    case INCREASE_QUANTITY :
      const incItemIndex = state.findIndex(item => item.id === action.payload.id);
      const updatedState = state.map((item, index) =>
        index === incItemIndex ? { ...item, quantity: item.quantity + 1 } : item
      );
      return updatedState;  
      
    default:
      return state;
  }
};

export default reducer;
