import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React from 'react';
import { useContext } from "react";
import { UserContext } from '../../App';
import { styled, alpha } from '@mui/material/styles';
export function RealmSelector(){

    const user = useContext(UserContext);
    var pendingRealm = "";
  
    function handleChange(event){
      //set realm here
      pendingRealm=event.target.value;
      user.wrapUser.setUserProfile({name:user.wrapUser.userProfile.name,realm:pendingRealm})
      
    }

    const RealmSelect = styled(Select)(({ theme }) => ({
      width:200,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      
    }));
    const RealmMenuItem = styled(MenuItem)(({ theme }) => ({
      color:theme.palette.primary.main,
    }));
    return(
        <FormControl sx={{display: {xs: 'none', sm: 'inline'}}}size='small'  color='secondary'>
        <InputLabel id="realm-select-label">Realm</InputLabel>
          <RealmSelect 
            labelId="realm-select-label"
            id="realm-select"
            value={pendingRealm}
            label="Realm"
            onChange={handleChange}
          >
            <RealmMenuItem  value={"sargeras"}>Sargeras</RealmMenuItem>
            <RealmMenuItem value={"stormreaver"}>Stormreaver</RealmMenuItem>
            <RealmMenuItem value={"illidian"}>Illidian</RealmMenuItem>
          </RealmSelect>

        </FormControl>

    );
}