import React from "react";
import { navigate } from "@reach/router";
import styles from "./FormOfHousing.module.css";
import Button from "../../components/Button/Button";
import RadioButton from "../../components/RadioButton/RadioButton";

const FormOfHousingPage = (props) => {
  return (
    <div className={styles.choice}>
      <h1 className={styles.title}>Boendeform</h1>
      <p className={styles.text}>Boendeform</p>
      <form>
        <RadioButton
          id="formOfHousing"
          value="Bostadsrätt"
          name="formOfHousing"
        ></RadioButton>
        <RadioButton
          id="formOfHousing"
          value="Hyresrätt"
          name="formOfHousing"
        ></RadioButton>
        <RadioButton
          id="formOfHousing"
          value="Villa eller äganderätt"
          name="formOfHousing"
        ></RadioButton>
      </form>

      {/*  <div class="helpButton">
        <Button buttonText="Hjälp" bg="white" border="2px solid #000000" />
      </div> */}
      <div className={styles.pageNavigation}>
        <Button
          handleClick={() => navigate("/rental-type")}
          buttonText="Tillbaka"
        />
        <Button
          handleClick={() => navigate("/number-of-people")}
          buttonText="Spara & fortsätt"
        />
      </div>
    </div>
  );
};

export default FormOfHousingPage;