import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carousel from "../components/Carrousel";
import DataFile from "../data/logements.json";
import Collapse from "../components/Collapse";
import LogementsInfo from "../components/LogementInfo";
import "../styles/pages/Logement.scss";

// Mise en place de la page Logement qui affiche l'ensemble des informations relatives à un appartement donné
const Logement = () => {
  // Utilisation du hook useParams pour accéder au paramètre passé dans l'URL
  const params = useParams();
  // Utilisation du hook useNavigate pour rediriger l'utilisateur en cas d'erreur dans l'URL
  const navigate = useNavigate();

  // Le hook useEffect gère ici le renvoi vers la page d'erreur en cas d'incohérence entre l'id d'un lodging et l'id contenu dans
  // le paramètre de l'URL de la page courante
  useEffect(() => {
    let lodging = DataFile.find((lodging) => params.id === lodging.id);
    if (!lodging) {
      navigate("*");
    }
  });

  return (
    <>
      {/* La méthode filter permet de s'assurer que l'id de l'appartement match avec l'id contenu en paramètre de l'URL */}
      {/* La méthode map permet ensuite de générer un nouveau tableau contenant les informations relatives à l'appartement donné */}
      {DataFile.filter((lodging) => lodging.id === params.id).map((lodging) => (
        <main key={lodging.title}>
          <Carousel pictures={lodging.pictures} />
          <LogementsInfo
            title={lodging.title}
            location={lodging.location}
            tags={lodging.tags}
            host={lodging.host}
            rating={lodging.rating}
          />
          <section className="collapsesContainer">
            <div className="collapse ">
              <Collapse title="Description" content={lodging.description} />
            </div>
            <div className="collapse equipement">
              <Collapse
                title="Équipements"
                // Utilisation de la méthode map afin de générer une balise <p> pour chaque équipement
                content={lodging.equipments.map((equipment, index) => (
                  <span className="logement_equipement" key={index}>
                    {equipment}
                  </span>
                ))}
              />
            </div>
          </section>
        </main>
      ))}
    </>
  );
};

export default Logement;
