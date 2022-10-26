import React from "react";
import style from "../styles/Tag_Logement";
import  logementsData  from "../datas/logements.json";
import { useParams } from "react-router-dom";

const Tag = () => {
  const params = useParams();
  const logementId = params.id;
  return (
    <ul className={style.tags}>
      {logementsData
        .filter((logement) => logement.id === logementId)
        .map((logementFiltre) => (
          <li key={logementFiltre}>
            <div className={style.tag}>{logementFiltre.tags}</div>
          </li>
        ))}
    </ul>
  );
};

export default Tag;
