import { combineEpics } from 'redux-observable';
import { fetchCartEpic } from './Epics/fetchCartEpic';
import { fetchProductEpic } from './Epics/fetchProductsEpic';
import { fetchCartItemEpic } from './Epics/fetchCartItemEpic';
import { fetchAddressEpic } from './Epics/fetchAddressEpic';
export const rootEpic = combineEpics(
    fetchCartEpic,
    fetchProductEpic,
    fetchCartItemEpic,
    fetchAddressEpic,
);