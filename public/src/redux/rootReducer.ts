import { fetchProductReducer } from './Reducers/fetchProductReducer';
import { fetchProductsFailure } from './action';
import { combineReducers } from "redux";

import reducer from "./Reducers/reducer";
import setProductsReducer from "./Reducers/setProductsReducer";
import setAddressReducer from "./Reducers/setAddressReducer";
import qtyReducer from "./Reducers/qtyReducer";
import { fetchCartReducer } from "./Reducers/fetchCartRedicer";

export default combineReducers({
    reducer,
    setProductsReducer,
    setAddressReducer,
    qtyReducer,
    fetchCartReducer,
    fetchProductReducer,
});
