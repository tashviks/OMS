import { ADD_TO_CART , DECREASE_QUANTITY, INCREASE_QUANTITY } from "../constants";
import store from "../store";
const initialState : any = [];

const reducer = (state = initialState, action : any) => {
  if (state === undefined) {
    return state;
  }
  switch (action.type) {
    case ADD_TO_CART:
      const itemIndex = state.findIndex((item: { id: any; })  => item.id === action.payload.id);
      if (itemIndex !== -1) {
        const updatedState = state.map((item: { quantity: any; }, index: any) =>
          index === itemIndex ? { ...item, quantity: item.quantity + action.payload.quantity } : item
        );
        console.log(action.payload.quantity);
        return updatedState;
      } else {
        return [...state, action.payload];
      }
    case DECREASE_QUANTITY :
      const decItemIndex = state.findIndex((item: { id: any; }) => item.id === action.payload.id);
      if(state[decItemIndex].quantity <= 1){
        return state.filter((item: { id: any; }) => item.id !== action.payload.id);
      }
      else{
        const updatedState = state.map((item: { quantity: number; }, index: any) =>
          index === decItemIndex ? { ...item, quantity: item.quantity - 1 } : item
        );
        return updatedState;
      }
    case INCREASE_QUANTITY :
      const incItemIndex = state.findIndex((item: { id: any; }) => item.id === action.payload.id);
      const updatedState = state.map((item: { quantity: number; }, index: any) =>
        index === incItemIndex ? { ...item, quantity: item.quantity + 1 } : item
      );
      return updatedState;  
      
    default:
      return state;
  }
};

export default reducer;
