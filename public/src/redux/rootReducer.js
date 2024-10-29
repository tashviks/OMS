import { combineReducers } from "redux";
import reducer from "./Reducers/reducer";
import setProductsReducer from "./Reducers/setProductsReducer";
import setAddressReducer from "./Reducers/setAddressReducer";
export default combineReducers({
    reducer,
    setProductsReducer,
    setAddressReducer
});
