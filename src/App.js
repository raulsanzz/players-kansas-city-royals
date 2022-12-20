import React from 'react'
import Player from './pages/player/Player';
import AllPlayers from './pages/allPlayers/AllPlayers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/players" element={<AllPlayers />} />
          <Route path="/players/:playerId" element={<Player />} />
          <Route path="*" element={<AllPlayers/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
