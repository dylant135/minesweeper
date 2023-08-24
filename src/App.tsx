import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Game from './components/Game';
import Home from './components/Home';
import GameContextProvider from './GameContext';


function App() {

  return (
    <div className="App">      
      <GameContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/game' element={<Game />} />
        </Routes>
      </GameContextProvider>
    </div>
  );
}

export default App;
