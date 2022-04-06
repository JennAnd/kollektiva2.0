import React from "react";
import { navigate } from "@reach/router";
import styles from "./RentalAddress.module.css";
import Button from "../../components/Button/Button";

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
        <Button handleClick={() => navigate("/")} buttonText="Tillbaka" />
        <Button
          handleClick={() => navigate("/rental-size")}
          buttonText="Spara & fortsätt"
        />
      </div>
    </div>
  );
};

export default RentalAddressPage;
