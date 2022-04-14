import React, { useState } from "react";
import { navigate } from "@reach/router";
import styles from "./UploadPhotos.module.css";
import Button from "../../components/Button/Button";
import ContinueClose from "../../assets/images/continue-closed.svg";
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
          <p className={styles.continue}>Fortsätt</p>
          <Button>Hjälp</Button>
        </div>
        <p className={styles.steps}>Steg 8 av 14</p>
        <div className={styles.blueLine}></div>
        <div className={styles.section}>
          {/* // SOVRUM// */}
          <h1 className={styles.title}>Ladda upp bilder</h1>
          <h3 className={styles.subTitle}>Sovrum</h3>

          <div className={styles.uploadPhotos}>
            <Button
              /* handleClick={() => navigate("/bathroom")} */
              buttonText="Ladda upp"
              bg="white"
              border="2px solid #000000"
            />
            <Button
              /* handleClick={() => navigate("/outside")} */
              buttonText="Ta en bild"
              bg="white"
              border="2px solid #000000"
            />
          </div>
          <img />
          <img />
          <img />
          <img />
          <h3 className={styles.subTitle}>Beskriv rummet</h3>
          <form>
            <textarea cols="50" rows="16" />
          </form>

          {/* // BADRUM// */}
          <h1 className={styles.title}>Ladda upp bilder</h1>
          <h3 className={styles.subTitle}>Badrum</h3>

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
          <img />
          <img />
          <img />
          <img />
          <h3 className={styles.subTitle}>Beskriv rummet</h3>
          <form>
            <textarea cols="50" rows="16" />
          </form>

          {/* // KÖK// */}
          <h1 className={styles.title}>Ladda upp bilder</h1>
          <h3 className={styles.subTitle}>Kök</h3>

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
          <img />
          <img />
          <img />
          <img />
          <h3 className={styles.subTitle}>Beskriv rummet</h3>
          <form>
            <textarea cols="50" rows="16" />
          </form>

          {/* // ÖVRIGA RUM// */}
          <h1 className={styles.title}>Ladda upp bilder</h1>
          <h3 className={styles.subTitle}>Övriga rum</h3>

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
          <img />
          <img />
          <img />
          <img />
          <h3 className={styles.subTitle}>Beskriv rummet</h3>
          <form>
            <textarea cols="50" rows="16" />
          </form>

          <img />
          <img />
          <img />
          <img />
          <h3 className={styles.subTitle}>Beskriv rummet</h3>
          <form>
            <textarea cols="50" rows="16" />
          </form>

          <div className={styles.pageNavigation}>
            <Button
              onClick={() => navigate("payment")}
              icon={ArrowLeft}
              bg="white"
              border="2px solid #3A0067"
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
