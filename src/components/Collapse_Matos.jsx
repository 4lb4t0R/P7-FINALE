import style from "../styles/Collapse.module.css";

import React from "react";
import { useState } from "react";

import vector from "../assets/Vector.svg";

const Collapse_Matos = ({equip=[]}) => {

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
        <p className={style.collapsetext}>Equipements</p>
        <img
          src={vector}
          alt="flèche"
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
            ? `${style.collapsedescription}  ${style.equipements}`
            : style.displaynone
        }
      >
        <div>{equip.map((item,id) => <p key={id}>{item}</p>)}</div>
      </div>
    </div>
  );
};

export default Collapse_Matos;
