import React from "react";
import { navigate } from "@reach/router";
import styles from "./RentalType.module.css";
import Button from "../../components/Button/Button";
import RadioButton from "../../components/RadioButton/RadioButton";

const RentalTypePage = (props) => {
  return (
    <div className={styles.choice}>
      <h1 className={styles.title}>Typ av bostad</h1>
      <p className={styles.text}>
        Välj vilket typ av bostad du vill hyra ut. Du kan endast annonsera ett
        boende i taget.
      </p>
      <form>
        <RadioButton
          id="rentalType"
          value="Villa"
          name="rentalType"
        ></RadioButton>
        <RadioButton
          id="rentalType"
          value="Hus"
          name="rentalType"
        ></RadioButton>
        <RadioButton
          id="rentalType"
          value="Radhus"
          name="rentalType"
        ></RadioButton>
        <RadioButton
          id="rentalType"
          value="Stuga"
          name="rentalType"
        ></RadioButton>
        <RadioButton
          id="rentalType"
          value="Parhus"
          name="rentalType"
        ></RadioButton>
        <RadioButton
          id="rentalType"
          value="Korridorsrum"
          name="rentalType"
        ></RadioButton>
        <RadioButton
          id="rentalType"
          value="Lägenheten"
          name="rentalType"
        ></RadioButton>
        <RadioButton
          id="rentalType"
          value="Loftgångshus"
          name="rentalType"
        ></RadioButton>
      </form>

      <div className={styles.pageNavigation}>
        <Button
          handleClick={() => navigate("/rental-size")}
          buttonText="Tillbaka"
        />
        <Button
          handleClick={() => navigate("/form-of-housing")}
          buttonText="Spara & fortsätt"
        />
      </div>
    </div>
  );
};

export default RentalTypePage;
