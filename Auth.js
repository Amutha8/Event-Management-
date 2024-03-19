import React from'react'
import { useContext,useState } from 'react'
const AuthContext=React.createContext(null)
export const Auth=({children})=>
{
    const[username,setusername]=useState(null)
    const login=(username)=>
    {
        setusername(username)
    }
    
    return(
        <div>
            <AuthContext.Provider value={(username,login)}></AuthContext.Provider>
        </div>
    )
}
export const useAuth=()=>
{
    return useContext(AuthContext)
}