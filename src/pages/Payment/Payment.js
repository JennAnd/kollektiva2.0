import React, { useState } from "react";
import { navigate } from "@reach/router";
import styles from "./Payment.module.css";
import Button from "../../components/Button/Button";
import ContinueClose from "../../assets/images/continue-closed.svg";
import SupportButton from "../../components/SupportButton/SupportButton";
import InfoBox from "../../components/InfoBox/InfoBox";
import ArrowLeft from "../../assets/images/arrow-left.svg";
import ArrowRight from "../../assets/images/arrow-right.svg";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import MenuButton from "../../components/MenuButton/MenuButton";
import MenuDesktop from "../../components/MenuDesktop/MenuDesktop";

const PaymentPage = (props) => {
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
        <p className={styles.steps}>Steg 8 av 15</p>
        <div className={styles.line}></div>
        <div className={styles.section}>
          <h1 className={styles.title}>Hyra</h1>
          <p className={styles.text}>
            Välj hur mycket det kommer kosta för hyresgästen att bo hos dig.
          </p>
          <form className={styles.form}>
            <label htmlFor="payment"></label>
            <input className={styles.input} type="text" id="payment"></input>
            <div className={styles.price}>
              <p className={styles.textPrice}>Kr</p>
            </div>
          </form>

          <InfoBox
            text="Räkna ut vilket pris du bör sätta i hyra genom att ta hjälp av Kollektivas bostadskalkyl."
            /* height="120px" */
          ></InfoBox>

          <div className={styles.pageNavigation}>
            <Button
              onClick={() => navigate("/notice-period")}
              icon={ArrowLeft}
              bg="white"
              border="4px solid #3A0067"
              color="#3A0067"
              buttonText="Tillbaka"
              flexDirection="row"
            ></Button>
            <Button
              onClick={() => navigate("/upload-photos")}
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

export default PaymentPage;
