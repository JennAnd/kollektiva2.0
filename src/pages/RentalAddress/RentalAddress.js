import React, { useState } from "react";
import { navigate } from "@reach/router";
import styles from "./RentalAddress.module.css";
import Button from "../../components/Button/Button";
import ArrowLeft from "../../assets/images/arrow-left.svg";
import ArrowRight from "../../assets/images/arrow-right.svg";
import ContinueClose from "../../assets/images/continue-closed.svg";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import MenuButton from "../../components/MenuButton/MenuButton";
import MenuDesktop from "../../components/MenuDesktop/MenuDesktop";

const RentalAddressPage = (props) => {
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
        <p className={styles.steps}>Steg 1 av 14</p>
        <div className={styles.blueLine}></div>
        <div className={styles.section}>
          <h1 className={styles.title}>Bostadens adress</h1>
          <p className={styles.text}>
            Sök på din gatuadress eller skriv in den manuellt.
          </p>
          <form className={styles.form}>
            <label className={styles.label} for="address">
              Stad
            </label>
            <input
              className={styles.input}
              size="100"
              type="text"
              id="address"
            />
            <label className={styles.label} for="address">
              Gatuadress
            </label>
            <input className={styles.input} type="text" id="address" />
            <label className={styles.label} for="address">
              Gatunummer
            </label>
            <input className={styles.input} type="text" id="address" />
            <label className={styles.label} for="address">
              Postnummer
            </label>
            <input className={styles.input} type="text" id="address" />
          </form>

          <div className={styles.pageNavigation}>
            <Button onClick={() => navigate("/")}>
              <img src={ArrowLeft} alt="arrow points to left" />
              Tillbaka
            </Button>
            <Button onClick={() => navigate("/rental-size")}>
              Fortsätt <img src={ArrowRight} alt="arrow points to right" />
            </Button>
          </div>
        </div>
      </div>
      <MenuButton onClick={() => setButtonMenu(true)} />
      <Menu open={buttonMenu} setOpen={setButtonMenu} />
      <Footer />
    </div>
  );
};

export default RentalAddressPage;
