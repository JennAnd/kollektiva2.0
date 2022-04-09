import React from "react";
import { navigate } from "@reach/router";
import styles from "./RentalAddress.module.css";
import Button from "../../components/Button/Button";
import ArrowLeft from "../../assets/images/arrow-left.svg";
import ArrowRight from "../../assets/images/arrow-right.svg";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";

const RentalAddressPage = (props) => {
  return (
    <div className={styles.choice}>
      <h1 className={styles.title}>Bostadens adress</h1>
      <p className={styles.text}>
        Sök på din gatuadress eller skriv in den manuellt.
      </p>
      <form className={styles.form}>
        <label className={styles.label} for="address">
          Stad
        </label>
        <input className={styles.input} size="100" type="text" id="address" />
        <label className={styles.label} for="address">
          Gatuadress
        </label>
        <input className={styles.input} type="text" id="address" />
        <label className={styles.label} for="address">
          Gatunummer
        </label>
        <input className={styles.input} type="text" id="address" />
        <label className={styles.label} for="address">
          Postnummer
        </label>
        <input className={styles.input} type="text" id="address" />
      </form>

      <div className={styles.pageNavigation}>
        <Button handleClick={() => navigate("/")}>
          <img src={ArrowLeft} alt="arrow points to left"></img>Tillbaka
        </Button>
        <Button handleClick={() => navigate("/rental-size")}>
          Fortsätt <img src={ArrowRight} alt="arrow points to right"></img>
        </Button>
      </div>
      <Menu />
      <Footer />
    </div>
  );
};

export default RentalAddressPage;
