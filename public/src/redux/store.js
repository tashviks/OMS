import {configureStore} from '@reduxjs/toolkit';
import CartReducer  from './Reducers/reducer';
import rootReducer from './rootReducer';
const store = configureStore({
    reducer : rootReducer,
    composeWithDevTools : true, 
});
export default store;

