import React from "react";
import { navigate } from "@reach/router";
import styles from "./Payment.module.css";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";

const PaymentPage = (props) => {
  return (
    <div className={styles.choice}>
      <h1 className={styles.title}>Hyra</h1>
      <p className={styles.text}>Ange hur mycket hyran för hyresgästen är.</p>

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
          handleClick={() => navigate("/rental-timeline")}
          buttonText="Tillbaka"
        />
        <Button
          handleClick={() => navigate("/upload-photos")}
          buttonText="Spara & fortsätt"
        />
      </div>
      <Footer />
    </div>
  );
};

export default PaymentPage;
