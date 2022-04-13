import React, { useState } from "react";
import { navigate } from "@reach/router";
import styles from "./Payment.module.css";
import Button from "../../components/Button/Button";
import ContinueClose from "../../assets/images/continue-closed.svg";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import MenuButton from "../../components/MenuButton/MenuButton";

const PaymentPage = (props) => {
  const [buttonMenu, setButtonMenu] = useState(false);
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
        <form className={styles.form}>
          <label for="payment"></label>
          <input
            className={styles.input}
            type="text"
            id="payment"
            placeholder="Skriv in månadssumman på hyran"
          ></input>
          <div className={styles.price}>
            <p className={styles.textPrice}>Kr</p>
          </div>
        </form>

        <div className={styles.pageNavigation}>
          <Button
            onClick={() => navigate("/rental-timeline")}
            buttonText="Tillbaka"
          />
          <Button
            onClick={() => navigate("/upload-photos")}
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

export default PaymentPage;
