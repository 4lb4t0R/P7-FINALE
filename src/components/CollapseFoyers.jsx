import style from "../styles/Collapse.module.css";

import React from "react";
import { useState } from "react";

import vector from "../assets/Vector.svg";

const Collapse_Foyers = ({desc}) => {
  
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
      <div
        className={`${style.collapse}  ${style.equipements}`}
        onClick={() => toggleCollapse(1)}
      >
        <p className={`${style.collapsetext}  ${style.equipements}`}>Description</p>
        <img
          src={vector}
          alt="flêche du haut"
          className={
            isOpen === 1
              ? `${style.collapsearrow} ${style.collapsearrowturn}`
              : style.collapsearrow
          }
        />
      </div>
      <div
        className={
          isOpen === 1
            ? `${style.collapsedescription}   ${style.equipements}`
            : style.displaynone
        }
      >
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Collapse_Foyers;
