import React from "react";
import { navigate } from "@reach/router";
import styles from "./Description.module.css";
import Button from "../../components/Button/Button";
import ContinueClose from "../../assets/images/continue-closed.svg";
import Footer from "../../components/Footer/Footer";

const DescriptionPage = (props) => {
  return (
    <div className={styles.choice}>
      <div className={styles.marginWrapper}>
        <div className={styles.topBar}>
          <img src={ContinueClose} alt="cross for closing"></img>
          <p className={styles.continue}>Fortsätt</p>
          <Button>Hjälp</Button>
        </div>
        <p className={styles.steps}>Steg 13 av 14</p>
        <div className={styles.blueLine}></div>
        <h1 className={styles.title}>Ge en beskrivning</h1>
        <p className={styles.text}>
          Ge en generell beskrivning av bostaden och dess område.
        </p>
        <form>
          <textarea />
        </form>

        <div className={styles.pageNavigation}>
          <Button
            handleClick={() => navigate("/outside")}
            buttonText="Tillbaka"
          />
          <Button
            handleClick={() => navigate("/advertisement-view")}
            buttonText="Spara & fortsätt"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DescriptionPage;
