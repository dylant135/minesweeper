import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Game from './components/Game';
import Home from './components/Home';


function App() {

  return (
    <div className="App">  
      <h1 className="center">MineSweeper</h1>    
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/game' element={<Game />} />
        </Routes>
    </div>
  );
}

export default App;
