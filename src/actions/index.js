import * as Types from './../constants/ActionTypes';

export const ADD_CART=(product,quantity)=>{
    return {
        type:Types.ADD_CART,
        product,
        quantity
    }
}

export const UPDATE_CART=(product,quantity)=>{
    return {
        type:Types.UPDATE_CART,
        product,
        quantity
    }
}

export const DELETE_CART=(product)=>{
    return {
        type:Types.DELETE_CART,
        product
    }
}

export const SHOW_ALL=()=>{
   return {
        type:Types.SHOW_ALL
   } 
}

export const UPDATE_MESS=(mess)=>{
    return {
        type:Types.UPDATE_MESS,
        mess
    }
}