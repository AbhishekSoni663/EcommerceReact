import { createContext, useReducer } from "react";
import ElecReducer from "./ElecReducer";

const ElecContext = createContext()

export const ElecProvider = ({children})=>{
    const initialState = {
        elec : []
    }
    const [state, dispatch] = useReducer(ElecReducer,initialState)
    return(
        <ElecContext.Provider value={{
            ...state,
            dispatch
        }}>
        {children}
        </ElecContext.Provider>
    )
}
export default ElecContext