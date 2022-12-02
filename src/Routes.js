// Importation Package, pages, etc...
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Logement from "./pages/Logement";
import Error404 from "./pages/Error404";

// Logique de routes : HOME / ABOUT / LOGEMENT / ERROR
// Utilisation de React Router

// Fonction App qui va afficher tout ce notre code (HTML/CSS/JS) présents dans nos pages
function App() {
  return (
    <div className="App">
      <Routes>
        {/* A la racine : Route vers la page d'accueil */}
        <Route path="/" element={<Home />} />

        {/* Route vers chacune des pages appartement */}
        <Route path="/logement:id" element={<Logement />} />

        {/* Route vers la page "À propos" */}
        <Route path="/about" element={<About />} />

        {/*  Redirection vers la page d'erreur en cas d'URL incorrecte */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
