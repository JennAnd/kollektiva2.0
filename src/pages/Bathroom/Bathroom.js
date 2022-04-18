import React, { useState } from "react";
import { navigate } from "@reach/router";
import styles from "./Bathroom.module.css";
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

const BathroomPage = (props) => {
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
        <p className={styles.steps}>Steg 11 av 15</p>
        <div className={styles.line}></div>
        <div className={styles.section}>
          <h1 className={styles.title}>Vad finns i badrummet?</h1>
          <p className={styles.text}>Välj vad som stämmer in på rummet.</p>
          <form>
            <RadioButton id="bathroom" value="Toalett"></RadioButton>
            <RadioButton id="bathroom" value="Badkar"></RadioButton>
            <RadioButton id="bathroom" value="Dusch"></RadioButton>
            <RadioButton id="bathroom" value="Handdukstorkare"></RadioButton>
            <RadioButton id="bathroom" value="Tvättmaskin"></RadioButton>
            <RadioButton id="bathroom" value="Torktumlare"></RadioButton>
            <RadioButton id="bathroom" value="Toalettarmstöd"></RadioButton>
            <RadioButton id="bathroom" value="Duschbänk"></RadioButton>
          </form>

          <InfoBox
            text="Du kan kryssa i flera alternativ här."
            /* height="93px" */
          ></InfoBox>

          <div className={styles.pageNavigation}>
            <Button
              onClick={() => navigate("/facts-and-facilities")}
              icon={ArrowLeft}
              bg="white"
              border="4px solid #3A0067"
              color="#3A0067"
              buttonText="Tillbaka"
              flexDirection="row"
            ></Button>
            <Button
              onClick={() => navigate("/kitchen")}
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
export default BathroomPage;
