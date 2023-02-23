import "./App.css";
import React from "react";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Home } from "./pages/home/home";
import appReducer from "./state/reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux'

const theme = createTheme({
  palette: {
    primary: {
      main: "#1a9e60",
    },
    secondary:{
      main: "#fff"
    }
  },
});
let appStore = configureStore({reducer:appReducer});
function App() {
  // The actions can be serialized, logged or stored and later replayed.

  return (
    <Provider store={appStore}>
    <ThemeProvider theme={theme}>
      <Home></Home>
    </ThemeProvider>
    </Provider>
  );
}
//console.log(appStore.getState().name);

export default App;
