import React from "react";
import { navigate } from "@reach/router";
import styles from "./Payment.module.css";
import Button from "../../components/Button/Button";
import ContinueClose from "../../assets/images/continue-closed.svg";
import Footer from "../../components/Footer/Footer";

const PaymentPage = (props) => {
  return (
    <div className={styles.choice}>
      <div className={styles.marginWrapper}>
        <div className={styles.topBar}>
          <img src={ContinueClose} alt="cross for closing"></img>
          <p className={styles.continue}>Fortsätt</p>
          <Button>Hjälp</Button>
        </div>
        <p className={styles.steps}>Steg 7 av 14</p>
        <div className={styles.blueLine}></div>
        <h1 className={styles.title}>Hyra</h1>
        <p className={styles.text}>Ange hur mycket hyran för hyresgästen är.</p>

        <div className={styles.pageNavigation}>
          <Button
            handleClick={() => navigate("/rental-timeline")}
            buttonText="Tillbaka"
          />
          <Button
            handleClick={() => navigate("/upload-photos")}
            buttonText="Spara & fortsätt"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentPage;
