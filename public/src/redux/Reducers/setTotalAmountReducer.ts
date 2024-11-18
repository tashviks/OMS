import {SET_TOTAL_AMOUNT} from '../constants';
const initialState : any = [];
const setTotalAmountReducer = (state = initialState, action : any) => {
    if (state === undefined) {
        return state;
    }
    switch (action.type) {
        case SET_TOTAL_AMOUNT:
            return action.payload;
        default:
            return state;
    }
}
export default setTotalAmountReducer;