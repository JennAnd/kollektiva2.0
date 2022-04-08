import React from "react";
import { navigate } from "@reach/router";
import styles from "./NumberOfPeople.module.css";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";

const NumberOfPeoplePage = (props) => {
  return (
    <div className={styles.choice}>
      <h1 className={styles.title}>Hur många hyr du ut till?</h1>
      <p className={styles.text}>Välj hur många som du vill hyra ut till.</p>
      <p className={styles.text}>Antal personer</p>

      <div className={styles.pageNavigation}>
        <Button
          handleClick={() => navigate("/form-of-housing")}
          buttonText="Tillbaka"
        />
        <Button
          handleClick={() => navigate("/rental-timeline")}
          buttonText="Spara & fortsätt"
        />
      </div>
      <Footer />
    </div>
  );
};

export default NumberOfPeoplePage;
