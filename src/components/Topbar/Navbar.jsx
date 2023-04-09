import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { SearchBar } from './Searchbar';
import { RealmSelector } from './RealmSelector';




export function Navbar(props) {
  return <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          color={'red'}
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
          WoW Ranking
        </Typography>
        <RealmSelector></RealmSelector>
        <SearchBar></SearchBar>
      </Toolbar>
    </AppBar>
  </Box>
}



