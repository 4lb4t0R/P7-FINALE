import style from "../styles/Erreur.module.css";
import React from "react";
import { Link } from "react-router-dom";

function Erreur() {
  return (
    <div className={style.diverreur}>
      <div className={style.nbcontain}>
        <h2 className={style.nberreur}>404</h2>
      </div>
      <p className={style.msgerreur}>
        Oups! La page que vous demandez n'existe pas
      </p>
      <Link className={style.retourerreur} to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Erreur;
