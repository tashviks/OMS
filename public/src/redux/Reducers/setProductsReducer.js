import {SET_PRODUCTS} from '../constants';
const initialState = [];
const setProductsReducer = (state = initialState, action) => {
    if (state === undefined) {
        return state;
    }
    switch (action.type) {
        case SET_PRODUCTS:
            return action.payload;
        default:
            return state;
    }
}
export default setProductsReducer;