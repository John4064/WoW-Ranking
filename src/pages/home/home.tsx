import React from 'react';
import { borderColor, Container } from '@mui/system';
import { Navbar } from '../../components/Topbar/Navbar';
import { Button, Grid} from '@mui/material';
import { styled } from '@mui/material/styles';
import { CardActionArea } from '@mui/material';
import { HomeCard } from '../../components/Data/HomeCard';
import { PvpTable } from '../../components/Data/PvpTable';
import { BasicAlert } from '../../components/BasicAlert';
import Paper from '@mui/material/Paper';


const BodyWrapper = styled('div')(({ theme }) => ({
    color: 'black',
    height: '100%',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'center',
    paddingTop: '25',
  }));

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#0B2B33',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily 
  }));

  function alertOnClose(){
    console.log("Closed!");
}
export function Home(){

    
    //{type: 'ADD_NAME', name:'Slimwind'}
    return(<div className="App" >
        <header className="App-header">
            <Navbar></Navbar>
            </header>
            {/* <BodyWrapper>
                </BodyWrapper> */}
        <Container disableGutters={true} sx={{paddingTop: '25px'}}>
        {/*Alert Stack*/}
        {/* <BasicAlert text="Close Test"></BasicAlert> */}
        <Grid
            container
            spacing={3}
            rowSpacing={1}>
            <Grid item xs={12}>
                <Item><p>Azeroth Daily</p></Item>
            </Grid>
            <Grid item xs={10}>
                <PvpTable data={2}></PvpTable>

            </Grid>
            <Grid item xs={2}>
                {/* {Ignore this fo rnow} */}
                <Item><p>Azeroth Daily</p></Item>
            </Grid>
            
            <Grid item xs={12}>
                <Item></Item>
            </Grid>
        </Grid>

        </Container>
    </div>);
}


// {/* <Grid  item xs={4}>
//             <HomeCard cardHeader="Lizard" imageName="logo512.png"
//             cardBody="Lizards are a widespread group of squamate reptiles, with over 6,000
//                 species, ranging across all continents except Antarctica"></HomeCard>
//             </Grid>
//             <Grid  item xs={4}>
//             <HomeCard cardHeader="Lizard" imageName="logo512.png"
//             cardBody="Lizards are a widespread group of squamate reptiles, with over 6,000
//                 species, ranging across all continents except Antarctica"></HomeCard>

//             </Grid>
//             <Grid  item xs={4}>
//             <HomeCard cardHeader="Lizard" imageName="logo512.png"
//             cardBody="Lizards are a widespread group of squamate reptiles, with over 6,000
//                 species, ranging across all continents except Antarctica"></HomeCard>
//             </Grid> */}