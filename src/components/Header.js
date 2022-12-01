import React from "react";
import "../styles/components/Header.scss";
import { NavLink } from "react-router-dom"; //  <NavLink> est un type particulier de <Link> qui sait s'il est "actif" ou non. Ceci est utile lors de la création d'un menu de navigation
import Logo from "../assets/LOGO.png";

// Composant "Header", utilisation de NavLink pour la redirection des liens "Accueil" et "À propos"
const Header = () => {
  return (
    <header className="headerContainer">
      <img className="logo" src={Logo} alt="Kasa logo" />
      <ul className="navigation">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "accueil_navbar active" : "accueil_navbar"
            }
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "about_navbar active" : "about_navbar"
            }
          >
            A Propos
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;

//         <li>
//   {/* To sert à indiquer la route de la navigation */}
//   <NavLink to="/" className="homelink">
//     Accueil
//   </NavLink>
// </li>
// <li>
//   {/* To sert à indiquer la route de la navigation */}
//   <NavLink to="/about" className="aboutlink">
//     A propos
//   </NavLink>
// </li>
