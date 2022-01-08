import {createContext,useState} from 'react'
import { useEffect } from 'react'
const LoginContext =createContext()


export const LoginProvider=({children})=>{

    const [token,setToken]=useState(null)
    const [ data,setData]=useState({profile:null,top:null,genre:null,id:null})
    const[top,setTop]=useState(null)
    const[time,setTime]=useState(null)
    const[newPlaylist,setNewPlaylist]=useState({name:null, description:null})
    const[res,setRes]=useState(null)
    const[loading,setLoading]=useState(false)

  useEffect(()=>{


    if(token){
      const fetchProfile= async ()=>{
        try{
           const resProfile = await fetch("https://api.spotify.com/v1/me",{
                method:'GET',
                headers:{
                     Authorization:`Bearer ${token}`,
                          },                     
                      })
            const resTop = await fetch("https://api.spotify.com/v1/me/top/tracks?limit="+(top?top:"50")+"&offset=0&time_range="+(time?time:"medium_term"),
                    {
                            method:'GET',
                              headers:{
                                    Authorization:`Bearer ${token}`,
                                                      
                                    'Content-Type': 'application/json',
                                      'Accept': 'application/json'
                                  
                                  
                                                  },
                                              })
                
            const resGenre = await fetch("https://api.spotify.com/v1/recommendations/available-genre-seeds",
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
                          const dataGenre = await resGenre.json()

                          setData({profile:dataProfile,top:dataTop,genre:dataGenre,id:dataProfile.id})
                          setLoading(true)

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
          }
          setToken(token)
    }
    
  },[token,top,setTop,time,setTime,newPlaylist,setNewPlaylist,res,setRes])

  
const handleCreatePlaylist=async()=>{
  try{
    if(newPlaylist.name !== null && newPlaylist.description!==null){
      const  d = await fetch("https://api.spotify.com/v1/users/"+data.id+"/playlists",
      {
              method:'POST',
                headers:{
                      Authorization:`Bearer ${token}`,
                                        
                    
                          },
              body: JSON.stringify({
                            "name": `${newPlaylist.name}`,
                            "description": `${newPlaylist.description}`
                          })
                
                }
    )
    const response = await d.json()
    setRes(response)
    if(response.id){
    let track =data?.top?.items.map((item)=>item.uri)

    const  tracks = await fetch(`https://api.spotify.com/v1/playlists/${response.id}/tracks`,
      {
              method:'POST',
                headers:{
                      Authorization:`Bearer ${token}`,
                                        
                    
                          },
              body: JSON.stringify({
                            "uris": track,
                          })
                
                }



    )
    let withSongs = await tracks.json()
              }
    

  }
  
    
  }
  catch(err){
    console.log(err)
  }
   
}
const handleLogout=()=>{
  setToken("")
  window.localStorage.removeItem("token")
  

}   


  return(
    
    <LoginContext.Provider
     value={{
       token,
       setToken,
       data,
       setTop,
       setTime,handleCreatePlaylist,
       newPlaylist,
       setNewPlaylist,
       handleCreatePlaylist,
       res,
       setRes,
       handleLogout,
       loading,
       setLoading
       }}>
        {children}
    </LoginContext.Provider>
)
  }
  export default LoginContext
