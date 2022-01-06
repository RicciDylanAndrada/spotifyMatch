import Profile from '../components/Profile'
import ProfileItem from '../components/ProfileItem';
import SearchUser from '../components/SearchUser';
import { useState,useEffect,useContext } from "react";
import LoginContext from '../content/LoginContext';
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
function Home() {
  
  const [isOpen,setIsOpen]=useState(false)
  const [isOpenTime,setIsOpenTime]=useState(false)

    const{token,setToken,setTop,setTime}=useContext(LoginContext)
    const[selectOption,setSelectOption]=useState("")
    const[selectOptionTime,setSelectOptionTime]=useState("")

const optionsTime=['Past 4 Days','Past 6 Months','All Time']
const options=['10','25','50']

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

const toggling=()=>setIsOpen(!isOpen)
const togglingTime=()=>setIsOpenTime(!isOpenTime)

const handleChange = (event) => {
  setSelectOption(event.target.value);
};
const handleChangeTime = (event) => {
  setSelectOptionTime(event.target.value);
};
const onOptionClickTime=(value)=>{
      setSelectOptionTime(value);
      setIsOpenTime(false);
      console.log(selectOptionTime)


  }
 
      const handleLogout=()=>{
        setToken("")
        window.localStorage.removeItem("token")
    
      }   
      console.log(selectOption,selectOptionTime)
      setTop(selectOption)
      setTime(selectOptionTime)
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
        <div className=" p-5 max-w-full max-h-full grid grid-cols-1 xl:grid-cols-1 l:grid-cols-1
        md:grid-cols-1 gap-10 place-items-center ">
            <div className=" bg-red-50">
            <button onClick ={handleLogout} className="btn btn-success">Logout</button>

            </div>
            
        <Profile/>
        <div className="mx-auto grid gap-5 justify-items-center ">
        <h1>Top Songs</h1>
        <div className="grid grid-cols-2 gap-10  ">
        
        <Box className="dropdown dropdown-end"  sx={{  }}>
      <FormControl  variant="standard" fullWidth>
        <InputLabel id="demo-simple-select-label" sx={{color:'white'}}>Top</InputLabel>
        <Select
                sx={{color:"white",border:'none'}}

          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectOption}
          label="Top"
          onChange={handleChange}
        >
          <MenuItem  value={10}>10 Songs</MenuItem>
          <MenuItem value={25}>25 Songs</MenuItem>
          <MenuItem value={50}>50 Songs</MenuItem>
        </Select>
      </FormControl>
    </Box>

    <Box className="dropdown dropdown-end" sx={{ minWidth: 120, border:'none' }}>
      <FormControl  variant="standard" fullWidth>
        <InputLabel id="timeFrame" sx={{color:'white'}}>Past</InputLabel>
        <Select
                sx={{color:"white"}}

          labelId="TimeFrame"
          id="timeFrame"
          value={selectOptionTime}
          label="Top"
          onChange={handleChangeTime}
        >
          <MenuItem  value={"short_term"}>4 Weeks</MenuItem>
          <MenuItem value={"medium_term"}>6 Months</MenuItem>
          <MenuItem value={"long_term"}>All Time</MenuItem>
        </Select>
      </FormControl>
    </Box>
        </div>
           

        </div>

      <ProfileItem  /> 

        </div>
      
      )}
        </div>
    )
}

export default Home
