import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { SearchBar } from './Searchbar';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';





export function Navbar(props) {
  //Attributes
  const dispatch = useDispatch()
  var realm= useSelector((state)=> state.realm);

  function handleChange(event){
    //event.target.value
    //Set Realm Here
    dispatch({type: 'ADD_REALM', realm:event.target.value});
  }



  return <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
          WoW Statistics
        </Typography>
        <FormControl sx={{display: {xs: 'none', sm: 'inline'}}}size='small' color='secondary'>
        <InputLabel id="realm-select-label">Realm</InputLabel>
          <Select 
            sx={{ width:200}}
            labelId="realm-select-label"
            id="realm-select"
            value={realm}
            label="Realm"
            onChange={handleChange}
          >
            <MenuItem value={"Sargeras"}>Sargeras</MenuItem>
            <MenuItem value={"Stormreaver"}>Stormreaver</MenuItem>
            <MenuItem value={"Illidian"}>Illidian</MenuItem>
          </Select>
        </FormControl>

        <SearchBar></SearchBar>
      </Toolbar>
    </AppBar>
  </Box>
}



