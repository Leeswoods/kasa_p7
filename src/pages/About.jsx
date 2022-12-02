// Importation Package, composants, image, data
import React from "react";
import Banner from "../components/Banner";
import BGBannerAbout from "../assets/a_propos_bg_bannière.png";
import "../styles/pages/About.scss";
// import DataAbout from "../data/about.json";

// Mise en place de la page About de l'application, qui contient les composants "Banner" et "Collapse"

// Cette page About sera affichée entre le Header et Footer

const About = () => {
  document.title = "Kasa - A propos de nous";

  return (
    <main className="display_about">
      <Banner img={BGBannerAbout} />
    </main>
  );
};

export default About;
