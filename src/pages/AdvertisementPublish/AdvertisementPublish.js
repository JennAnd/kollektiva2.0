import React, { useState } from "react";
import styles from "./AdvertisementPublish.module.css";
import Button from "../../components/Button/Button";
import SmallLogotype from "./../../assets/images/small-logo.svg";
import PublishCheckmark from "./../../assets/images/publish-checkmark.svg";
import Footer from "../../components/Footer/Footer";
import MenuButton from "../../components/MenuButton/MenuButton";
import Menu from "../../components/Menu/Menu";
import MenuDesktop from "../../components/MenuDesktop/MenuDesktop";

const AdvertisementPublishPage = (props) => {
  const [buttonMenu, setButtonMenu] = useState(false);
  return (
    <div className={styles.choice}>
      <MenuDesktop />
      <img
        className={styles.logotype}
        src={SmallLogotype}
        alt="logotype for Kollektiva"
      ></img>
      <div className={styles.marginWrapper}>
        <div className={styles.blueLine}></div>
        <div className={styles.section}>
          <h1 className={styles.title}>Din annons har publicerats</h1>
          <img
            className={styles.checkmark}
            src={PublishCheckmark}
            alt="checkmark"
          ></img>
          <h3 className={styles.subTitle}>Glöm inte att ...</h3>
          <p className={styles.text}>
            Håll koll på din annons och se vilka som är intresserade av din
            bostad via mina sidor.
          </p>
          <div className={styles.viewMyPages}>
            <Button
              buttonText="Gå till mina sidor"
              bg="#6B51EF"
              color="white"
              width="395px"
              height="60px"
              jc="center"
            />
          </div>
        </div>
      </div>
      <MenuButton onClick={() => setButtonMenu(true)} />
      <Menu open={buttonMenu} setOpen={setButtonMenu} />
      <Footer />
    </div>
  );
};

export default AdvertisementPublishPage;
