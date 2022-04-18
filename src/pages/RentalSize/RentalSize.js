import React, { useState } from "react";
import { navigate } from "@reach/router";
import styles from "./RentalSize.module.css";
import Button from "../../components/Button/Button";
import SupportButton from "../../components/SupportButton/SupportButton";
import InfoBox from "../../components/InfoBox/InfoBox";
import ContinueClose from "../../assets/images/continue-closed.svg";
import ArrowLeft from "../../assets/images/arrow-left.svg";
import ArrowRight from "../../assets/images/arrow-right.svg";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import MenuButton from "../../components/MenuButton/MenuButton";
import MenuDesktop from "../../components/MenuDesktop/MenuDesktop";

const RentalSizePage = (props) => {
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
        <p className={styles.steps}>Steg 4 av 15</p>
        <div className={styles.line}></div>
        <div className={styles.section}>
          <h1 className={styles.title}>Yta som hyrs ut</h1>
          <p className={styles.text}>
            Ange antal rum och kvadratmeter som ska hyras ut.
          </p>
          <p className={styles.text}>Antal rum</p>
          <form className={styles.form}>
            <label htmlFor="size"></label>
            <select className={styles.select}>
              <option value="size">1</option>
              <option value="size">2</option>
              <option value="size">3</option>
              <option value="size">4</option>
              <option value="size">5</option>
            </select>
            <div className={styles.size}>
              <p className={styles.textSize}>rum</p>
            </div>
          </form>
          <p className={styles.text}>Storlek</p>
          <form className={styles.form}>
            <label htmlFor="size"></label>
            <select className={styles.select}>
              <option value="size">22</option>
              <option value="size">23</option>
              <option value="size">24</option>
              <option value="size">25</option>
              <option value="size">26</option>
            </select>
            <div className={styles.size}>
              <p className={styles.textSize}>m&sup2;</p>
            </div>
          </form>

          <InfoBox
            text="Uppge ej kvadratmeterna för de gemensamma ytorna, så som kök och vardagsrum."
            /* height="93px" */
          ></InfoBox>

          <div className={styles.pageNavigation}>
            <Button
              onClick={() => navigate("/form-of-housing")}
              icon={ArrowLeft}
              bg="white"
              border="4px solid #3A0067"
              color="#3A0067"
              buttonText="Tillbaka"
              flexDirection="row"
            ></Button>
            <Button
              onClick={() => navigate("/number-of-people")}
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

export default RentalSizePage;
