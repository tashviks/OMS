import { FETCH_ADDRESS , FETCH_ADDRESS_FAILURE , FETCH_ADDRESS_SUCCESS } from "../constants";
const initialState = {
    address : null,
    error: null,
    };

export const fetchAddressReducer = (state = initialState, action : any) => {
    switch (action.type) {
        case FETCH_ADDRESS_SUCCESS:
        return {
            ...state,
            address: action.payload,
            error: null,
        };
        case FETCH_ADDRESS_FAILURE:
        return {
            ...state,
            error: action.payload,
        };
        default:
        return state;
    }
}