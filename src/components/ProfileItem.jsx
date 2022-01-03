
import {useState,useEffect,useContext} from 'react'


import LoginContext from '../content/LoginContext';
import SongCard from './shared/SongCard';
function ProfileItem() {
const {data:{top}}=useContext(LoginContext)
let render = false;
//const[top,setTop]=useState(null)

//useEffect(()=>{

//     if(!top){
//         const fetchData= async()=>{
//             try{
//                     const res = await fetch("https://api.spotify.com/v1/me/top/tracks?limit=50",
//                 {
//                             method:'GET',
//                             headers:{
//                                 Authorization:`Bearer ${token}`,
                                
//                                 'Content-Type': 'application/json',
//                                 'Accept': 'application/json'
            
            
//                             },
//                         })
//                         const data = await res.json()
            
                
//                         setTop(data)
//                         console.log(data)
            
//                         }
//                         catch(err){
//                             console.log(err)
//                         }
               
                   
//                     }
//                     fetchData()
//     }
    
                  
// },[])


    console.log(top)

    return (
        <div className="w-full">
        <div className="mx-auto grid gap-5 justify-items-center ">
        <h1>Top Songs</h1>
        <div className="grid grid-cols-2 gap-10  ">
        <button className="btn inline ">Top </button>
            <button className="btn inline ">Genre</button>
        </div>
           

        </div>
        <div className="w-full  grid gap-4 grid-cols-1 content-between xl:grid-cols-3 l:grid-cols-3 m:grid-cols-2 s:grid-cols-3">
        {!render? (
            render=true,

        top?.items.map((index)=>{
           return <SongCard name={index?.name} proPic={index?.album.images[2].url}/>
            })
       ):<p>loading</p>} 
        </div>
        </div>
    )
}

export default ProfileItem
