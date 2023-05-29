const ElecReducer = (state , action)=>{
    switch(action.type){
        case "ADD_ELEC":
            return{
                ...state,
                elec : [...state.elec, action.payload]
            }

    }
}
export default ElecReducer