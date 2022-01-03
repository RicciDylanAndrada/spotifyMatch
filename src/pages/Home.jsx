import Profile from '../components/Profile'
import ProfileItem from '../components/ProfileItem';
import SearchUser from '../components/SearchUser';
import { useState,useEffect,useContext } from "react";
import LoginContext from '../content/LoginContext';

function Home() {
    const{token,setToken}=useContext(LoginContext)

    const CLIENT_ID=process.env.REACT_APP_SPOTIFY_CLIENT_ID
    const REDIRECT_URL="http://localhost:3000/"
    const AUTH_ENDPOINT="http://accounts.spotify.com/authorize"
    const RESPONSE_TYPE="token"
const scope=[
"playlist-modify-private",
"playlist-read-collaborative",
"user-read-email",
  "playlist-read-private",
  "user-top-read",
  "playlist-modify-public",
  "user-read-recently-played"

]
console.log("duh")

    
    
      const handleLogout=()=>{
        setToken("")
        window.localStorage.removeItem("token")
    
      }      
    return (
        <div>

{!token?( 
        <div className=" grid justify-center mx-auto ">
        <button className="btn btn-ghost bg-success">Log In</button>
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=${scope.join("%20")}&response_type=${RESPONSE_TYPE}`}
        >Login with Spotify</a>
      </div>
        
         ):
      (
        <div className=" p-5 w-screen h-screen  grid grid-cols-1 xl:grid-cols-1 l:grid-cols-1
        md:grid-cols-1 gap-10 place-items-center ">
            <div className=" bg-red-50">
            <button onClick ={handleLogout} className="btn btn-success">Logout</button>

            </div>
        <Profile/>

        <ProfileItem />

        </div>
      
      )}
        </div>
    )
}

export default Home
