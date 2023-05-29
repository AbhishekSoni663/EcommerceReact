import { createContext, useReducer } from "react";
import ProReducer from "./ProReducer";

const ProContext = createContext()

export const ProProvider = ({children})=>{
    const initialState = {
        pros :[] ,
    }

    const [state,dispatch] = useReducer(ProReducer,initialState)

    return(
        <ProContext.Provider value={{
            ...state, 
            dispatch
        }}>
            {children}
        </ProContext.Provider>
    )
}
export default ProContext