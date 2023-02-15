import logo from './logo.svg';
import './App.css';
import { doCall } from './components/apicall';
import React from 'react';
import { Container } from '@mui/system';
import { BrowserRouter as Router } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Search } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
function App() {

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

  return (
    
    <div className="App">
      <header className="App-header">
          <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                  <Toolbar>
                      <IconButton
                          size="large"
                          edge="start"
                          color="inherit"
                          aria-label="open drawer"
                          sx={{ mr: 2 }}
                      >
                          <MenuIcon />
                      </IconButton>
                      <Typography
                          variant="h6"
                          noWrap
                          component="div"
                          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                      >
                          MUI
                      </Typography>
                      <Search>
                          <SearchIconWrapper>
                              <SearchIcon />
                          </SearchIconWrapper>
                          <StyledInputBase
                              placeholder="Search…"
                              inputProps={{ 'aria-label': 'search' }}
                          />
                      </Search>
                  </Toolbar>
              </AppBar>
          </Box>
            </header>
      <Container>

      </Container>
    </div>
  );
}

export default App;

// <AppBar
//         color={isCustomColor || isCustomHeight ? "primary" : example}
//         className={`${isCustomColor && classes.customColor} ${
//           isCustomHeight && classes.customHeight
//         }`}
//       >
//         <Toolbar>
//           <IconButton
//             edge="start"
//             className={classes.menuButton}
//             color="inherit"
//             aria-label="menu"
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" className={classes.title}>
//             AppBar
//           </Typography>
//           <IconButton color="inherit" onClick={() => setExample("default")}>
//             1
//           </IconButton>
//           <IconButton color="inherit" onClick={() => setExample("primary")}>
//             2
//           </IconButton>
//           <IconButton color="inherit" onClick={() => setExample("secondary")}>
//             3
//           </IconButton>
//           <IconButton color="inherit" onClick={() => setExample("transparent")}>
//             4
//           </IconButton>
//           <IconButton color="inherit" onClick={() => setExample("customColor")}>
//             5
//           </IconButton>
//           <IconButton
//             color="inherit"
//             onClick={() => setExample("customHeight")}
//           >
//             6
//           </IconButton>
//         </Toolbar>
//       </AppBar>