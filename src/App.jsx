import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './composants/Header';
import Footer from './composants/Footer';
import Accueil from "./pages/Accueil";
import Competitions from './pages/Competitions';
import DetailCompetition from './pages/DetailCompetition';
import AjouterEpreuve from './pages/AjouterEpreuve';
import Photos from './pages/Photos';
import AjouterParticipant from './pages/AjouterEpreuve';
import AjouterCompetition from './pages/AjouterCompetition';
import DetailEpreuve from './pages/DetailEpreuve';

function App() {
  return (
    <div className="App box-sizing: border-box justify-center bg-white">

      <Header className="w-full"/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil/>} />
          <Route path="/Competitions" element={<Competitions/>} />
          <Route path="/AjouterEpreuve" element={<AjouterEpreuve/>} />
          <Route path="/AjouterParticipant" element={<AjouterParticipant/>} />
          <Route path="/AjouterCompetition" element={<AjouterCompetition/>} />
          <Route path="/Photos" element={<Photos/>} />
          <Route path="/DetailCompetition" element={<DetailCompetition/>} />
          <Route path="/DetailEpreuve" element={<DetailEpreuve/>} />
          <Route path="*" element={<Accueil/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}


export default App
