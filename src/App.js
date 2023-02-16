import './App.css';
import { doCall } from './components/apicall';
import React from 'react';
import { Container } from '@mui/system';
import { Navbar } from './components/Navbar';
function App() {



//TEST
  return (
    <div className="App">
      <header className="App-header">
          <Navbar></Navbar>
            </header>
      <Container>
        <p>a</p>
      </Container>
    </div>
  );
}

export default App;