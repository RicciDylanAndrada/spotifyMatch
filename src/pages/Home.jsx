import Profile from '../components/Profile'
import SearchUser from '../components/SearchUser';
import { useState,useEffect } from "react";

function Home() {
    const [token,setToken]=useState("")

    const CLIENT_ID=process.env.REACT_APP_SPOTIFY_CLIENT_ID
    const REDIRECT_URL="http://localhost:3000"
    const AUTH_ENDPOINT="http://accounts.spotify.com/authorize"
    const RESPONSE_TYPE="token"

    useEffect(()=>{
        const hash = window.location.hash 
        let token= window.localStorage.getItem("token")
        if(!token && hash){
    
          token = hash.substring(1).split("&").find(elem=>elem.startsWith("access_token")).split("=")[1]
          window.location.hash=""
          window.localStorage.setItem("token",token)
          console.log(token)
        }
        setToken(token)
    
      },[])
    
      const handleLogout=()=>{
        setToken("")
        window.localStorage.removeItem("token")
    
      }
  
    return (
        <div>

{!token?( 
        <div className=" grid justify-center mx-auto ">
        <button className="btn btn-ghost bg-success">Log In</button>
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=${RESPONSE_TYPE}`}
        >Login with Spotify</a>
      </div>
        
         ):
      (
        <div className=" p-5 w-screen h-screen  grid grid-cols-1 xl:grid-cols-3 l:grid-cols-3
        md:grid-cols-2 sm:grid-cols-1 gap-10 place-items-center ">
            <div className=" bg-red-50">
            <button onClick ={handleLogout}className="btn btn-success">Logout</button>

            </div>
        <Profile  token ={token}/>

        <SearchUser/>
        </div>
      
      )}
        </div>
    )
}

export default Home
