import {createContext,useState} from 'react'
import { useEffect } from 'react'
const LoginContext =createContext()


export const LoginProvider=({children})=>{
  console.log("duh1")

    const [token,setToken]=useState(null)
    const [ data,setData]=useState({profile:null,top:null,genre:null,id:null})
    const[top,setTop]=useState(null)
    const[time,setTime]=useState(null)
    const[newPlaylist,setNewPlaylist]=useState({name:null, description:null})
    const[res,setRes]=useState(null)

  useEffect(()=>{
    console.log("duh use effect")
    console.log(newPlaylist)


    if(token){
      const fetchProfile= async ()=>{
        try{
           const resProfile = await fetch("https://api.spotify.com/v1/me",{
                method:'GET',
                headers:{
                     Authorization:`Bearer ${token}`,
                          },                     
                      })
                      console.log(top)
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
                                              console.log("firing")
                                              console.log(newPlaylist)

            
                          const dataProfile = await resProfile.json()
                          const dataTop = await resTop.json()
                          const dataGenre = await resGenre.json()

                          console.log(dataTop)
                          setData({profile:dataProfile,top:dataTop,genre:dataGenre,id:dataProfile.id})
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
    
  },[token,top,setTop,time,setTime,newPlaylist,setNewPlaylist])

  
  const handleCreatePlaylist=async()=>{
console.log(data.id)
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
    console.log()

    let id = res.id
    let track =data?.top?.items.map((item)=>item.uri)
    console.log(track)

    const  tracks = await fetch(`https://api.spotify.com/v1/playlists/${id}/tracks`,
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
    

  }
    
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
       }}>
        {children}
    </LoginContext.Provider>
)
  }
  export default LoginContext
