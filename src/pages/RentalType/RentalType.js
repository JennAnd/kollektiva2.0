import React, { useState } from "react";
import { navigate } from "@reach/router";
import styles from "./RentalType.module.css";
import Button from "../../components/Button/Button";
import RadioButton from "../../components/RadioButton/RadioButton";
import ContinueClose from "../../assets/images/continue-closed.svg";
import SupportButton from "../../components/SupportButton/SupportButton";
import InfoBox from "../../components/InfoBox/InfoBox";
import ArrowLeft from "../../assets/images/arrow-left.svg";
import ArrowRight from "../../assets/images/arrow-right.svg";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import MenuButton from "../../components/MenuButton/MenuButton";
import MenuDesktop from "../../components/MenuDesktop/MenuDesktop";

const RentalTypePage = (props) => {
  const [buttonMenu, setButtonMenu] = useState(false);
  return (
    <div className={styles.choice}>
      <MenuDesktop />
      <div className={styles.marginWrapper}>
        <div className={styles.topBar}>
          <img src={ContinueClose} alt="cross for closing"></img>
          <p className={styles.continue}>Fortsätt</p>
          <SupportButton></SupportButton>
        </div>
        <p className={styles.steps}>Steg 3 av 14</p>
        <div className={styles.blueLine}></div>
        <div className={styles.section}>
          <h1 className={styles.title}>Typ av bostad</h1>
          <p className={styles.text}>Välj vilken typ av bostad du hyr ut.</p>
          <form>
            <RadioButton id="rentalType" value="Villa"></RadioButton>
            <RadioButton id="rentalType" value="Hus"></RadioButton>
            <RadioButton id="rentalType" value="Radhus"></RadioButton>
            <RadioButton id="rentalType" value="Stuga"></RadioButton>
            <RadioButton id="rentalType" value="Parhus"></RadioButton>
            <RadioButton id="rentalType" value="Korridorsrum"></RadioButton>
            <RadioButton id="rentalType" value="Lägenheten"></RadioButton>
            <RadioButton id="rentalType" value="Loftgångshus"></RadioButton>
          </form>

          <InfoBox text="Du kan endast välja en form av bostad."></InfoBox>

          <div className={styles.pageNavigation}>
            <Button
              onClick={() => navigate("/rental-address")}
              icon={ArrowLeft}
              bg="white"
              border="4px solid #3A0067"
              color="#3A0067"
              buttonText="Tillbaka"
              flexDirection="row"
            ></Button>
            <Button
              onClick={() => navigate("/form-of-housing")}
              buttonText="Fortsätt"
              icon={ArrowRight}
              flexDirection="row-reverse"
            ></Button>
          </div>
        </div>
        <MenuButton onClick={() => setButtonMenu(true)} />
        <Menu open={buttonMenu} setOpen={setButtonMenu} />
      </div>
      <Footer />
    </div>
  );
};

export default RentalTypePage;
