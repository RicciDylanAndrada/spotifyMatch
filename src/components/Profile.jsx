import {useState,useEffect,useContext} from 'react'
import { useCallback } from 'react'
import axios from 'axios'
import Card from "./shared/Card"
import ProfileItem from './ProfileItem'
import LoginContext from '../content/LoginContext'
export default function Profile() {
    const {token,data}=useContext(LoginContext)
    //const[data,setData]=useState(null)

    //useEffect(()=>{

        
    //     const fetchData= async()=>{
    //         try{
    //             const res = await fetch("https://api.spotify.com/v1/me",{
    //                 method:'GET',
    //                 headers:{
    //                     Authorization:`Bearer ${token}`,
    //                 },
                    
    //             })
                
    //                 const data = await res.json()

    
    //                 setData(data)

    //         }
    //         catch(err){
    // console.log(err)
    //         }

           

            
    
    //     }
    //     fetchData()
       
    // },[])
    if(token){
        return (

            <div className="w-full ">
                    <Card 
                    id={data?.profile?.display_name} 
                    proPic={data?.profile?.images[0].url}
                    followers={data?.profile?.followers.total}
                    />
            </div>
        )
    }
    else{
        return(
            <div>
                Loading..
            </div>
        )
    }
    
    
}
 