import React from 'react'
import "../index.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

function NewArrival() {
  return (
    <div className='height-100-vh'>
        <div className='d-flex justify-content-center'>
            <h1 className='margin-top-75 font-size-55 font-family'>New Arrivals</h1>
        </div>
        <div className='d-flex justify-content-space-around'>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="Khadi Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Digital Printed Lawn Summer 2026    
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Buy Now
        </Button>
      </CardActions>
    </Card>
    </div>
    </div>
  )
}

export default NewArrival