
import {useState,useEffect,useContext} from 'react'


import LoginContext from '../content/LoginContext';
import SongCard from './shared/SongCard';
function ProfileItem() {
const {data:{top,genre}}=useContext(LoginContext)
let render = false;

const handleTimeFrame=()=>{

}
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


    console.log(genre)

    return (
        <div className="w-full">
       
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
