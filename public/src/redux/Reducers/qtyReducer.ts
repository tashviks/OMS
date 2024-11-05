import { UPDATE_QUANTITY } from "../constants";
const initialState = 0;
const qtyReducer = (state = initialState, action : any) => {
    switch (action.type) {
        case UPDATE_QUANTITY:
            return state + action.payload;
        default:
            return state;
    }
}

export default qtyReducer;
