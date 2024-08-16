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
    const delayPara=(index,nextWord)=>{
        setTimeout(function(){
            setResultData(prev=>prev+nextWord)
        },75*index)
    }

    const newChat=()=>{
        setLoading(false)
        setShoeResult(false)
    }

    const onSent=async (promt)=>{

        setResultData('')
        setLoading(true)
        setShoeResult(true)
        let response;
        if (promt !== undefined){
             response=await run(promt);
             setRecentPromt(promt)
        }
        else{
            setPrevPromt(prev=>[...prev,input])
            setRecentPromt(input)
            response=await run(input)
        }
        let responseArra=response.split('**')
        let newResponse=""
        for(let i=0;i<responseArra.length;i++)
        {
            if(i==0||i%2!==1){
                newResponse+=responseArra[i]
            }
            else{
                newResponse+="<b>"+responseArra[i]+"</b>"
            }
        }
        let newResponse2=newResponse.split("*").join("</br>")
        let newResponseArr=newResponse2.split(' ')
        for(let i=0;i<newResponseArr.length;i++){
            const nextWord=newResponseArr[i]
            delayPara(i,nextWord+" ")
        }
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
        onSent,
        newChat
    }

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider