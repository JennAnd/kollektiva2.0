import React, { useState } from "react";
import { navigate } from "@reach/router";
import styles from "./FactsAndFacilities.module.css";
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

const FactsAndFacilitiesPage = (props) => {
  const [buttonMenu, setButtonMenu] = useState(false);
  return (
    <div className={styles.choice}>
      <MenuDesktop />
      <div className={styles.marginWrapper}>
        <div className={styles.topBar}>
          <div className={styles.leftContainer}>
            <img src={ContinueClose} alt="cross for closing"></img>
            <p className={styles.continue}>Fortsätt senare</p>
          </div>
          <div className={styles.rightContainer}>
            <SupportButton />
          </div>
        </div>
        <p className={styles.steps}>Steg 10 av 15</p>
        <div className={styles.line}></div>
        <div className={styles.section}>
          <h1 className={styles.title}>Fakta och faciliteter</h1>
          <p className={styles.text}>Välj vad som stämmer in på bostaden.</p>

          <form>
            <RadioButton
              id="factsAndFacilities"
              value="Husdjur tillåtet"
            ></RadioButton>
            <RadioButton id="factsAndFacilities" value="Hiss"></RadioButton>
            <RadioButton
              id="factsAndFacilities"
              value="Rullstolsanpassad"
            ></RadioButton>
            <RadioButton
              id="factsAndFacilities"
              value="Parkering"
            ></RadioButton>
            <RadioButton id="factsAndFacilities" value="Garage"></RadioButton>
            <RadioButton id="factsAndFacilities" value="Wifi"></RadioButton>
          </form>

          <InfoBox
            text="Du kan kryssa i flera alternativ här."
            height="56px"
            paddingRight="88px"
          ></InfoBox>

          <div className={styles.pageNavigation}>
            <Button
              onClick={() => navigate("/upload-photos")}
              icon={ArrowLeft}
              altText={"arrow left"}
              bg="white"
              border="4px solid #3A0067"
              color="#3A0067"
              buttonText="Tillbaka"
              flexDirection="row"
            ></Button>
            <Button
              onClick={() => navigate("/bathroom")}
              buttonText="Fortsätt"
              icon={ArrowRight}
              altText={"arrow right"}
              flexDirection="row-reverse"
            ></Button>
          </div>
          <MenuButton onClick={() => setButtonMenu(true)} />
          <Menu open={buttonMenu} setOpen={setButtonMenu} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FactsAndFacilitiesPage;
