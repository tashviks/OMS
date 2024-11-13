import { SET_FILTER_PRODUCTS } from "../constants";
const initialState = [{}];
const setFilterReducer = (state = initialState, action : any) => {
    if (state === undefined) {
        return state;
    }
    switch (action.type) {
        case SET_FILTER_PRODUCTS:
            return action.payload;
        default:
            return state;
    }
}

export default setFilterReducer;