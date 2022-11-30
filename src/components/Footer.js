import React from "react";
import LogoFooter from "../assets/LOGO_footer.png";
import "../styles/components/Footer.scss";

// Composant Footer
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <img className="footerLogo" src={LogoFooter} alt="Logo Kasa" />
        <p className="footerText">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
