import React from "react";
import { navigate } from "@reach/router";
import styles from "./FactsAndFacilities.module.css";
import Button from "../../components/Button/Button";
import RadioButton from "../../components/RadioButton/RadioButton";
import Footer from "../../components/Footer/Footer";

const FactsAndFacilitiesPage = (props) => {
  return (
    <div className={styles.choice}>
      <h1 className={styles.title}>Fakta och faciliteter</h1>
      <p className={styles.text}>
        Specificera hur ditt boende ser ut. Fyll endast i det som finns
        tillgänligt för hyresgästen.
      </p>
      <h2 className={styles.subTitle}>Bekvämligheter</h2>
      <form>
        <RadioButton
          id="factsAndFacilities"
          value="Husdjur tillåtet"
          name="factsAndFacilities"
        ></RadioButton>
        <RadioButton
          id="factsAndFacilities"
          value="Hiss"
          name="factsAndFacilities"
        ></RadioButton>
        <RadioButton
          id="factsAndFacilities"
          value="Parkering"
          name="factsAndFacilities"
        ></RadioButton>
        <RadioButton
          id="factsAndFacilities"
          value="Garage"
          name="factsAndFacilities"
        ></RadioButton>
        <RadioButton
          id="factsAndFacilities"
          value="Lämpligt för seniorer"
          name="factsAndFacilities"
        ></RadioButton>
      </form>

      {/* <div class="helpButton">
        <Button buttonText="Hjälp" bg="white" border="2px solid #000000" />
      </div> */}
      <div className={styles.pageNavigation}>
        <Button
          handleClick={() => navigate("/upload-photos")}
          buttonText="Tillbaka"
        />
        <Button
          handleClick={() => navigate("/bathroom")}
          buttonText="Spara & fortsätt"
        />
      </div>
      <Footer />
    </div>
  );
};

export default FactsAndFacilitiesPage;
