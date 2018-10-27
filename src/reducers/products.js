import * as Types from './../constants/ActionTypes';

var initialState=[
    {
        id:1,
        price:10,
        description:"good price",
        image:"https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
        name:"ip 7",
        rating:1
    },
    {
        id:2,
        price:5,
        description:"good quality",
        image:"https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
        name:"ip 6",
        rating:2
    },
    {
        id:3,
        price:4,
        description:"good good",
        image:"https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
        name:"ip 5",
        rating:3
    }
]

const products=(state=initialState, action)=>{
    switch(action.type){
        case Types.SHOW_ALL:
            return [...state];
        default:
            return [...state];
    }
}
export default products;