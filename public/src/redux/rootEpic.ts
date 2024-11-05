import { combineEpics } from 'redux-observable';
import { fetchCartEpic } from './Epics/fetchCartEpic';
import { fetchProductEpic } from './Epics/fetchProductsEpic';
export const rootEpic = combineEpics(
    fetchCartEpic,
    fetchProductEpic
);