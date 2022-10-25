import logo from "../assets/LOGO.png";
import style from "../styles/Footer.module.css";

function Footer() {
  return (
    <div className={style.footinit}>
      <img src={logo} className={style.logo} alt="Logo de la société" />
      <p className={style.copyrights}>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
