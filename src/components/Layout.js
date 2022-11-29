import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

//  Mise en place du Layout, constitué des composants "Header" et "Footer" et appelé une fois pour toutes dans le composant général index.js
const Layout = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
