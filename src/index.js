// Importation Package, composants, etc...
import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.scss";
import Layout from "./components/Layout";

// Séléction de l'id root qui se trouve dans notre dossier >public>index.html

// BrowserRouter va englober notre Routes ça va être le routeur parent c'est ce qui va nous permettre d'utiliser les fonctionnalités de React Router

// Layout est un composant qui contient notre composant Header et Footer,
// Layout englobe Routes pour permettre d'afficher le Header & Footer dans toutes les pages

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Layout>
        <Routes />
      </Layout>
    </React.StrictMode>
  </BrowserRouter>
);
