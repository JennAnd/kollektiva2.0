import React from "react";
import { navigate } from "@reach/router";
import styles from "./Bathroom.module.css";
import Button from "../../components/Button/Button";
import RadioButton from "../../components/RadioButton/RadioButton";
import ContinueClose from "../../assets/images/continue-closed.svg";
import Footer from "../../components/Footer/Footer";

const BathroomPage = (props) => {
  return (
    <div className={styles.choice}>
      <div className={styles.marginWrapper}>
        <div className={styles.topBar}>
          <img src={ContinueClose} alt="cross for closing"></img>
          <p className={styles.continue}>Fortsätt</p>
          <Button>Hjälp</Button>
        </div>
        <p className={styles.steps}>Steg 10 av 14</p>
        <div className={styles.blueLine}></div>
        <h1 className={styles.title}>Badrum</h1>
        <form>
          <RadioButton
            id="bathroom"
            value="Toalett"
            name="bathroom"
          ></RadioButton>
          <RadioButton
            id="bathroom"
            value="Badkar"
            name="bathroom"
          ></RadioButton>
          <RadioButton
            id="bathroom"
            value="Dusch"
            name="bathroom"
          ></RadioButton>
          <RadioButton
            id="bathroom"
            value="Handdukstorkare"
            name="bathroom"
          ></RadioButton>
          <RadioButton
            id="bathroom"
            value="Tvättmaskin"
            name="bathroom"
          ></RadioButton>
          <RadioButton
            id="bathroom"
            value="Torktumlare"
            name="bathroom"
          ></RadioButton>
          <RadioButton
            id="bathroom"
            value="Toalettarmstöd"
            name="bathroom"
          ></RadioButton>
          <RadioButton
            id="bathroom"
            value="Duschbänk"
            name="bathroom"
          ></RadioButton>
        </form>
        <div className={styles.pageNavigation}>
          <Button
            handleClick={() => navigate("/facts-and-facilities")}
            buttonText="Tillbaka"
          />
          <Button
            handleClick={() => navigate("/kitchen")}
            buttonText="Spara & fortsätt"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BathroomPage;
