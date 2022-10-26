import React from "react";
import style from "../styles/AccueilBanner.module.css";

const Accueil_Banner = () => {
  return (
    <div className={style.banner}>
      <img className={style.bannerapimage} alt="nature et mantra du site"/>
      <h1 className={style.hometitle}>
        {" "}
        Chez vous, <br className={style.display} />
        partout et ailleurs{" "}
      </h1>
    </div>
  );
};

export default Accueil_Banner;