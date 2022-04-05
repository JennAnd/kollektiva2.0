import React from "react";
import styles from "./Home.module.css";
/* import Button from "../../components/Button"; */
import Card from "../../components/Card/Card";
import houseRoof from "./../../assets/images/houseRoof.png";
import Footer from "../../components/Footer/Footer";

const HomePage = (props) => {
  return (
    <div>
      <h1 className={styles.title}>Bo tillsammans med andra</h1>
      <p className={styles.text}>
        Kollektiva förmedlar på ett tryggt och effektivt sätt ut delade
        hyresbostäder.
      </p>
      <Card
        title="Hyr ut din bostad"
        text="Utöka ditt sociala liv och dra nytta av din bostad genom att hyra ut en del av den"
        image={houseRoof}
        buttonText="Läs mer om att hyra ut din bostad"
        bg="white"
      ></Card>
      <Card
        title="Hyr en bostad"
        text="500 000+ användare har redan hittat bostadsvänner via Kollektiva"
        image={houseRoof}
        buttonText="Läs mer om att hyra en bostad"
        bg="white"
      ></Card>
      <Footer />
    </div>
  );
};

export default HomePage;
