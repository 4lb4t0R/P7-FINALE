import style from "../styles/Host.module.css";
import React from "react";
import { useParams } from "react-router-dom";
import { logementsData } from "../datas/logements";

const Host = () => {
  const params = useParams();
  const logementId = params.id;
  return (
    <div>
      {logementsData
        .filter((logement) => logement.id === logementId)
        .map((logementFiltre) => (
          <div key={logementFiltre.host} className={style.host}>
            <p className={style.hostname}> {logementFiltre.host.name}</p>
            <img
              className={style.hostpicture}
              src={logementFiltre.host.picture}
              alt="visage de votre hôte"
            />
          </div>
        ))}
    </div>
  );
};

export default Host;
