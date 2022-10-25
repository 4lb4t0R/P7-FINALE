import React from "react";
import style from "../styles/Accueil_Banner.module.css";

const Accueil_Banner = () => {
  return (
    <div className={style.banner&&style.bannerapimage}>
      <h1 className={style.hometitle}>
        {" "}
        Chez vous, <br className={style.display} />
        partout et ailleurs{" "}
      </h1>
    </div>
  );
};

export default Accueil_Banner;
