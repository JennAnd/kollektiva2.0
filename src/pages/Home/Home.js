import React, { useState } from "react";
import { navigate } from "@reach/router";
import styles from "./Home.module.css";
import MediumLogo from "./../../assets/images/medium-logo.svg";
import Card from "../../components/Card/Card";
import Language from "./../../assets/images/language.svg";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import MenuButton from "../../components/MenuButton/MenuButton";
import MenuDesktop from "../../components/MenuDesktop/MenuDesktop";

const HomePage = (props) => {
  const [buttonMenu, setButtonMenu] = useState(false);
  return (
    <div className={styles.choice}>
      <div>
        <MenuDesktop />
        <div className={styles.topBar}>
          <div className={styles.leftContainer}>
            <img src={MediumLogo} alt="logotype for Kollektiva"></img>
          </div>
          <div className={styles.rightContainer}>
            <p className={styles.chooseLanguage}>Välj språk</p>
            <img src={Language} alt="round swedish flag"></img>
          </div>
        </div>
        <div className={styles.section}>
          <h1 className={styles.title}>Bo tillsammans med andra</h1>
          <p className={styles.text}>
            Kollektiva förmedlar på ett tryggt och effektivt sätt ut delade
            hyresbostäder.
          </p>
          <div className={styles.card}>
            <Card
              title="Hyr ut din bostad"
              text="Utöka ditt sociala liv och dra nytta av din bostad genom att hyra ut en del av den"
              buttonText="Läs mer om att hyra ut din bostad"
              onClick={() => navigate("/find-friends")}
            ></Card>
            <Card
              title="Hyr en bostad"
              text="500 000+ användare har redan hittat bostadsvänner via Kollektiva"
              buttonText="Läs mer om att hyra en bostad"
            ></Card>
          </div>
        </div>
      </div>
      <MenuButton onClick={() => setButtonMenu(true)} />
      <Menu open={buttonMenu} setOpen={setButtonMenu} />
      <Footer />
    </div>
  );
};

export default HomePage;
