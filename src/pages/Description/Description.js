import React, { useState } from "react";
import { navigate } from "@reach/router";
import styles from "./Description.module.css";
import Button from "../../components/Button/Button";
import ContinueClose from "../../assets/images/continue-closed.svg";
import ArrowLeft from "../../assets/images/arrow-left.svg";
import ArrowRight from "../../assets/images/arrow-right.svg";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import MenuButton from "../../components/MenuButton/MenuButton";
import MenuDesktop from "../../components/MenuDesktop/MenuDesktop";

const DescriptionPage = (props) => {
  const [buttonMenu, setButtonMenu] = useState(false);
  return (
    <div className={styles.choice}>
      <MenuDesktop />
      <div className={styles.marginWrapper}>
        <div className={styles.topBar}>
          <img src={ContinueClose} alt="cross for closing"></img>
          <p className={styles.continue}>Fortsätt</p>
          <Button>Hjälp</Button>
        </div>
        <p className={styles.steps}>Steg 13 av 14</p>
        <div className={styles.blueLine}></div>
        <div className={styles.section}>
          <h1 className={styles.title}>Ge en beskrivning</h1>
          <p className={styles.text}>
            Ge en generell beskrivning av bostaden och dess område.
          </p>
          <form>
            <textarea />
          </form>
          <div className={styles.pageNavigation}>
            <Button
              onClick={() => navigate("/outside")}
              icon={ArrowLeft}
              bg="white"
              border="2px solid #3A0067"
              color="#3A0067"
              buttonText="Tillbaka"
              flexDirection="row"
            ></Button>
            <Button
              onClick={() => navigate("/advertisement-view")}
              buttonText="Fortsätt"
              icon={ArrowRight}
              flexDirection="row-reverse"
            ></Button>
          </div>
        </div>
        <MenuButton onClick={() => setButtonMenu(true)} />
        <Menu open={buttonMenu} setOpen={setButtonMenu} />
      </div>
      <Footer />
    </div>
  );
};

export default DescriptionPage;
