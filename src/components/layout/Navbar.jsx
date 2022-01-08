import {FaSpotify} from "react-icons/fa"
import {Link} from 'react-router-dom' 
import {useContext} from 'react'

import LoginContext from '../../content/LoginContext'

export default function Navbar() {
    const{setToken}=useContext(LoginContext)
    const handleLogout=()=>{
        setToken("")
        window.localStorage.removeItem("token")
        
      
      }   
    return (
        
        <div className="navbar  w-full mb-12 bg-neutral text-neutral-content">
        <div className="container mx-auto">
            <div className="flex-none px-2 mx-2">
                <FaSpotify className=" inline flex-none pr-4 text-5xl" color="green" />
                <Link to="/" className=" text-md font-bold align-middle">
                    Protify Searcher
                </Link>
            </div>
            <div className="flex-1 px-2 mx-2">
                <div className="flex justify-end">
                    <Link to="/" className="btn text-md btn-ghost btn-sm rounded-btn">
                        Home
                    </Link>
                    <Link to="/about" className="btn text-md btn-ghost btn-sm rounded-btn">
                        About
                    </Link>
                </div>

            </div>
        </div>
        <div className="justify-self-end ">
            <button onClick ={handleLogout} className="btn btn-sm btn-success h-30">Logout</button>
            </div>
        </div>
        
    )
}
