import { createContext, useReducer } from "react";
import JwelReducer from "./JwelReducer";

const JwelContext = createContext();
export  const JwelProvider = ({children})=>{
const initialState={
    jwel:[],
}
    const [state , dispatch] = useReducer(JwelReducer,initialState)
    return(
        <JwelContext.Provider value={{
            ...state,
            dispatch
        }}>
            {children}
            </JwelContext.Provider>
    )
}
export default JwelContext