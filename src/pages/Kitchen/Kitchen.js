import React, { useState } from "react";
import { navigate } from "@reach/router";
import styles from "./Kitchen.module.css";
import Button from "../../components/Button/Button";
import RadioButton from "../../components/RadioButton/RadioButton";
import ContinueClose from "../../assets/images/continue-closed.svg";
import ArrowLeft from "../../assets/images/arrow-left.svg";
import ArrowRight from "../../assets/images/arrow-right.svg";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import MenuButton from "../../components/MenuButton/MenuButton";
import MenuDesktop from "../../components/MenuDesktop/MenuDesktop";

const KitchenPage = (props) => {
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
        <p className={styles.steps}>Steg 11 av 14</p>
        <div className={styles.blueLine}></div>
        <div className={styles.section}>
          <h1 className={styles.title}>Kök</h1>
          <form>
            <RadioButton
              id="kitchen"
              value="Diskmaskin"
              name="kitchen"
            ></RadioButton>
            <RadioButton id="kitchen" value="Kyl" name="kitchen"></RadioButton>
            <RadioButton id="kitchen" value="Frys" name="kitchen"></RadioButton>
            <RadioButton
              id="kitchen"
              value="Ugn/Spis"
              name="kitchen"
            ></RadioButton>
            <RadioButton
              id="kitchen"
              value="Köksfläkt"
              name="kitchen"
            ></RadioButton>
            <RadioButton
              id="kitchen"
              value="Microvågsugn"
              name="kitchen"
            ></RadioButton>
            <RadioButton
              id="kitchen"
              value="Kaffebryggare"
              name="kitchen"
            ></RadioButton>
            <RadioButton
              id="kitchen"
              value="Vattenkokare"
              name="kitchen"
            ></RadioButton>
          </form>
          <div className={styles.pageNavigation}>
            <Button
              onClick={() => navigate("/bathroom")}
              icon={ArrowLeft}
              bg="white"
              border="2px solid #3A0067"
              color="#3A0067"
              buttonText="Tillbaka"
              flexDirection="row"
            ></Button>
            <Button
              onClick={() => navigate("/outside")}
              buttonText="Fortsätt"
              icon={ArrowRight}
              flexDirection="row-reverse"
            ></Button>
          </div>
        </div>
      </div>
      <MenuButton onClick={() => setButtonMenu(true)} />
      <Menu open={buttonMenu} setOpen={setButtonMenu} />
      <Footer />
    </div>
  );
};

export default KitchenPage;
