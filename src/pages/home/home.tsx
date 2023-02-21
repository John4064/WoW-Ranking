import React from 'react';
import { borderColor, Container } from '@mui/system';
import { Navbar } from '../../components/Topbar/Navbar';
import { Button, Grid} from '@mui/material';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { HomeCard } from '../../components/Data/HomeCard';
import { PvpTable } from '../../components/Data/PvpTable';

const BodyWrapper = styled('div')(({ theme }) => ({
    color: 'black',
    height: '100%',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'center',
    paddingTop: '25',
  }));

export function Home(){
    
return(<div className="App">
    
        <header className="App-header">
            <Navbar></Navbar>
            </header>
            <BodyWrapper>
        <Container sx={{paddingTop: '25px'}}>
        <Grid
            container
            spacing={3}
            rowSpacing={1}>
            <Grid item xs={12}>
            <p>Azeroth Daily</p>
            </Grid>
            <Grid  item xs={4}>
            <HomeCard cardHeader="Lizard" imageName="logo192.png"
            cardBody="Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica"></HomeCard>
            </Grid>
            <Grid  item xs={4}>
            <HomeCard cardHeader="Lizard" imageName="logo192.png"
            cardBody="Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica"></HomeCard>

            </Grid>
            <Grid  item xs={4}>
            <HomeCard cardHeader="Lizard" imageName="logo192.png"
            cardBody="Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica"></HomeCard>
            </Grid>
            <Grid item xs={12}>
                <PvpTable></PvpTable>
            </Grid>
        </Grid>
        </Container>
</BodyWrapper>
</div>

    );
}