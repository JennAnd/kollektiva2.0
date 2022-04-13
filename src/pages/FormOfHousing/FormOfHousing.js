import React from "react";
import { navigate } from "@reach/router";
import styles from "./FormOfHousing.module.css";
import Button from "../../components/Button/Button";
import RadioButton from "../../components/RadioButton/RadioButton";
import ContinueClose from "../../assets/images/continue-closed.svg";
import Footer from "../../components/Footer/Footer";

const FormOfHousingPage = (props) => {
  return (
    <div className={styles.choice}>
      <div className={styles.marginWrapper}>
        <div className={styles.topBar}>
          <img src={ContinueClose} alt="cross for closing"></img>
          <p className={styles.continue}>Fortsätt</p>
          <Button>Hjälp</Button>
        </div>
        <p className={styles.steps}>Steg 4 av 14</p>
        <div className={styles.blueLine}></div>
        <h1 className={styles.title}>Boendeform</h1>
        <p className={styles.text}>Boendeform</p>
        <form>
          <RadioButton
            id="formOfHousing"
            value="Bostadsrätt"
            name="formOfHousing"
          ></RadioButton>
          <RadioButton
            id="formOfHousing"
            value="Hyresrätt"
            name="formOfHousing"
          ></RadioButton>
          <RadioButton
            id="formOfHousing"
            value="Villa eller äganderätt"
            name="formOfHousing"
          ></RadioButton>
        </form>
        <div className={styles.pageNavigation}>
          <Button
            handleClick={() => navigate("/rental-type")}
            buttonText="Tillbaka"
          />
          <Button
            handleClick={() => navigate("/number-of-people")}
            buttonText="Spara & fortsätt"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FormOfHousingPage;
