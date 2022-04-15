import React, { useState } from "react";
import { navigate } from "@reach/router";
import styles from "./RentalAddress.module.css";
import Button from "../../components/Button/Button";
import SupportButton from "../../components/SupportButton/SupportButton";
import InfoBox from "../../components/InfoBox/InfoBox";
import ArrowLeft from "../../assets/images/arrow-left.svg";
import ArrowRight from "../../assets/images/arrow-right.svg";
import ContinueClose from "../../assets/images/continue-closed.svg";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import MenuButton from "../../components/MenuButton/MenuButton";
import MenuDesktop from "../../components/MenuDesktop/MenuDesktop";

const RentalAddressPage = (props) => {
  const [buttonMenu, setButtonMenu] = useState(false);

  return (
    <div className={styles.choice}>
      <MenuDesktop />
      <div className={styles.marginWrapper}>
        <div className={styles.topBar}>
          <img src={ContinueClose} alt="cross for closing"></img>
          <p className={styles.continue}>Fortsätt senare</p>
          <SupportButton></SupportButton>
        </div>
        <p className={styles.steps}>Steg 1 av 15</p>
        <div className={styles.blueLine}></div>
        <div className={styles.section}>
          <h1 className={styles.title}>Adress</h1>
          <p className={styles.text}>Skriv in bostadens fullständiga adress.</p>
          <form className={styles.form}>
            <label className={styles.label} htmlFor="address">
              Stad
            </label>
            <input
              className={styles.input}
              size="100"
              type="text"
              id="address"
            />
            <label className={styles.label} htmlFor="address">
              Gatuadress
            </label>
            <input className={styles.input} type="text" id="address" />
            <label className={styles.label} htmlFor="address">
              Postnummer
            </label>
            <input className={styles.input} type="text" id="address" />
          </form>

          <InfoBox text="Din fullständiga adress kommer ej synas i annonsen."></InfoBox>

          <div className={styles.pageNavigation}>
            <Button
              onClick={() => navigate("/")}
              icon={ArrowLeft}
              bg="white"
              border="4px solid #3A0067"
              color="#3A0067"
              buttonText="Tillbaka"
              flexDirection="row"
            ></Button>
            <Button
              onClick={() => navigate("/rental-type")}
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

export default RentalAddressPage;
