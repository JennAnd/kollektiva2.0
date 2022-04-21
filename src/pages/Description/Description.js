import React, { useState } from "react";
import { navigate } from "@reach/router";
import styles from "./Description.module.css";
import Button from "../../components/Button/Button";
import ContinueClose from "../../assets/images/continue-closed.svg";
import SupportButton from "../../components/SupportButton/SupportButton";
import InfoBox from "../../components/InfoBox/InfoBox";
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
          <div className={styles.leftContainer}>
            <img src={ContinueClose} alt="cross for closing"></img>
            <p className={styles.continue}>Fortsätt senare</p>
          </div>
          <div className={styles.rightContainer}>
            <SupportButton />
          </div>
        </div>
        <p className={styles.steps}>Steg 14 av 15</p>
        <div className={styles.line}></div>
        <div className={styles.section}>
          <h1 className={styles.title}>Titel och beskrivning</h1>
          <p className={styles.text}>
            Skriv en förklarande text om bostaden och området.
          </p>

          <form className={styles.form}>
            <label className={styles.label} htmlFor="title">
              Titel på annons
            </label>
            <textarea id="title" />
          </form>

          <form className={styles.form}>
            <label className={styles.label} htmlFor="description">
              Beskrivning av bostaden
            </label>
            <textarea id="description" className={styles.biggerTextarea} />
          </form>
          <div className={styles.infoBox}>
            <InfoBox
              text="Berätta gärna lite om dig som hyresvärd och vad du söker i en hyresgäst."
              height="64px"
              gap="16px"
              paddingRight="20px"
            ></InfoBox>
          </div>
          <div className={styles.pageNavigation}>
            <Button
              onClick={() => navigate("/outside")}
              icon={ArrowLeft}
              bg="white"
              border="4px solid #3A0067"
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
      </div>
      <MenuButton onClick={() => setButtonMenu(true)} />
      <Menu open={buttonMenu} setOpen={setButtonMenu} />
      <Footer />
    </div>
  );
};

export default DescriptionPage;
