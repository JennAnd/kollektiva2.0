import React from "react";
import { navigate } from "@reach/router";
import styles from "./RentalTimeline.module.css";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";

const RentalTimelinePage = (props) => {
  return (
    <div className={styles.choice}>
      <h1 className={styles.title}>Tidsperiod</h1>
      <p className={styles.text}>Välj hur länge du vill hyra ut din bostad.</p>

      <div className={styles.pageNavigation}>
        <Button
          handleClick={() => navigate("/number-of-people")}
          buttonText="Tillbaka"
        />
        <Button
          handleClick={() => navigate("/payment")}
          buttonText="Spara & fortsätt"
        />
      </div>
      <Footer />
    </div>
  );
};

export default RentalTimelinePage;
