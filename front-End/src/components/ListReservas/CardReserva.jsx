import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardReservas = ({titulo,fechaInicio,fechaFinal,imagen}) => {
  return (
    <div className='cardReserva'>
    <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="140"
            image={imagen}
            alt=""
        />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {titulo} 
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {fechaInicio} al {fechaFinal}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
    </div>
  )
}

export default CardReservas