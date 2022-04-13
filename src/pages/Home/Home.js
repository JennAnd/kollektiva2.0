import React, { useState } from "react";
import styles from "./Home.module.css";
/* import Button from "../../components/Button"; */
import Card from "../../components/Card/Card";
import houseRoof from "./../../assets/images/house-roof.png";
import Logotype from "./../../assets/images/logotype.svg";
import Language from "./../../assets/images/language.svg";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import MenuButton from "../../components/MenuButton/MenuButton";
import MenuDesktop from "../../components/MenuDesktop/MenuDesktop";

const HomePage = (props) => {
  const [buttonMenu, setButtonMenu] = useState(false);
  return (
    <div>
      <MenuDesktop />
      <div className={styles.topBar}>
        <img src={Logotype} alt="logotype for Kollektiva"></img>
        <p className={styles.logoName}>Kollektiva</p>
        <p className={styles.chooseLanguage}>Välj språk</p>
        <img src={Language} alt="round swedish flag"></img>
      </div>
      <div className={styles.section}>
        <h1 className={styles.title}>Bo tillsammans med andra</h1>
        <p className={styles.text}>
          Kollektiva förmedlar på ett tryggt och effektivt sätt ut delade
          hyresbostäder.
        </p>
        <Card
          title="Hyr ut din bostad"
          text="Utöka ditt sociala liv och dra nytta av din bostad genom att hyra ut en del av den"
          buttonText="Läs mer om att hyra ut din bostad"
        ></Card>
        <Card
          title="Hyr en bostad"
          text="500 000+ användare har redan hittat bostadsvänner via Kollektiva"
          buttonText="Läs mer om att hyra en bostad"
        ></Card>
      </div>
      <MenuButton onClick={() => setButtonMenu(true)} />
      <Menu open={buttonMenu} setOpen={setButtonMenu} />
      <Footer />
    </div>
  );
};

export default HomePage;
