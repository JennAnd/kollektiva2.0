import React from "react";
import { navigate } from "@reach/router";
import styles from "./RentalSize.module.css";
import Button from "../../components/Button/Button";

const RentalSizePage = (props) => {
  return (
    <div className={styles.choice}>
      <h1 className={styles.title}>Ge en beskrivning</h1>
      <p className={styles.text}>
        Ge en generell beskrivning av bostaden och dess område.
      </p>
      <form>
        <p className={styles.text}>Antal rum</p>
        <select>
          <option value="size">1</option>
          <option value="size">2</option>
          <option value="size">3</option>
          <option value="size">4</option>
          <option value="size">5</option>
        </select>
        <div className={styles.size}>
          <p className={styles.text}>rum</p>
        </div>
      </form>
      <form>
        <p className={styles.text}>Storlek</p>
        <select>
          <option value="size">22</option>
          <option value="size">23</option>
          <option value="size">24</option>
          <option value="size">25</option>
          <option value="size">26</option>
        </select>
        <div>
          <p className={styles.text}>m&sup2;</p>
        </div>
      </form>

      <div className={styles.pageNavigation}>
        <Button
          handleClick={() => navigate("/rental-address")}
          buttonText="Tillbaka"
        />
        <Button
          handleClick={() => navigate("/rental-type")}
          buttonText="Spara & fortsätt"
        />
      </div>
    </div>
  );
};

export default RentalSizePage;
