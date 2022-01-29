import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import IndexPage from "./pages";
import GamePage from "./pages/game";
import Background from "./components/background";
import SetupsPage from "./pages/setups";
import JoinGamePage from "./pages/joinGame";
import LobbyPage from "./pages/lobby";

function App() {


  return (
    <Router basename="https://www.julienpierlot.be/">
      <Background />
          <Routes>
            <Route path='/' element={<IndexPage />} exact />
            <Route path='/game-setups' element={<SetupsPage />} exact />
            <Route path='/game/:id' element={<GamePage />} exact />
            <Route path='/join-game' element={<JoinGamePage />} exact />
            <Route path='/game-lobby/:id' element={<LobbyPage />} exact />
          </Routes>
      </Router>
  );
}

export default App;
