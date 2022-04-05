import React from "react";
import { navigate } from "@reach/router";
import styles from "./Bathroom.module.css";
import Button from "../../components/Button/Button";
import RadioButton from "../../components/RadioButton/RadioButton";

const BathroomPage = (props) => {
  return (
    <div className={styles.choice}>
      <h1 className={styles.title}>Badrum</h1>
      <form>
        <RadioButton
          id="bathroom"
          value="Toalett"
          name="bathroom"
        ></RadioButton>
        <RadioButton id="bathroom" value="Badkar" name="bathroom"></RadioButton>
        <RadioButton id="bathroom" value="Dusch" name="bathroom"></RadioButton>
        <RadioButton
          id="bathroom"
          value="Handdukstorkare"
          name="bathroom"
        ></RadioButton>
        <RadioButton
          id="bathroom"
          value="Tvättmaskin"
          name="bathroom"
        ></RadioButton>
        <RadioButton
          id="bathroom"
          value="Torktumlare"
          name="bathroom"
        ></RadioButton>
        <RadioButton
          id="bathroom"
          value="Toalettarmstöd"
          name="bathroom"
        ></RadioButton>
        <RadioButton
          id="bathroom"
          value="Duschbänk"
          name="bathroom"
        ></RadioButton>
      </form>

      {/* <div class="helpButton">
        <Button buttonText="Hjälp" bg="white" border="2px solid #000000" />
      </div> */}
      <div className={styles.pageNavigation}>
        <Button
          handleClick={() => navigate("/facts-and-facilities")}
          buttonText="Tillbaka"
        />
        <Button
          handleClick={() => navigate("/kitchen")}
          buttonText="Spara & fortsätt"
        />
      </div>
    </div>
  );
};

export default BathroomPage;
