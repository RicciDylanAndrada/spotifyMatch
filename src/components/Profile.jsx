import {useState,useEffect} from 'react'
import { useCallback } from 'react'
import axios from 'axios'
import Card from "./shared/Card"
export default function Profile({token}) {
    const[data,setData]=useState({})

    const fetchData= useCallback(async()=>{
        const {data} = await axios.get("https://api.spotify.com/v1/me",{
            headers:{
                Authorization:`Bearer ${token}`,
            },
            
        })
       setData(data)

    },[])

    useEffect(()=>{
        fetchData()
    },[fetchData])
    
    return (
        <div class="w-full">
                <Card data={data}/>
        </div>
    )
}
 