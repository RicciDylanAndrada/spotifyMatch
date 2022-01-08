import {useState,useEffect,useContext} from 'react'
import { useCallback } from 'react'
import axios from 'axios'
import Card from "./shared/Card"
import ProfileItem from './ProfileItem'
import LoginContext from '../content/LoginContext'
export default function Profile() {
    const {token,data}=useContext(LoginContext)
   
    if(token){
        return (

            <div className="w-full ">
                    <Card 
                    id={data?.profile?.display_name} 
                    proPic={data?.profile?.images[0]?.url}
                    followers={data?.profile?.followers?.total}
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
 