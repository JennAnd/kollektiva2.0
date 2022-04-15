import React, { useState } from "react";
import { navigate } from "@reach/router";
import styles from "./FormOfHousing.module.css";
import Button from "../../components/Button/Button";
import RadioButton from "../../components/RadioButton/RadioButton";
import ContinueClose from "../../assets/images/continue-closed.svg";
import ArrowLeft from "../../assets/images/arrow-left.svg";
import ArrowRight from "../../assets/images/arrow-right.svg";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import MenuButton from "../../components/MenuButton/MenuButton";
import MenuDesktop from "../../components/MenuDesktop/MenuDesktop";

const FormOfHousingPage = (props) => {
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
        <p className={styles.steps}>Steg 4 av 14</p>
        <div className={styles.blueLine}></div>
        <div className={styles.section}>
          <h1 className={styles.title}>Boendeform</h1>
          <p className={styles.text}>Boendeform</p>
          <form>
            <RadioButton
              id="formOfHousing"
              value="Bostadsrätt"
              /* name="formOfHousing" */
            ></RadioButton>
            <RadioButton
              id="formOfHousing"
              value="Hyresrätt"
              /* name="formOfHousing" */
            ></RadioButton>
            <RadioButton
              id="formOfHousing"
              value="Villa eller äganderätt"
              /* name="formOfHousing" */
            ></RadioButton>
          </form>
          <div className={styles.pageNavigation}>
            <Button
              onClick={() => navigate("/rental-type")}
              icon={ArrowLeft}
              bg="white"
              border="4px solid #3A0067"
              color="#3A0067"
              buttonText="Tillbaka"
              flexDirection="row"
            ></Button>
            <Button
              onClick={() => navigate("/rental-size")}
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

export default FormOfHousingPage;
