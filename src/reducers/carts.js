var initialState=[
    {
        id:1,
        price:10,
        description:"good price",
        image:"",
        name:"ip 7"
    },
    {
        id:2,
        price:5,
        description:"good quality",
        image:"",
        name:"ip 6"
    },
    {
        id:3,
        price:4,
        description:"good good",
        image:"",
        name:"ip 5"
    },
    {
        id:4,
        price:3,
        description:"good to use",
        image:"",
        name:"ip 4"
    }
]
const products=(state=initialState, action)=>{
    switch(action.type){
        default:
            return state;
    }
}
export default products;