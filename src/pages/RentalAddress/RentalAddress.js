import React from "react";
import { navigate } from "@reach/router";
import styles from "./RentalAddress.module.css";
import Button from "../../components/Button/Button";

const RentalAddressPage = (props) => {
  return (
    <div className={styles.choice}>
      <h1 className={styles.title}>Bostadens adress</h1>
      <p className={styles.text}>
        Sök på din gatuadress eller skriv in den manuellt.
      </p>
      <form>
        <label for="address"></label>
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.8334 19.4998C12.7563 19.4994 14.6238 18.8557 16.1385 17.6712L20.9008 22.4335L22.4327 20.9017L17.6703 16.1393C18.8555 14.6245 19.4996 12.7566 19.5001 10.8332C19.5001 6.05459 15.612 2.1665 10.8334 2.1665C6.05483 2.1665 2.16675 6.05459 2.16675 10.8332C2.16675 15.6117 6.05483 19.4998 10.8334 19.4998ZM10.8334 4.33317C14.4182 4.33317 17.3334 7.24842 17.3334 10.8332C17.3334 14.4179 14.4182 17.3332 10.8334 17.3332C7.24866 17.3332 4.33341 14.4179 4.33341 10.8332C4.33341 7.24842 7.24866 4.33317 10.8334 4.33317Z"
            fill="black"
          />
        </svg>
        <input type="search" id="address" size="50" />
        <label for="address">Stad</label>
        <input size="100" type="text" id="address" />
        <label for="address">Gatuadress</label>
        <input type="text" id="address" />
        <label for="address">Gatunummer</label>
        <input type="text" id="address" />
        <label for="address">Postnummer</label>
        <input type="text" id="address" />
      </form>

      <div className={styles.pageNavigation}>
        <Button handleClick={() => navigate("/")} buttonText="Tillbaka" />
        <Button
          handleClick={() => navigate("/rental-size")}
          buttonText="Spara & fortsätt"
        />
      </div>
    </div>
  );
};

export default RentalAddressPage;
