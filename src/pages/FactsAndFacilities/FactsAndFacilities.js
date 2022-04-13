import React, { useState } from "react";
import { navigate } from "@reach/router";
import styles from "./FactsAndFacilities.module.css";
import Button from "../../components/Button/Button";
import RadioButton from "../../components/RadioButton/RadioButton";
import ContinueClose from "../../assets/images/continue-closed.svg";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import MenuButton from "../../components/MenuButton/MenuButton";

const FactsAndFacilitiesPage = (props) => {
  const [buttonMenu, setButtonMenu] = useState(false);
  return (
    <div className={styles.choice}>
      <div className={styles.marginWrapper}>
        <div className={styles.topBar}>
          <img src={ContinueClose} alt="cross for closing"></img>
          <p className={styles.continue}>Fortsätt</p>
          <Button>Hjälp</Button>
        </div>
        <p className={styles.steps}>Steg 9 av 14</p>
        <div className={styles.blueLine}></div>
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
        <div className={styles.pageNavigation}>
          <Button
            onClick={() => navigate("/upload-photos")}
            buttonText="Tillbaka"
          />
          <Button
            onClick={() => navigate("/bathroom")}
            buttonText="Spara & fortsätt"
          />
        </div>
        <MenuButton onClick={() => setButtonMenu(true)} />
        <Menu open={buttonMenu} setOpen={setButtonMenu} />
      </div>
      <Footer />
    </div>
  );
};

export default FactsAndFacilitiesPage;
