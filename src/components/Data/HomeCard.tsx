import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { UserContext } from '../../App';
import { useContext } from "react";


interface cardData{
    cardHeader: string;
    cardBody: string;
    imageName: string;
}
export function HomeCard(props: cardData ){

    const user = useContext(UserContext);


    return(<Card sx={{ maxWidth: 345, border: 3,borderColor:'green'  }}>
            <CardActionArea>
            <CardMedia
                component="img"
                height="210"
                image= {props.imageName}
                alt="Image Alt"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {props.cardHeader}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {props.cardBody}
                </Typography>
            </CardContent></CardActionArea></Card>)
}