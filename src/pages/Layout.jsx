import Header from "../components/Header";
import Footer from "../components/Footer";
import style from "../styles/Layout.module.css";

function Layout(props) {
  return (
    <div className={style.wrapper}>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
