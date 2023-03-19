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
import { useContext } from "react";
import { UserContext } from '../../App';



export function Navbar(props) {
  //Attributes
  const user = useContext(UserContext);
  var pendingRealm = "";

  function handleChange(event){
    //set realm here
    pendingRealm=event.target.value;
    user.wrapUser.setUserProfile({name:user.wrapUser.userProfile.name,realm:pendingRealm})
    
  }




  return <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
          WoW Ranking
        </Typography>
        <FormControl sx={{display: {xs: 'none', sm: 'inline'}}}size='small' color='secondary'>
        <InputLabel id="realm-select-label">Realm</InputLabel>
          <Select 
            sx={{ width:200}}
            labelId="realm-select-label"
            id="realm-select"
            value={pendingRealm}
            label="Realm"
            onChange={handleChange}
          >
            <MenuItem value={"sargeras"}>Sargeras</MenuItem>
            <MenuItem value={"stormreaver"}>Stormreaver</MenuItem>
            <MenuItem value={"illidian"}>Illidian</MenuItem>
          </Select>
        </FormControl>

        <SearchBar></SearchBar>
      </Toolbar>
    </AppBar>
  </Box>
}



