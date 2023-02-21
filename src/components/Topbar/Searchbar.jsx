import { styled, alpha } from '@mui/material/styles';
import SearchIcon from "@mui/icons-material/Search";
import InputBase from '@mui/material/InputBase';
import React from 'react';
import { useState } from 'react';
function test(){
  console.log(5);
  return 5;
}

function filterData(data){
  //Develop Regex
  return data.toLowerCase();
};



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
        width: '14ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
}));

export function SearchBar(){

    const [searchFieldVal, setSearchFieldVal] = useState("Search…");
    return (<Search>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                onChange={(newVal) => setSearchFieldVal(newVal.target.value)}
                onKeyDown={(ev) => {
                  if (ev.key === 'Enter') {
                    // Do code here
                    console.log(searchFieldVal);
                    ev.preventDefault();
                  }
                }}
            />
    </Search>);
}