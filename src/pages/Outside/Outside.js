import React, { useState } from "react";
import { navigate } from "@reach/router";
import styles from "./Outside.module.css";
import Button from "../../components/Button/Button";
import RadioButton from "../../components/RadioButton/RadioButton";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import MenuButton from "../../components/MenuButton/MenuButton";

const OutsidePage = (props) => {
  const [buttonMenu, setButtonMenu] = useState(false);
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
        <Button onClick={() => navigate("/kitchen")} buttonText="Tillbaka" />
        <Button
          onClick={() => navigate("/description")}
          buttonText="Spara & fortsätt"
        />
      </div>
      <MenuButton onClick={() => setButtonMenu(true)} />
      <Menu open={buttonMenu} setOpen={setButtonMenu} />
      <Footer />
    </div>
  );
};

export default OutsidePage;
