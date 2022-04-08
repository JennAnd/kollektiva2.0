import React from "react";
import { navigate } from "@reach/router";
import styles from "./Outside.module.css";
import Button from "../../components/Button/Button";
import RadioButton from "../../components/RadioButton/RadioButton";
import Footer from "../../components/Footer/Footer";

const OutsidePage = (props) => {
  return (
    <div className={styles.choice}>
      <h1 className={styles.title}>Utomhus</h1>
      <form>
        <RadioButton id="outside" value="Balkong" name="outside"></RadioButton>
        <RadioButton id="outside" value="Trädgård" name="outside"></RadioButton>
        <RadioButton id="outside" value="Altan" name="outside"></RadioButton>
      </form>

      {/* <div class="helpButton">
        <Button buttonText="Hjälp" bg="white" border="2px solid #000000" />
      </div> */}
      <div className={styles.pageNavigation}>
        <Button
          handleClick={() => navigate("/kitchen")}
          buttonText="Tillbaka"
        />
        <Button
          handleClick={() => navigate("/description")}
          buttonText="Spara & fortsätt"
        />
      </div>
      <Footer />
    </div>
  );
};

export default OutsidePage;
