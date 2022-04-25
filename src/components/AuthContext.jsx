import {createContext,useState} from "react";




export const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
  const [Authst,setAuthSt]=useState(true);

  const toggleAuthSt=()=>{
    setAuthSt(!Authst)
  }

  return <AuthContext.Provider value={{Authst,toggleAuthSt}}>{children}</AuthContext.Provider>
}