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
        <div className="mx-auto grid gap-5 justify-items-center ">
        <h1>Top Songs</h1>
        <div className="grid grid-cols-2 gap-10  ">
        <div className="dropdown dropdown-end ">
        <div tabindex="0" class="m-1 btn">Top</div> 
            <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                <li>
                <a>10</a>
                </li> 
                <li>
                <a>25</a>
                </li> 
                <li>
                <a>50</a>
                </li>
            </ul>
        </div>

        <div className="dropdown dropdown-end ">
        <div tabindex="0" class="m-1 btn">Time Frame</div> 
            <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                <li>
                <a>Past 4 Weeks</a>
                </li> 
                <li>
                <a onClick={console.log("clikc on here")}>Past 6 months</a>
                </li> 
                <li>
                <a>All Time</a>
                </li>
            </ul>
        </div>
        </div>
           

        </div>

        <ProfileItem />

        </div>
      
      )}
        </div>
    )
}

export default Home
