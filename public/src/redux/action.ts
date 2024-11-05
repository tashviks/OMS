import {ADD_TO_CART} from './constants';
import { DECREASE_QUANTITY } from './constants';
import { INCREASE_QUANTITY } from './constants';
import {SET_PRODUCTS }from './constants';
import { SET_ADDRESS } from './constants';
import { SET_USER } from './constants';
import { UPDATE_QUANTITY } from './constants';
import { FETCH_CART } from './constants';
import { FETCH_CART_SUCCESS } from './constants';
import { FETCH_CART_FAILURE } from './constants';
import { FETCH_PRODUCTS } from './constants';
import { FETCH_PRODUCTS_SUCCESS } from './constants';
import { FETCH_PRODUCTS_FAILURE } from './constants';


export function addToCart(item : any){
    return {
        type : ADD_TO_CART,
        payload : item
    }
}
export function decreaseQuantity(item: any){
    return {
        type : DECREASE_QUANTITY,
        payload : item
    }
}
export function increaseQuantity(item: any){
    return {
        type : INCREASE_QUANTITY,
        payload : item
    }
}
export function updateQuantity(item: any){
    return {
        type : UPDATE_QUANTITY,
        payload : item
    }
}
export function setProducts(item: any){
    return {
    type: SET_PRODUCTS,
    payload: item
    }
}
export function setAddress(item: any){
    return {
        type: SET_ADDRESS,
        payload: item
    }
}
export function setUser(item: any){
    return {
        type: SET_USER,
        payload: item
    }
}   

// Epic Actions 
export const fetchCart = () => ({ type: FETCH_CART });
export const fetchCartSuccess = (item : any) => ({ type: FETCH_CART_SUCCESS, payload: item });
export const fetchCartFailure = (item : any) => ({ type: FETCH_CART_FAILURE, payload: item  });

export const fetchProducts = () => ({ type: FETCH_PRODUCTS });
export const fetchProductsSuccess = (item : any) => ({ type: FETCH_PRODUCTS_SUCCESS, payload: item });
export const fetchProductsFailure = (item : any) => ({ type: FETCH_PRODUCTS_FAILURE, payload: item  });