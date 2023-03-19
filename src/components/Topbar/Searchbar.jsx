import { styled, alpha } from '@mui/material/styles';
import SearchIcon from "@mui/icons-material/Search";
import InputBase from '@mui/material/InputBase';
import React from 'react';
import { useState } from 'react';
import { useContext } from "react";
import { UserContext } from '../../App';
import { searchUser} from '../../actions/onSearch';
import { processProfileData } from '../../actions/processProfile';

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
  const user = useContext(UserContext);

  function onSearch(searchName){
    //event.target.value
    //Set Name Here
    user.wrapUser.setUserProfile({name:searchName,realm:user.wrapUser.userProfile.realm})
    if(true){
        console.log("NOT REAL API CALL!");
        processProfileData("")
    }else if(searchName !== "" && user.wrapUser.userProfile.realm !== "" &&searchName !== "Search…"){
        //Create alert telling to supply the info
        searchUser(searchName,user.wrapUser.userProfile.realm);
    }

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