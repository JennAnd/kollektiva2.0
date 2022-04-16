import React, { useState } from "react";
import { navigate } from "@reach/router";
import styles from "./NumberOfPeople.module.css";
import Button from "../../components/Button/Button";
import InfoBox from "../../components/InfoBox/InfoBox";
import ContinueClose from "../../assets/images/continue-closed.svg";
import SupportButton from "../../components/SupportButton/SupportButton";
import ArrowLeft from "../../assets/images/arrow-left.svg";
import ArrowRight from "../../assets/images/arrow-right.svg";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import MenuButton from "../../components/MenuButton/MenuButton";
import MenuDesktop from "../../components/MenuDesktop/MenuDesktop";

const NumberOfPeoplePage = (props) => {
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

        <p className={styles.steps}>Steg 5 av 15</p>
        <div className={styles.blueLine}></div>
        <div className={styles.section}>
          <h1 className={styles.title}>Antal hyresgäster</h1>
          <p className={styles.text}>Välj hur många du vill hyra ut till.</p>
          <div className={styles.container}>
            <button className={styles.boxStart}>1</button>
            <button className={styles.box}>2</button>
            <button className={styles.box}>3</button>
            <button className={styles.box}>4</button>
            <button className={styles.box}>5</button>
            <button className={styles.boxEnd}>+6</button>
          </div>

          <InfoBox
            text="Tänk på att det måste finnas sovplatser till varje hyresgäst. Vi rekommenderar minst 10 kvm per person."
            /* height="93px" */
          ></InfoBox>

          <div className={styles.pageNavigation}>
            <Button
              onClick={() => navigate("/rental-size")}
              icon={ArrowLeft}
              bg="white"
              border="4px solid #3A0067"
              color="#3A0067"
              buttonText="Tillbaka"
              flexDirection="row"
            ></Button>
            <Button
              onClick={() => navigate("/rental-timeline")}
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

export default NumberOfPeoplePage;
