import React from "react";
import { navigate } from "@reach/router";
import styles from "./FindFriends.module.css";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import houseRoof from "./../../assets/images/house-roof.png";
import Footer from "../../components/Footer/Footer";

const FindFriendsPage = (props) => {
  return (
    <div className={styles.choice}>
      <h1 className={styles.title}>Hitta vänner</h1>
      <h3 className={styles.subTitle}>Dela med dig av ditt hem</h3>
      <p className={styles.text}>
        Utöka ditt sociala liv och dra nytta av din bostad genom att hyra ut en
        del av den.
      </p>
      <Card
        title="Skapa en annons"
        text="Fyll i formuläret och skapa en annons för bostaden du vill hyra ut."
        image={houseRoof}
        buttonText="Skapa annons nu"
        bg="white"
      ></Card>
      <Footer />
    </div>
  );
};

export default FindFriendsPage;
