import {ADD_TO_CART, IS_BUTTON_ACTIVE, SET_FILTER_PRODUCTS} from './constants';
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
import { FETCH_CART_ITEMS } from './constants';
import { FETCH_CART_ITEMS_SUCCESS } from './constants';
import { FETCH_CART_ITEMS_FAILURE } from './constants';
import { FETCH_ADDRESS } from './constants';
import { FETCH_ADDRESS_SUCCESS } from './constants';
import { FETCH_ADDRESS_FAILURE } from './constants';
import { SET_QTY } from './constants';
import { SET_OFFSET } from './constants';
import { EMPTY_CART } from './constants';
import { REMOVE_FROM_CART } from './constants';
import { SET_TOTAL_AMOUNT } from './constants';


export function addToCart(item : any){
    return {
        type : ADD_TO_CART,
        payload : item
    }
}
export function emptyCart(item : any){
    return {
        type : EMPTY_CART,
        payload : item
    }
}
export function setQuantity(item: any){
    return {
        type : SET_QTY,
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
export function updateQuantity(item: number){
    return {
        type : UPDATE_QUANTITY,
        payload : item
    }
}
export function removeFromCart(item: any){
    return {
        type : REMOVE_FROM_CART,
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
export function setOffset(item: any){
    return {
        type: SET_OFFSET,
        payload: item
    }
} 
export function setFilterProducts(item: any){
    return {
        type: SET_FILTER_PRODUCTS,
        payload: item
    }
}
export function setTotalAmount(item: any){
    return {
        type: SET_TOTAL_AMOUNT,
        payload: item
    }
}
export const isButtonActive = (item : any) => ({ type: IS_BUTTON_ACTIVE, payload: item });

// Epic Actions 
export const fetchCart = () => ({ type: FETCH_CART });
export const fetchCartSuccess = (item : any) => ({ type: FETCH_CART_SUCCESS, payload: item });
export const fetchCartFailure = (item : any) => ({ type: FETCH_CART_FAILURE, payload: item  });

export const fetchProducts = (item : any) => ({ type: FETCH_PRODUCTS , payload : item });
export const fetchProductsSuccess = (item : any) => ({ type: FETCH_PRODUCTS_SUCCESS, payload: item });
export const fetchProductsFailure = (item : any) => ({ type: FETCH_PRODUCTS_FAILURE, payload: item  });

export const fetchCartItems = (item : any) => ({ type: FETCH_CART_ITEMS , payload: item });
export const fetchCartItemsSuccess = (item : any) => ({ type: FETCH_CART_ITEMS_SUCCESS, payload: item });
export const fetchCartItemsFailure = (item : any) => ({ type: FETCH_CART_ITEMS_FAILURE, payload: item  });

export const fetchAddress = () => ({ type: FETCH_ADDRESS });
export const fetchAddressSuccess = (item : any) => ({ type: FETCH_ADDRESS_SUCCESS, payload: item });
export const fetchAddressFailure = (item : any) => ({ type: FETCH_ADDRESS_FAILURE, payload: item  });
