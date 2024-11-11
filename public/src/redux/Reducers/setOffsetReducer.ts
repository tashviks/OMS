import {  SET_OFFSET } from "../constants";
const initialState = 0;
const setOffsetReducer = (state = initialState, action : any) => {
    if (state === undefined) {
        return state;
    }
    switch (action.type) {
        case SET_OFFSET:
            return action.payload;
        default:
            return state;
    }
}

export default setOffsetReducer;