import React, { useState } from "react";
import { navigate } from "@reach/router";
import styles from "./FindFriends.module.css";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import houseRoof from "./../../assets/images/house-roof.png";
import Language from "./../../assets/images/language.svg";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import MenuButton from "../../components/MenuButton/MenuButton";

const FindFriendsPage = (props) => {
  const [buttonMenu, setButtonMenu] = useState(false);
  return (
    <div className={styles.choice}>
      <div className={styles.topBar}>
        <p className={styles.chooseLanguage}>Välj språk</p>
        <img src={Language} alt="round swedish flag"></img>
      </div>
      <div className={styles.marginWrapper}>
        <h1 className={styles.title}>Hitta vänner</h1>
        <h3 className={styles.subTitle}>Dela med dig av ditt hem</h3>
        <p className={styles.text}>
          Utöka ditt sociala liv och dra nytta av din bostad genom att hyra ut
          en del av den.
        </p>
        <Card
          title="Skapa en annons"
          text="Fyll i formuläret och skapa en annons för bostaden du vill hyra ut."
          image={houseRoof}
          buttonText="Skapa annons nu"
          bg="white"
        ></Card>
      </div>
      <h1 className={styles.title}>Hitta vänner</h1>
      <h3 className={styles.subTitle}>Dela med dig av ditt hem</h3>
      <p className={styles.text}>
        Utöka ditt sociala liv och dra nytta av din bostad genom att hyra ut en
        del av den.
      </p>
      <Card
        title="Skapa en annons"
        text="Fyll i formuläret och skapa en annons för bostaden du vill hyra ut."
        image={houseRoof}
        buttonText="Skapa annons nu"
        bg="white"
      ></Card>
      <MenuButton onClick={() => setButtonMenu(true)} />
      <Menu open={buttonMenu} setOpen={setButtonMenu} />
      <Footer />
    </div>
  );
};

export default FindFriendsPage;
