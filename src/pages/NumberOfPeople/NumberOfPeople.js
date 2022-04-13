import React from "react";
import { navigate } from "@reach/router";
import styles from "./NumberOfPeople.module.css";
import Button from "../../components/Button/Button";
import ContinueClose from "../../assets/images/continue-closed.svg";
import Footer from "../../components/Footer/Footer";

const NumberOfPeoplePage = (props) => {
  return (
    <div className={styles.choice}>
      <div className={styles.marginWrapper}>
        <div className={styles.topBar}>
          <img src={ContinueClose} alt="cross for closing"></img>
          <p className={styles.continue}>Fortsätt</p>
          <Button>Hjälp</Button>
        </div>
        <p className={styles.steps}>Steg 5 av 14</p>
        <div className={styles.blueLine}></div>
        <h1 className={styles.title}>Hur många hyr du ut till?</h1>
        <p className={styles.text}>Välj hur många som du vill hyra ut till.</p>
        <p className={styles.text}>Antal personer</p>

        <div className={styles.pageNavigation}>
          <Button
            handleClick={() => navigate("/form-of-housing")}
            buttonText="Tillbaka"
          />
          <Button
            handleClick={() => navigate("/rental-timeline")}
            buttonText="Spara & fortsätt"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NumberOfPeoplePage;
