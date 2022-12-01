import React from "react";
import Banner from "../components/Banner";
import BGBannerAbout from "../assets/a_propos_bg_bannière.png";
import "../styles/pages/About.scss";
// import DataAbout from "../data/about.json";

const About = () => {
  document.title = "Kasa - A propos de nous";

  return (
    <main className="display_about">
      <Banner img={BGBannerAbout} />
    </main>
  );
};

export default About;
