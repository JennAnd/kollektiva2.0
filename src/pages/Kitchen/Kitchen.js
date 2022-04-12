import React, { useState } from "react";
import { navigate } from "@reach/router";
import styles from "./Kitchen.module.css";
import Button from "../../components/Button/Button";
import RadioButton from "../../components/RadioButton/RadioButton";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import MenuButton from "../../components/MenuButton/MenuButton";

const KitchenPage = (props) => {
  const [buttonMenu, setButtonMenu] = useState(false);
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
        <Button onClick={() => navigate("/bathroom")} buttonText="Tillbaka" />
        <Button
          onClick={() => navigate("/outside")}
          buttonText="Spara & fortsätt"
        />
      </div>
      <MenuButton onClick={() => setButtonMenu(true)} />
      <Menu open={buttonMenu} setOpen={setButtonMenu} />
      <Footer />
    </div>
  );
};

export default KitchenPage;
