import {ADD_TO_CART} from './constants';
import { DECREASE_QUANTITY } from './constants';
import { INCREASE_QUANTITY } from './constants';
import {SET_PRODUCTS }from './constants';
import { SET_ADDRESS } from './constants';

export function addToCart(item){
    return {
        type : ADD_TO_CART,
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
export function setProducts(item){
    return {
    type: SET_PRODUCTS,
    payload: item
    }
}
export function setAddress(item){
    return {
        type: SET_ADDRESS,
        payload: item
    }
}

