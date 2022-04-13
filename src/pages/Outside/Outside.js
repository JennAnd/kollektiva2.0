import React, { useState } from "react";
import { navigate } from "@reach/router";
import styles from "./Outside.module.css";
import Button from "../../components/Button/Button";
import RadioButton from "../../components/RadioButton/RadioButton";
import ContinueClose from "../../assets/images/continue-closed.svg";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import MenuButton from "../../components/MenuButton/MenuButton";

const OutsidePage = (props) => {
  const [buttonMenu, setButtonMenu] = useState(false);
  return (
    <div className={styles.choice}>
      <div className={styles.marginWrapper}>
        <div className={styles.topBar}>
          <img src={ContinueClose} alt="cross for closing"></img>
          <p className={styles.continue}>Fortsätt</p>
          <Button>Hjälp</Button>
        </div>
        <p className={styles.steps}>Steg 12 av 14</p>
        <div className={styles.blueLine}></div>
        <h1 className={styles.title}>Utomhus</h1>
        <form>
          <RadioButton
            id="outside"
            value="Balkong"
            name="outside"
          ></RadioButton>
          <RadioButton
            id="outside"
            value="Trädgård"
            name="outside"
          ></RadioButton>
          <RadioButton id="outside" value="Altan" name="outside"></RadioButton>
        </form>
        <div className={styles.pageNavigation}>
          <Button
            handleClick={() => navigate("/kitchen")}
            buttonText="Tillbaka"
          />
          <Button
            handleClick={() => navigate("/description")}
            buttonText="Spara & fortsätt"
          />
        </div>
        <h1 className={styles.title}>Utomhus</h1>
        <form>
          <RadioButton
            id="outside"
            value="Balkong"
            name="outside"
          ></RadioButton>
          <RadioButton
            id="outside"
            value="Trädgård"
            name="outside"
          ></RadioButton>
          <RadioButton id="outside" value="Altan" name="outside"></RadioButton>
        </form>
        <div className={styles.pageNavigation}>
          <Button onClick={() => navigate("/kitchen")} buttonText="Tillbaka" />
          <Button
            onClick={() => navigate("/description")}
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

export default OutsidePage;
