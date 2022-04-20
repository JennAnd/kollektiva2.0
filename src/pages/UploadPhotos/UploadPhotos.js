import React, { useState } from "react";
import { navigate } from "@reach/router";
import styles from "./UploadPhotos.module.css";
import Button from "../../components/Button/Button";
import ContinueClose from "../../assets/images/continue-closed.svg";
import SupportButton from "../../components/SupportButton/SupportButton";
import InfoBox from "../../components/InfoBox/InfoBox";
import Camera from "../../assets/images/camera.svg";
import UpLoad from "../../assets/images/upLoad.svg";
import ArrowLeft from "../../assets/images/arrow-left.svg";
import ArrowRight from "../../assets/images/arrow-right.svg";
import SofaLivingroom from "../../assets/images/sofa-livingroom.png";
import YellowHouse from "../../assets/images/yellow-house.png";
import Things from "../../assets/images/things.png";
import Bedroom from "../../assets/images/bedroom.png";
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
          <div className={styles.leftContainer}>
            <img src={ContinueClose} alt="cross for closing"></img>
            <p className={styles.continue}>Fortsätt senare</p>
          </div>
          <div className={styles.rightContainer}>
            <SupportButton />
          </div>
        </div>
        <p className={styles.steps}>Steg 9 av 15</p>
        <div className={styles.line}></div>
        <div className={styles.section}>
          <h1 className={styles.title}>Ladda upp bilder</h1>
          <p className={styles.text}>
            Ta eller ladda upp bilder som visar hur bostaden ser ut.
          </p>
          <div className={styles.firstInfoBox}>
            <InfoBox
              text="Ladda upp högupplösta bilder. Tänk på ljussättningen och ta bilder i olika vinklar."
              height="76px"
              gap="16px"
            ></InfoBox>
          </div>

          <div className={styles.uploadPhotos}>
            <Button
              buttonText="Ladda upp"
              bg="white"
              color="#3A0067"
              border="4px solid #6B51EF"
              jc="space-between"
              icon={UpLoad}
              flexDirection="row-reverse"
            />
            <Button
              buttonText="Ta en bild"
              bg="white"
              color="#3A0067"
              border="4px solid #6B51EF"
              jc="space-between"
              icon={Camera}
              flexDirection="row-reverse"
            />
          </div>
          <div className={styles.photoWrapper}>
            <div className={styles.photoTop}>
              <img
                className={styles.imgRoom}
                src={YellowHouse}
                alt="A yellow house"
              ></img>
              <img
                className={styles.imgRoom}
                src={SofaLivingroom}
                alt="a white sofa in a living room"
              ></img>
            </div>
            <div className={styles.photoBottom}>
              <img className={styles.imgRoom} src={Things} alt="things"></img>
              <img className={styles.imgRoom} src={Bedroom} alt="bedroom"></img>
            </div>
          </div>
          <div className={styles.secondInfoBox}>
            <InfoBox
              text="Glöm inte att markera annonsens omslagsbild genom att trycka på stjärnan."
              height="76px"
              gap="16px"
            ></InfoBox>
          </div>

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
