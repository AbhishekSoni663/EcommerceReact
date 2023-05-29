const JwelReducer = (state ,action)=>{
    switch(action.type){
        case "ADD_JWPRO":
        return{
            ...state,
            jwel:[...state.jwel,action.payload]
        }
        default:
            return state
    }
}
export default JwelReducer