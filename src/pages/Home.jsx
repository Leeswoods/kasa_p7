import React from "react";
import Banner from "../components/Banner";
import BannerImgDesktop from "../assets/acceuil_bg_bannière.png";

// Mise en place de la page Home de l'application, qui contient les composants "Banner" et "Card"

export default function Home() {
  document.title = "Kasa - Accueil";
  return (
    <main className="display_home">
      <Banner
        img={BannerImgDesktop}
        texte1={"Chez vous,"}
        texte2={"partout et ailleurs"}
        alt="Image Acceuil"
      />
    </main>
  );
}
