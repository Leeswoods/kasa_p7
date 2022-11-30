import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.scss";
import Layout from "./components/Layout";

// BrowserRouter va englober notre Routes ça va être le routeur parent c'est ce qui va nous permettre d'utiliser les fonctionnalités de React Router

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
