import React, { useState } from "react";
import { navigate } from "@reach/router";
import styles from "./RentalType.module.css";
import Button from "../../components/Button/Button";
import RadioButton from "../../components/RadioButton/RadioButton";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import MenuButton from "../../components/MenuButton/MenuButton";

const RentalTypePage = (props) => {
  const [buttonMenu, setButtonMenu] = useState(false);
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
          onClick={() => navigate("/rental-size")}
          buttonText="Tillbaka"
        />
        <Button
          onClick={() => navigate("/form-of-housing")}
          buttonText="Spara & fortsätt"
        />
      </div>
      <MenuButton onClick={() => setButtonMenu(true)} />
      <Menu open={buttonMenu} setOpen={setButtonMenu} />
      <Footer />
    </div>
  );
};

export default RentalTypePage;
