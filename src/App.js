import React from 'react';
import './App.css';
import MyMap from './Components/MyMap' 
import DenseAppBar from './Components/AppBar';

function App() {
  return (
    <div className="App">
      <DenseAppBar />
      <MyMap />
    </div>
  );
}

export default App;
