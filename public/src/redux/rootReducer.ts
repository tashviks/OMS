import { fetchCartItemsReducer } from './Reducers/fetchCartItemReducer';
import { fetchProductReducer } from './Reducers/fetchProductReducer';
import { combineReducers } from "redux";
import reducer from "./Reducers/reducer";
import setProductsReducer from "./Reducers/setProductsReducer";
import setAddressReducer from "./Reducers/setAddressReducer";
import qtyReducer from "./Reducers/qtyReducer";
import { fetchCartReducer } from "./Reducers/fetchCartRedicer";
import { fetchAddressReducer } from './Reducers/fetchAddressReducert';


export default combineReducers({
    reducer,
    setProductsReducer,
    setAddressReducer,
    qtyReducer,
    fetchCartReducer,
    fetchProductReducer,
    fetchCartItemsReducer,
    fetchAddressReducer
});
