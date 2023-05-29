const JeweleryReducer = (state,action)=>{
    switch(action.type){
        case  "JEWELERY":
        return{
            ...state,
            jewelerys:action.payload
        }
        default:
            return state
    }
}

export default JeweleryReducer