import React, { useState } from "react";
import { navigate } from "@reach/router";
import styles from "./UploadPhotos.module.css";
import Button from "../../components/Button/Button";
import ContinueClose from "../../assets/images/continue-closed.svg";
import SupportButton from "../../components/SupportButton/SupportButton";
import InfoBox from "../../components/InfoBox/InfoBox";
import ArrowLeft from "../../assets/images/arrow-left.svg";
import ArrowRight from "../../assets/images/arrow-right.svg";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import MenuButton from "../../components/MenuButton/MenuButton";
import MenuDesktop from "../../components/MenuDesktop/MenuDesktop";

const UploadPhotosPage = (props) => {
  const [buttonMenu, setButtonMenu] = useState(false);
  return (
    <div className={styles.choice}>
      <MenuDesktop />
      <div className={styles.marginWrapper}>
        <div className={styles.topBar}>
          <img src={ContinueClose} alt="cross for closing"></img>
          <p className={styles.continue}>Fortsätt senare</p>
          <SupportButton></SupportButton>
        </div>
        <p className={styles.steps}>Steg 9 av 15</p>
        <div className={styles.blueLine}></div>
        <div className={styles.section}>
          <h1 className={styles.title}>Ladda upp bilder</h1>
          <p className={styles.text}>
            Ta eller ladda upp bilder som visar hur bostaden ser ut.
          </p>

          <InfoBox
            text="Ladda upp högupplösta bilder. Tänk på ljussättningen och ta bilder i olika vinklar."
            /* height="120px" */
          ></InfoBox>

          <div className={styles.uploadPhotos}>
            <Button
              buttonText="Ladda upp"
              bg="white"
              border="2px solid #000000"
            />
            <Button
              buttonText="Ta en bild"
              bg="white"
              border="2px solid #000000"
            />
          </div>
          <div className={styles.photoWrapper}>
            <img />
            <img />
            <img />
            <img />
          </div>

          <InfoBox
            text="Glöm inte att markera annonsens omslagsbild genom att trycka på stjärnan."
            /* height="120px" */
          ></InfoBox>

          <div className={styles.pageNavigation}>
            <Button
              onClick={() => navigate("payment")}
              icon={ArrowLeft}
              bg="white"
              border="4px solid #3A0067"
              color="#3A0067"
              buttonText="Tillbaka"
              flexDirection="row"
            ></Button>
            <Button
              onClick={() => navigate("/facts-and-facilities")}
              buttonText="Fortsätt"
              icon={ArrowRight}
              flexDirection="row-reverse"
            ></Button>
          </div>
        </div>
      </div>

      <MenuButton onClick={() => setButtonMenu(true)} />
      <Menu open={buttonMenu} setOpen={setButtonMenu} />
      <Footer />
    </div>
  );
};

export default UploadPhotosPage;
