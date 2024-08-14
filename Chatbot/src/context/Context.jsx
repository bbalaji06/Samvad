import { createContext, useState } from "react";
import run from "../config/gimini";

export const Context = createContext();

const ContextProvider = (props)=>{

    const[input,setInput]=useState("")
    const[recentPromt,setRecentPromt]=useState("")
    const[prevPromt,setPrevPromt]=useState([])
    const[ShowResult,setShoeResult]=useState(false)
    const[loading,setLoading]=useState(false)
    const[resultData,setResultData]=useState("")

    const onSent=async (promt)=>{

        setResultData('')
        setLoading(true)
        setShoeResult(true)
        setRecentPromt(input)
        const response=await run(input)
        setResultData(response)
        setLoading(false)
        setInput("")
    }

    const contextValue={
        prevPromt,
        setPrevPromt,
        input,
        setInput,
        recentPromt,
        setRecentPromt,
        ShowResult,
        loading,
        resultData,
        onSent
    }

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider