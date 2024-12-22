import {IS_BUTTON_ACTIVE} from '../constants';
const initialState : any = true;
const isButtonActive = (state = initialState, action : any) => {
    if (state === undefined) {
        return state;
    }
    switch (action.type) {
        case IS_BUTTON_ACTIVE:
            return action.payload;
        default:
            return state;
    }
}
export default isButtonActive;