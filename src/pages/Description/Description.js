import React from "react";
import { navigate } from "@reach/router";
import styles from "./Description.module.css";
import Button from "../../components/Button/Button";

const DescriptionPage = (props) => {
  return (
    <div className={styles.choice}>
      <h1 className={styles.title}>Ge en beskrivning</h1>
      <p className={styles.text}>
        Ge en generell beskrivning av bostaden och dess område.
      </p>
      <form>
        <textarea cols="50" rows="20" />
      </form>

      <div className={styles.pageNavigation}>
        <Button
          handleClick={() => navigate("/outside")}
          buttonText="Tillbaka"
        />
        <Button
          handleClick={() => navigate("/advertisement-view")}
          buttonText="Spara & fortsätt"
        />
      </div>
    </div>
  );
};

export default DescriptionPage;
