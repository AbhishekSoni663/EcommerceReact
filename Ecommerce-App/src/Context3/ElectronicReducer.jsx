const ElectronicReducer = (state,action)=>{
    switch(action.type){
        case "ELECTRONIC":
            return{
                ...state,
                electronics:action.payload
            }
            default:
                return state
    }
}
export default ElectronicReducer