import {createContext,useState} from 'react'
import { useEffect } from 'react'
const LoginContext =createContext()


export const LoginProvider=({children})=>{
  console.log("duh1")

    const [token,setToken]=useState(null)
    const [ data,setData]=useState({profile:null,top:null})
  useEffect(()=>{
    console.log("duh use effect")
    

    if(token){
      const fetchProfile= async ()=>{
        try{
           const resProfile = await fetch("https://api.spotify.com/v1/me",{
                method:'GET',
                headers:{
                     Authorization:`Bearer ${token}`,
                          },                     
                      })
            const resTop = await fetch("https://api.spotify.com/v1/me/top/tracks?limit=50",
                    {
                            method:'GET',
                              headers:{
                                    Authorization:`Bearer ${token}`,
                                                      
                                    'Content-Type': 'application/json',
                                      'Accept': 'application/json'
                                  
                                  
                                                  },
                                              })
    
                          const dataProfile = await resProfile.json()
                          const dataTop = await resTop.json()
                          console.log(dataTop)
                          setData({profile:dataProfile,top:dataTop})
                  }
                  catch(err){
          console.log(err)
                  }
              }
            
              fetchProfile()
    }
    else{
      const hash = window.location.hash 
          let token= window.localStorage.getItem("token")
          if(!token && hash){
      
            token = hash.substring(1).split("&").find(elem=>elem.startsWith("access_token")).split("=")[1]
            window.location.hash=""
            window.localStorage.setItem("token",token)
            console.log(token)
          }
          setToken(token)
          console.log("checkign here for fire")
    }
    
  },[token])

  
       

  return(
    
    <LoginContext.Provider
     value={{
       token,
       setToken,
       data
       }}>
        {children}
    </LoginContext.Provider>
)
  }
  export default LoginContext
