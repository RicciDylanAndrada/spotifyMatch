import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useState,useContext } from 'react';
import { Button, CardActionArea, CardActions } from '@mui/material';
import LoginContext from '../../content/LoginContext';
function CardForm() {



    const{newPlaylist,setNewPlaylist}=useContext(LoginContext)
    const [name,setName] =useState("")
    const [pub,setPub] =useState("")
    const [desc,setDesc] =useState("")

const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(newPlaylist)

}
const handleChange=(e)=>{
    const tagsName=e.target.name;
    
    setNewPlaylist({
        ...newPlaylist,
        [tagsName]:e.target.value
    })
    
}
    return (
       
            

<div class="flex items-center w-full px-4 py-10 card " >
  <div class="card glass lg:card-side 	">
    
    <div class="max-w-md  card-body">
    <form className="block  	" onSubmit={handleSubmit}>
                                
            <label className="block  m-5 ">
                                Name
                            <input className="ml-4 text-black" type="text " defaultValue={newPlaylist.name} name="name" onChange={handleChange} />
                                        </label>
                                {/* <label className="block">
                                  Public
                                    <input type="text" name="name" value={newPlaylist.} />
                                </label> */}

                                <label className=" ml-4 block ">
                                Description
                                    <input className= "ml-4 text-black"  type="text" name="description" defaultValue={newPlaylist.description} onChange={handleChange} />
                                </label>
                                <div className="grid  grid-cols-1 w-full m-3 justify-items-center ">
                                <div className=" w-full mr-6 flex justify-center">
                                <button className="  btn btn-success" value="Create" type="submit">Create Playlist</button>

                                </div>
                </div>
                        </form>
    </div>
  </div>
</div>

          );
        
        
    
}

export default CardForm
