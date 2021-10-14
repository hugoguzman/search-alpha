import React from 'react';
import './App.css';
import MyMap from './Components/MyMap' 
import BottomAppBar from './Components/BottomAppBar';
import ButtonAppBar from './Components/AppBar';


function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <div className="container">
      <MyMap />
      </div>
      <BottomAppBar />  
    </div>
  );
}

export default App;
