import React, { useState } from "react";
import { navigate } from "@reach/router";
import styles from "./FormOfHousing.module.css";
import Button from "../../components/Button/Button";
import RadioButton from "../../components/RadioButton/RadioButton";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import MenuButton from "../../components/MenuButton/MenuButton";

const FormOfHousingPage = (props) => {
  const [buttonMenu, setButtonMenu] = useState(false);
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
          onClick={() => navigate("/rental-type")}
          buttonText="Tillbaka"
        />
        <Button
          onClick={() => navigate("/number-of-people")}
          buttonText="Spara & fortsätt"
        />
      </div>
      <MenuButton onClick={() => setButtonMenu(true)} />
      <Menu open={buttonMenu} setOpen={setButtonMenu} />
      <Footer />
    </div>
  );
};

export default FormOfHousingPage;
