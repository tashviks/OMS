import { SET_ADDRESS } from "../constants";
const initialState = [{}];
const setAddressReducer = (state = initialState, action) => {
    if (state === undefined) {
        return state;
    }
    switch (action.type) {
        case SET_ADDRESS:
            return action.payload;
        default:
            return state;
    }
}

export default setAddressReducer;