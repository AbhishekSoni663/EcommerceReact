const ProductReducer = (state,action)=>{
    switch(action.type){
        case "PRODUCT":
            return{
                ...state,
                products:action.payload
            }
            default:
                return state
    }
}
export default ProductReducer