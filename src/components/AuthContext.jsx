import {createContext,useState} from "react";




export const AuthContext=createContext();

export const AuthContextProvider=({childern})=>{
  const [Authst,setAuthSt]=useState(false);

  const toggleAuthSt=()=>{
    setAuthSt(!Authst)
  }

  return <AuthContext.Provider value={{Authst,toggleAuthSt}}>{childern}</AuthContext.Provider>
}