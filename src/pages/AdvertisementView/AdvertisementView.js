import React, { useState } from "react";
import { navigate } from "@reach/router";
import styles from "./AdvertisementView.module.css";
import Button from "../../components/Button/Button";
/* import houseView from "./../../assets/images/houseView.png"; */
import ContinueClose from "../../assets/images/continue-closed.svg";
import Footer from "../../components/Footer/Footer";
import Popup from "../../components/Popup/Popup";
import Menu from "../../components/Menu/Menu";
import MenuButton from "../../components/MenuButton/MenuButton";

const AdvertisementViewPage = (props) => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonMenu, setButtonMenu] = useState(false);
  return (
    <div className={styles.choice}>
      <div className={styles.marginWrapper}>
        <div className={styles.topBar}>
          <img src={ContinueClose} alt="cross for closing"></img>
          <p className={styles.continue}>Fortsätt</p>
          <Button>Hjälp</Button>
        </div>
        <p className={styles.steps}>Steg 14 av 14</p>
        <div className={styles.blueLine}></div>
        <h1 className={styles.title}>Såhär kommer din annons se ut</h1>
        <h3 className={styles.subTitle}>Adress 123 Göteborg</h3>
        {/* <img src={image} alt="houseview" /> */}
        <h3 className={styles.subTitle}>Villa 240 kvm</h3>
        <p className={styles.text}>
          Duis orci semper cursus nulla enim. Nisi morbi odio enim morbi porta.
          Adipiscing iaculis tellus arcu proin. Eu dignissim elit massa
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
        <button onClick={() => setButtonPopup(true)}>Open popup</button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>Är du nöjd med din annons?</h3>
          <p>Det går att uppdatera delar av din annons senare på mina sidor.</p>
          <p>Kontakta oss om du behöver hjälp med din annos.</p>
          <Button>Publicera min annons nu</Button>
        </Popup>
        <MenuButton onClick={() => setButtonMenu(true)} />
        <Menu open={buttonMenu} setOpen={setButtonMenu} />
      </div>
      <h1 className={styles.title}>Såhär kommer din annons se ut</h1>
      <h3 className={styles.subTitle}>Adress 123 Göteborg</h3>
      {/* <img src={image} alt="houseview" /> */}
      <h3 className={styles.subTitle}>Villa 240 kvm</h3>
      <p className={styles.text}>
        Duis orci semper cursus nulla enim. Nisi morbi odio enim morbi porta.
        Adipiscing iaculis tellus arcu proin. Eu dignissim elit massa
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
        <h3>Är du nöjd med din annons?</h3>
        <p>Det går att uppdatera delar av din annons senare på mina sidor.</p>
        <p>Kontakta oss om du behöver hjälp med din annos.</p>
        <Button onClick={() => navigate("/advertisement-publish")}>
          Publicera min annons nu
        </Button>
      </Popup>
      <MenuButton onClick={() => setButtonMenu(true)} />
      <Menu open={buttonMenu} setOpen={setButtonMenu} />
      <Footer />
    </div>
  );
};

export default AdvertisementViewPage;
