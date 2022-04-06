import React from "react";
import { navigate } from "@reach/router";
import styles from "./Payment.module.css";
import Button from "../../components/Button/Button";

const PaymentPage = (props) => {
  return (
    <div className={styles.choice}>
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
  );
};

export default PaymentPage;
