import {ADD_TO_CART} from './constants';
import { UPDATE_QUANTITY } from './constants';
import { DECREASE_QUANTITY } from './constants';
import { INCREASE_QUANTITY } from './constants';
import { FILTER_CEMENT } from './constants';
import { SET_PRODUCTS } from './constants';
import { FILTER_PRODUCTS } from './constants';
export function addToCart(item){
    return {
        type : ADD_TO_CART,
        payload : item
    }
}
export function updateQuantity(item){
    return {
        type : UPDATE_QUANTITY,
        payload : item
    }
}
export function decreaseQuantity(item){
    return {
        type : DECREASE_QUANTITY,
        payload : item
    }
}
export function increaseQuantity(item){
    return {
        type : INCREASE_QUANTITY,
        payload : item
    }
}
export function getNetDetails(){
    return {
        type : GET_NET_DETAILS,
    }
}
export function filterCement(item){
    return {
        type : FILTER_CEMENT,
        payload : item
    }
}
export const setProducts = (item) => ({
    type: SET_PRODUCTS,
    payload: item,
  });

  export const filterProducts = (item) => ({
    type: FILTER_PRODUCTS,
    payload: item,
  });
