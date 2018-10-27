import {WELCOME} from './../constants/Messages';
import * as Types from './../constants/ActionTypes'

var initialMess=WELCOME ? WELCOME : '';

const message=(state=initialMess, action)=>{
    switch(action.type){
        case Types.UPDATE_MESS:
            state=action.mess;
            return [...state];
        default:
            return [...state];
    }
}

export default message;