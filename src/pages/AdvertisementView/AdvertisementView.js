import React, { useState } from "react";
import { navigate } from "@reach/router";
import styles from "./AdvertisementView.module.css";
import Button from "../../components/Button/Button";
/* import houseView from "./../../assets/images/houseView.png"; */
import ContinueClose from "../../assets/images/continue-closed.svg";
import ArrowLeft from "../../assets/images/arrow-left.svg";
import ArrowRight from "../../assets/images/arrow-right.svg";
import Footer from "../../components/Footer/Footer";
import Popup from "../../components/Popup/Popup";
import Menu from "../../components/Menu/Menu";
import MenuButton from "../../components/MenuButton/MenuButton";
import MenuDesktop from "../../components/MenuDesktop/MenuDesktop";

const AdvertisementViewPage = (props) => {
  const [buttonPopup, setButtonPopup] = useState(false);
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
        <p className={styles.steps}>Steg 14 av 14</p>
        <div className={styles.blueLine}></div>
        <div className={styles.section}>
          <h1 className={styles.title}>Såhär kommer din annons se ut</h1>
          <h3 className={styles.subTitle}>Adress 123 Göteborg</h3>
          {/* <img src={image} alt="houseview" /> */}
          <h3 className={styles.subTitle}>Villa 240 kvm</h3>
          <p className={styles.text}>
            Duis orci semper cursus nulla enim. Nisi morbi odio enim morbi
            porta. Adipiscing iaculis tellus arcu proin. Eu dignissim elit massa
            pellentesque a ornare luctus quam at.
          </p>
          {/* </div> */}
          {/* <div className={styles.wrapper}> */}
          <h3 className={styles.subTitle}>Bekvämligheter</h3>
          <p className={styles.smallText}>Hursdjur tillåtet</p>
          <p className={styles.smallText}>Parkering</p>
          <h3 className={styles.subTitle}>Badrum</h3>
          <p className={styles.smallText}>Toalettarmstöd</p>
          <p className={styles.smallText}>Duschbänk</p>
          <p className={styles.smallText}>Tvättmaskin</p>
          <h3 className={styles.subTitle}>Kök</h3>
          <p className={styles.smallText}>Diskmaskin</p>
          <p className={styles.smallText}>Microvågsugn</p>
          <p className={styles.smallText}>Kaffebryggare</p>
          <h3 className={styles.subTitle}>Utomhus</h3>
          <p className={styles.smallText}>Diskmaskin</p>
          <p className={styles.smallText}>Microvågsugn</p>
          <Button onClick={() => setButtonPopup(true)}>Open popup</Button>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h3>Är du redo att publicera din annons?</h3>
            <p>Det går att uppdatera din annons senare via mina sidor.</p>
            <p>
              Tveka inte att kontakta oss om du behöver hjälp med din annons.
            </p>
            <div className={styles.containerBtn}>
              <button
                className={styles.btn}
                onClick={() => navigate("/advertisement-publish")}
              >
                Publicera min annons nu
              </button>
            </div>
          </Popup>
          <div className={styles.pageNavigation}>
            <Button
              onClick={() => navigate("/description")}
              icon={ArrowLeft}
              bg="white"
              border="2px solid #3A0067"
              color="#3A0067"
              buttonText="Tillbaka"
              flexDirection="row"
            ></Button>
            <Button
              onClick={() => setButtonPopup(true)}
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

export default AdvertisementViewPage;
