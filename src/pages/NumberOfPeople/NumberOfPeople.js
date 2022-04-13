import React, { useState } from "react";
import { navigate } from "@reach/router";
import styles from "./NumberOfPeople.module.css";
import Button from "../../components/Button/Button";
import ContinueClose from "../../assets/images/continue-closed.svg";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import MenuButton from "../../components/MenuButton/MenuButton";
import MenuDesktop from "../../components/MenuDesktop/MenuDesktop";

const NumberOfPeoplePage = (props) => {
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
        <p className={styles.steps}>Steg 5 av 14</p>
        <div className={styles.blueLine}></div>
        <div className={styles.section}>
          <h1 className={styles.title}>Hur många hyr du ut till?</h1>
          <p className={styles.text}>
            Välj hur många som du vill hyra ut till.
          </p>
          <p className={styles.text}>Antal personer</p>

          <div className={styles.container}>
            <button className={styles.boxStart}>1</button>
            <button className={styles.box}>2</button>
            <button className={styles.box}>3</button>
            <button className={styles.box}>4</button>
            <button className={styles.box}>5</button>
            <button className={styles.box}>6</button>
            <button className={styles.box}>7</button>
            <button className={styles.boxEnd}>+8</button>
          </div>
          <div className={styles.pageNavigation}>
            <Button
              onClick={() => navigate("/form-of-housing")}
              buttonText="Tillbaka"
            />
            <Button
              onClick={() => navigate("/rental-timeline")}
              buttonText="Spara & fortsätt"
            />
          </div>
        </div>
        <MenuButton onClick={() => setButtonMenu(true)} />
        <Menu open={buttonMenu} setOpen={setButtonMenu} />
      </div>
      <Footer />
    </div>
  );
};

export default NumberOfPeoplePage;
