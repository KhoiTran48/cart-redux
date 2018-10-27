import * as Types from './../constants/ActionTypes';

var cartsFromStore=JSON.parse(localStorage.getItem('cart'));

var initialState=cartsFromStore ? cartsFromStore : [];
const carts=(state=initialState, action)=>{
    var {product, quantity,type}=action;
    switch(type){
        case Types.ADD_CART:
            var index=state.findIndex((cart)=>{
                return cart.product.id === product.id;
            })
            if(index===-1){
                state.push({
                    product,
                    quantity
                })
            }else{
                state[index].quantity+=quantity
            }
            localStorage.setItem('cart',JSON.stringify(state));
            return [...state];
        case Types.UPDATE_CART:
            var index=state.findIndex((cart)=>{
                return cart.product.id === product.id;
            })
            if(index===-1){
                return [...state];
            }else{
                if((state[index].quantity+=quantity) ===0 ){
                    state.splice(index,1);
                }
            }
            localStorage.setItem('cart',JSON.stringify(state));
            return [...state];
        case Types.DELETE_CART:
            var index=state.findIndex((cart)=>{
                return cart.product.id === product.id;
            })
            if(index===-1){
                return [...state];
            }
            state.splice(index,1);
            localStorage.setItem('cart',JSON.stringify(state));
            return [...state];
        default:
            return [...state];
    }
}
export default carts;