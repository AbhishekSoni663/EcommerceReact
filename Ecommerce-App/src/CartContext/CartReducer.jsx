const CartReducer = (state,action)=>{
    switch(action.type){
        case"ADD_CART":
       return{
        ...state,
        cart:[...state.cart , {...action.payload,qty :1}]
       }
        // return {
        //     ...state,
        //     cart : [...state.cart , action.payload]
        // } 
    //    const exist = state.find((x)=> x.id === cart.id);
    //    if(exist){
    //     return state.map((x)=> x.id ===cart.id);
    //    }else{
    //     cart : [...state.cart, action.payload]
    //     return[
    //         ...state,
    //     ]
    //    }
        case "REMOVE":
            return{
                ...state,
                cart:state.cart.filter(item => item.id !== action.payload)
            }
        default:
            return state
    }
    
}
export default CartReducer