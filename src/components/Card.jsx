import React from "react";
import { Link } from "react-router-dom";
import style from "../styles/Card.module.css";
import  logementsData  from "../datas/logements";

const Card = () => {
  return (
    <ul className={style.list}>
      {logementsData.map((logement) => (
        <li key={logement.id}>
          <Link to={`/page-logement/${logement.id}`}>
            <div className={style.card}>
              <div>
                <img
                  src={logement.cover}
                  alt={`${logement.tags}`}
                  className={style.cardimage}
                />
              </div>
              <div className={style.cardsubtitle}>
                <h2 className={style.cardtitle}>{logement.title}</h2>
              </div>
              <span className={style.degrade}></span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Card;