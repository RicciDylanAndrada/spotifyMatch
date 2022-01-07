import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useState,useContext } from 'react';
import { Button, CardActionArea, CardActions } from '@mui/material';
import LoginContext from '../../content/LoginContext';
function CardForm() {

    const[submit,setSubmit]=useState(false)

    const{newPlaylist,setNewPlaylist,handleCreatePlaylist,res}=useContext(LoginContext)
    

const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(newPlaylist)
        setSubmit(true)
        handleCreatePlaylist()
        setNewPlaylist({name:'',description:""})


}
const handleChange=(e)=>{
    const tagsName=e.target.name;
    
    setNewPlaylist({
        ...newPlaylist,
        [tagsName]:e.target.value
    })
    
}
console.log(res)
    return (
       
            

<div class="flex items-center w-full px-4 py-10 card " >
  <div class="card glass lg:card-side 	">
    
    <div class="max-w-md  card-body">
    {!submit?(
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
    ):
    
    (<div className="grid grid-cols-1">
    <h1>Playlist Succesfully Create!</h1>
    <a className="justify-self-center btn btn-success mt-4 hover:bg-green-300" href={res?.external_urls?.spotify} >Go To Playlist</a>

    </div>
    
    )
    }
    
    </div>
  </div>
</div>

          );
        
        
    
}

export default CardForm
