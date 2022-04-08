import React from "react";
import { navigate } from "@reach/router";
import styles from "./Kitchen.module.css";
import Button from "../../components/Button/Button";
import RadioButton from "../../components/RadioButton/RadioButton";
import Footer from "../../components/Footer/Footer";

const KitchenPage = (props) => {
  return (
    <div className={styles.choice}>
      <h1 className={styles.title}>Kök</h1>
      <form>
        <RadioButton
          id="kitchen"
          value="Diskmaskin"
          name="kitchen"
        ></RadioButton>
        <RadioButton id="kitchen" value="Kyl" name="kitchen"></RadioButton>
        <RadioButton id="kitchen" value="Frys" name="kitchen"></RadioButton>
        <RadioButton id="kitchen" value="Ugn/Spis" name="kitchen"></RadioButton>
        <RadioButton
          id="kitchen"
          value="Köksfläkt"
          name="kitchen"
        ></RadioButton>
        <RadioButton
          id="kitchen"
          value="Microvågsugn"
          name="kitchen"
        ></RadioButton>
        <RadioButton
          id="kitchen"
          value="Kaffebryggare"
          name="kitchen"
        ></RadioButton>
        <RadioButton
          id="kitchen"
          value="Vattenkokare"
          name="kitchen"
        ></RadioButton>
      </form>

      <div className={styles.pageNavigation}>
        <Button
          handleClick={() => navigate("/bathroom")}
          buttonText="Tillbaka"
        />
        <Button
          handleClick={() => navigate("/outside")}
          buttonText="Spara & fortsätt"
        />
      </div>
      <Footer />
    </div>
  );
};

export default KitchenPage;
