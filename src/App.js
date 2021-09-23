import React from 'react';
import './App.css';
import MyMap from './Components/MyMap' 
import DenseAppBar from './Components/AppBar';
import BottomAppBar from './Components/BottomAppBar';


function App() {
  return (
    <div className="App">
      <DenseAppBar />
      <MyMap />
      <BottomAppBar />
    </div>
  );
}

export default App;
