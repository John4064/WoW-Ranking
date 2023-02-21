import './App.css';
import { doCall } from './components/apicall';
import React from 'react';
import { borderColor, Container } from '@mui/system';
import { Navbar } from './components/Topbar/Navbar';
import { Button, Grid} from '@mui/material';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { Home } from './pages/home/home';
const fetchdata = async ()=>{
  try{
      const response = await axios.get('https://dummyjson.com/products')
      return response.data.products
   }
   catch (error) {
      console.log(error);
  }
}

const BodyWrapper = styled('div')(({ theme }) => ({
  color: 'black',
  height: '100%',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'center',
  paddingTop: '25',
}));

const theme = createTheme({
  palette: {
    primary: {
      main: '#E33E7F'
    }
  }
});

function App() {

//TEST
  return (
    <ThemeProvider theme={theme}>
      <Home></Home>
  </ThemeProvider>
  );
}

export default App;