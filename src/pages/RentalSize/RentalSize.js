import React, { useState } from "react";
import { navigate } from "@reach/router";
import styles from "./RentalSize.module.css";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import MenuButton from "../../components/MenuButton/MenuButton";

const RentalSizePage = (props) => {
  const [buttonMenu, setButtonMenu] = useState(false);
  return (
    <div className={styles.choice}>
      <h1 className={styles.title}>Hur stor yta hyr du ut?</h1>
      <p className={styles.text}>
        Fyll i storleken på den boarea du vill hyra ut.
      </p>
      <p className={styles.text}>Antal rum</p>
      <form className={styles.form}>
        <label for="size"></label>
        <select className={styles.select}>
          <option value="size">1</option>
          <option value="size">2</option>
          <option value="size">3</option>
          <option value="size">4</option>
          <option value="size">5</option>
        </select>
        <div className={styles.size}>
          <p className={styles.textSize}>rum</p>
        </div>
      </form>
      <p className={styles.text}>Storlek</p>
      <form className={styles.form}>
        <label for="size"></label>
        <select className={styles.select}>
          <option value="size">22</option>
          <option value="size">23</option>
          <option value="size">24</option>
          <option value="size">25</option>
          <option value="size">26</option>
        </select>
        <div className={styles.size}>
          <p className={styles.textSize}>m&sup2;</p>
        </div>
      </form>

      <div className={styles.pageNavigation}>
        <Button
          onClick={() => navigate("/rental-address")}
          buttonText="Tillbaka"
        />
        <Button
          onClick={() => navigate("/rental-type")}
          buttonText="Spara & fortsätt"
        />
      </div>
      <MenuButton onClick={() => setButtonMenu(true)} />
      <Menu open={buttonMenu} setOpen={setButtonMenu} />
      <Footer />
    </div>
  );
};

export default RentalSizePage;
