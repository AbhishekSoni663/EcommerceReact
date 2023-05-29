const ManReducer = (state,action)=>{
    switch(action.type){
        case "MANCLOTH":
            return{
                ...state,
                manclothes : action.payload
            }
            default:
                return state
    }
}

export default ManReducer