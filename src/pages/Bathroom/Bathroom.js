import React, { useState } from "react";
import { navigate } from "@reach/router";
import styles from "./Bathroom.module.css";
import Button from "../../components/Button/Button";
import RadioButton from "../../components/RadioButton/RadioButton";
import ContinueClose from "../../assets/images/continue-closed.svg";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import MenuButton from "../../components/MenuButton/MenuButton";
import MenuDesktop from "../../components/MenuDesktop/MenuDesktop";

const BathroomPage = (props) => {
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
        <p className={styles.steps}>Steg 10 av 14</p>
        <div className={styles.blueLine}></div>
        <div className={styles.section}>
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

          {/* <div class="helpButton">
        <Button buttonText="Hjälp" bg="white" border="2px solid #000000" />
      </div> */}
          <div className={styles.pageNavigation}>
            <Button
              onClick={() => navigate("/facts-and-facilities")}
              buttonText="Tillbaka"
            />
            <Button
              onClick={() => navigate("/kitchen")}
              buttonText="Spara & fortsätt"
            />
          </div>
        </div>
      </div>
      <MenuButton onClick={() => setButtonMenu(true)} />
      <Menu open={buttonMenu} setOpen={setButtonMenu} />
      <Footer />
    </div>
  );
};
export default BathroomPage;
