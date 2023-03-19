import "./App.css";
import React, { useState } from "react";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Home } from "./pages/home/home";
import { createContext } from "react";
import Button from "@mui/material/Button";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1a9e60",
    },
    secondary:{
      main: "#fff",
    }
  },
});

export const UserContext = createContext();
export const SearchPvpDataContext = createContext();
function App() {
  // The actions can be serialized, logged or stored and later replayed.
  const [userProfile,setUserProfile] = useState({name: "", realm:"",});
  const wrapUser={userProfile,setUserProfile};//obj.wrapUser.userProfile.value
  const [searchPvpData,setSearchPvpData]= useState({a:1});//TODO: Define schema and set value


  return (
    <UserContext.Provider value={{wrapUser}}>
      <SearchPvpDataContext.Provider>


        <ThemeProvider theme={theme}>
          <Home></Home>
          <Button sx={{borderRadius: 50}} variant="contained" color="info" onClick={() => console.log("BTN PRESS")}>
        Switch Language (Current: {userProfile.name} Current: {userProfile.realm})
      </Button>
        </ThemeProvider>
      </SearchPvpDataContext.Provider>
    </UserContext.Provider>
  );
}
//console.log(appStore.getState().name);

export default App;
