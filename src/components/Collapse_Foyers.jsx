import style from "../styles/About.module.css";
import { logementsData } from "../datas/logements";
import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import vector from "../assets/Vector.svg";

const Collapse_Foyers = () => {
  const params = useParams();
  const logementId = params.id;
  const [isOpen, setIsOpen] = useState(-1);

  function toggleCollapse(index) {
    if (index === isOpen) {
      setIsOpen(-1);
      return;
    }
    setIsOpen(index);
  }
  return (
    <div>
      {logementsData
        .filter((logement) => logement.id === logementId)
        .map((logementFiltre, index) => (
          <div key={index}>
            <div
              className={style.collapse.equipements}
              onClick={() => toggleCollapse(index)}
            >
              <p className={style.collapsetext.equipements}>Description</p>
              <img
                src={vector}
                alt="flêche du haut"
                className={
                  isOpen === index
                    ? style.collapsearrow.collapsearrowturn
                    : style.collapsearrow
                }
              />
            </div>
            <div
              className={
                isOpen === index
                  ? style.collapsedescription.equipements
                  : style.displaynone
              }
            >
              <p>{logementFiltre.description}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Collapse_Foyers;
