import { combineReducers } from "redux";
import reducer from "./Reducers/reducer";
import filterReducer from "./Reducers/filterReducer";
export default combineReducers({
    reducer,
    filterReducer
});
