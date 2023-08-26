import React from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom'
import Game from './components/Game';
import Home from './components/Home';


function App() {

  return (
    <div className="App">  
      <Link to='/' className='header'><h1 className="center">MineSweeper</h1></Link>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/game' element={<Game />} />
        </Routes>
    </div>
  );
}

export default App;
