import {createContext,useState} from 'react'
import { useEffect } from 'react'
const LoginContext =createContext()


export const LoginProvider=({children})=>{

    const [token1,setToken]=useState("")


    const CLIENT_ID=process.env.REACT_APP_SPOTIFY_CLIENT_ID
  const REDIRECT_URL="http://localhost:3000"
  const AUTH_ENDPOINT="http://accounts.spotify.com/authorize"
  const RESPONSE_TYPE="token"



const handleToken=() =>{
    setToken("")
}
    const hash = window.location.hash 
    let token= window.localStorage.getItem("token")
    if(!token && hash){

      token = hash.substring(1).split("&").find(elem=>elem.startsWith("access_token")).split("=")[1]
      window.location.hash=""
      window.localStorage.setItem("token",token)
      console.log(token)
    }
    setToken(token)




   const handleLogout=()=>{
    setToken("")
   window.localStorage.removeItem("token")

  }


  return(
    <LoginContext.Provider value={{token:token1,handleLogout,handleToken}}>
        {children}
    </LoginContext.Provider>
)
  }
  export default LoginContext
