import React from "react";
import style from "../styles/Titre_Logement";
import { logementsData } from "../datas/logements";
import { useParams } from "react-router-dom";

const Titre_Logement = () => {
  const params = useParams();
  const logementId = params.id;
  console.log(params);
  console.log(logementId);

  return (
    <div className={style.titre}>
      {logementsData
        .filter((logement) => logement.id === logementId)
        .map((logementFiltre) => (
          <div key={logementFiltre}>
            <h1 className={style.titre}>{logementFiltre.title}</h1>
            <p className={style.location}>{logementFiltre.location}</p>
          </div>
        ))}
    </div>
  );
};

export default Titre_Logement;
