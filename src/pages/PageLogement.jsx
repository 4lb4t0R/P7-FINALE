import React from "react";
import Layout from "./Layout";
import StarRating from "../components/Notation";
import Collapse_Foyers from "../components/CollapseFoyers";
import Collapse_Matos from "../components/CollapseMatos"
import { useAppartment } from "../Hook/HookLogement.hook";
import "../datas/logements";
import style from "../styles/PageLogement.module.css";
import Slideshow from "../components/Slideshow.jsx";

const FicheLogement = () => {
  const h = useAppartment();
   
  return (
    <Layout>
      <Slideshow slides={h.appartment ? h.appartment.pictures : []} />
      <div>
        <div className={style.enteteflex}>
          <div>
            <div className={style.title}>
              <div>
                <h1 className={style.title}>{h.appartment?.title}</h1>
                <p className={style.location}>{h.appartment?.location}</p>
                <ul className= {`${style.ulmargin} ${style.tags}`}>
                  {h.appartment?.tags &&
                    h.appartment?.tags.map((tag) => (
                      <li key={tag} className={style.tag}>
                        {tag}{" "}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={style.hostrateflex}>
            <div className={style.host}>
              <p className={style.hostname}> {h.appartment?.host.name}</p>
              <img
                className={style.hostpicture}
                src={h.appartment?.host.picture}
                alt="profil de l'hôte"
              />
            </div>
            <div>
              <StarRating
                score={h.appartment ? parseInt(h.appartment.rating) : 0}
              />
            </div>
          </div>
        </div>
        <div className={style.descriptionlogement}>
          <div className={style.hocuspocus}>
          <div className={style.collapselogement}>
            <Collapse_Foyers desc={h.appartment?.description}/>
            </div>
            <div className={style.collapselogement}>
            <Collapse_Matos equip={h.appartment?.equipments}/>
            </div>
            </div>
        </div>
      </div>
    </Layout>
  );
};

export default FicheLogement;
