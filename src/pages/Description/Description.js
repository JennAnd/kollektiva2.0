import React, { useState } from "react";
import { navigate } from "@reach/router";
import styles from "./Description.module.css";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import MenuButton from "../../components/MenuButton/MenuButton";

const DescriptionPage = (props) => {
  const [buttonMenu, setButtonMenu] = useState(false);
  return (
    <div className={styles.choice}>
      <h1 className={styles.title}>Ge en beskrivning</h1>
      <p className={styles.text}>
        Ge en generell beskrivning av bostaden och dess område.
      </p>
      <form>
        <textarea />
      </form>

      <div className={styles.pageNavigation}>
        <Button onClick={() => navigate("/outside")} buttonText="Tillbaka" />
        <Button
          onClick={() => navigate("/advertisement-view")}
          buttonText="Spara & fortsätt"
        />
      </div>
      <MenuButton onClick={() => setButtonMenu(true)} />
      <Menu open={buttonMenu} setOpen={setButtonMenu} />
      <Footer />
    </div>
  );
};

export default DescriptionPage;
