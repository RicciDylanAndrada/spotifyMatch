
import {useState,useEffect,useContext} from 'react'


import LoginContext from '../content/LoginContext';
function ProfileItem() {
const {token}=useContext(LoginContext)
const[top,setTop]=useState(null)

useEffect(()=>{

    if(!top){
        const fetchData= async()=>{
            try{
                    const res = await fetch("https://api.spotify.com/v1/me/top/tracks?limit=50",
                {
                            method:'GET',
                            headers:{
                                Authorization:`Bearer ${token}`,
                                
                                'Content-Type': 'application/json',
                                'Accept': 'application/json'
            
            
                            },
                        })
                        const data = await res.json()
            
                
                        setTop(data)
                        console.log(data)
            
                        }
                        catch(err){
                            console.log(err)
                        }
               
                   
                    }
                    fetchData()
    }
    
                  
},[])


    

    return (
        <div>
        <ul>
        
        {top?.items.map((index)=>{
           return <p>{index.name}</p>
            }
       )} 
        </ul>
        </div>
        
    )
}

export default ProfileItem
