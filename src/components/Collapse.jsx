import React, { useState } from "react";
import style from "../styles/Collapse.module.css";
import vector from "../assets/Vector.svg";
import textsList from "../datas/about";

const Collapse = ({datas}) => {
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
      {datas.map((data) => (
        <div key={data.id}>
          <div className={style.collapse} onClick={() => toggleCollapse(data.id)}>
            <h2 className={style.collapsetext}>{data.title}</h2>
            <div>
              <img
                src={vector}
                alt="flèche"
                className={
                  isOpen === data.id
                    ? style.collapsearrow && style.collapsearrowturn
                    : style.collapsearrow
                }
              />
            </div>
          </div>
          <div
            className={
              isOpen === data.id ? style.collapsedescription : style.displaynone
            }
          >
            <p>{data.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Collapse;
