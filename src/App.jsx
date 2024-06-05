import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './composants/Header';
import Accueil from "./pages/Accueil";
import Competitions from './pages/Competitions';
import DetailCompetition from './pages/DetailCompetition';
import NouvelleEpreuve from './pages/NouvelleEpreuve';
import Photos from './pages/Photos';
import AjouterParticipant from './pages/AjouterParticipant';

function App() {
  return (
    <div className="App box-sizing: border-box justify-center bg-white">

      <Header className="w-full"/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil/>} />
          <Route path="/Competitions" element={<Competitions/>} />
          <Route path="/NouvelleEpreuve" element={<NouvelleEpreuve/>} />
          <Route path="/AjouterParticipant" element={<AjouterParticipant/>} />
          <Route path="/Photos" element={<Photos/>} />
          <Route path="/DetailCompetition" element={<DetailCompetition/>} />
          <Route path="*" element={<Accueil/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App