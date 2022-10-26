import Layout from "./Layout";
import Collapse from "../components/Collapse";
import Banner from "../components/About_Banner";
import textsList from "../datas/about";

const A_Propos = () => {
  return (
    <Layout>
      <Banner />
      <Collapse datas={textsList}/>
    </Layout>
  );
};

export default A_Propos;
