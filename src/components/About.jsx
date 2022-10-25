import React from "react";
import { useState } from "react";
import style from "../styles/About.module.css";
import vector from "../assets/Vector.svg";

const Collapse = ({description,equipements=[]}) => {
  console.log(equipements)
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
      <p>{description}</p>
      {equipements.map((equipement, index) => (
        <div key={index}>
          <div className={style.collapse} onClick={() => toggleCollapse(index)}>
            <h2 className={style.collapsetext}>{equipement}</h2>
            <div>
              <img
                src={vector}
                alt="flèche"
                className={
                  isOpen === index
                    ? style.collapsearrow && style.collapsearrowturn
                    : style.collapsearrow
                }
              />
            </div>
          </div>
          <div
            className={
              isOpen === index ? style.collapsedescription : style.displaynone
            }
          >
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default Collapse;
