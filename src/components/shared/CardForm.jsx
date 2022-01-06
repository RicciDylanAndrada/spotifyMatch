import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
function CardForm() {
    return (
       
            <Card
           
             sx={{ maxWidth: 345,bgcolor:'#1f2937' }}>
              <CardActionArea>
                
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                     Playlist
                  </Typography>
                  <form className="block">
                                <label className="block">
                                    Name:
                                    <input type="text" name="name" />
                                </label>

                                <label className="block">
                                  Public
                                    <input type="text" name="name" />
                                </label>

                                <label className="block">
                                Description
                                    <input type="text" name="name" />
                                </label>
                                <div className="grid grid-cols-1 w-full m-3 justify-items-center ">
                    <input className="btn btn-success" value="Create" type="submit"/>
                </div>
                        </form>
                </CardContent>
              </CardActionArea>
              <CardActions>
                
              </CardActions>
            </Card>
          );
        
        
    
}

export default CardForm
