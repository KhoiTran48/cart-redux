import {combineReducers} from 'redux';
import products from './products';
import carts from './carts';
import message from './message';

const myReducers=combineReducers({
    products,carts,message
})
export default myReducers;