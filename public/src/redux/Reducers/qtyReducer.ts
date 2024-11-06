import { UPDATE_QUANTITY , SET_QTY} from "../constants";
const initialState = 0;
const qtyReducer = (state = initialState, action : any) => {
    switch (action.type) {
        case UPDATE_QUANTITY:
            if (Number.isNaN(action.payload)) {
                return 90;
            }else if(action.payload < 0){
                return 0;
            }else{
            return state + action.payload;
            }
        case SET_QTY:
            return action.payload;
        default:
            return state;
    }
}
export default qtyReducer;
