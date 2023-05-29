const ProReducer = (state,action)=>{
    switch(action.type){
        case "ADD_PRO":
           
            
            return{
                ...state,
                pros : [...state.pros, action.payload]
            }

        case "DECREASE":
        return{
            ...state,
            pros:pros.state.filter(item=>item.id!== id)
        }
            default:
                return state
    }
    
}


export default ProReducer