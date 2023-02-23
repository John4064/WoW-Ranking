import { styled, alpha } from '@mui/material/styles';
import SearchIcon from "@mui/icons-material/Search";
import InputBase from '@mui/material/InputBase';
import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';



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
    color: 'primary'
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
  const dispatch = useDispatch()
  var name= useSelector((state)=> state.name);

  function onSearch(searchName){
    //event.target.value
    //Set Name Here
    dispatch({type: 'ADD_NAME', name:searchName});

  }

    const [searchFieldVal, setSearchFieldVal] = useState("Search…");
    return (<Search>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                onChange={(newVal) => setSearchFieldVal(newVal.target.value)}
                //onChange={onSearch}
                onKeyDown={(ev) => {
                  if (ev.key === 'Enter') {
                    // Do code here
                    onSearch(searchFieldVal)
                    ev.preventDefault();
                  }
                }}
            />
    </Search>);
}