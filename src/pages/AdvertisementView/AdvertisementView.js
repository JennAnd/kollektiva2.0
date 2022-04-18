import React, { useState } from "react";
import { navigate } from "@reach/router";
import styles from "./AdvertisementView.module.css";
import Button from "../../components/Button/Button";
/* import houseView from "./../../assets/images/houseView.png"; */
import ContinueClose from "../../assets/images/continue-closed.svg";
import SupportButton from "../../components/SupportButton/SupportButton";
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
          <div className={styles.leftContainer}>
            <img src={ContinueClose} alt="cross for closing"></img>
            <p className={styles.continue}>Fortsätt senare</p>
          </div>
          <div className={styles.rightContainer}>
            <SupportButton />
          </div>
        </div>
        <p className={styles.steps}>Steg 15 av 15</p>
        <div className={styles.line}></div>
        <div className={styles.section}>
          <h1 className={styles.title}>Kontrollera din annons</h1>
          <p className={styles.text}>
            Titta över din annons och se till att alla uppgifter stämmer innan
            du publicerar den.
          </p>
          <p className={styles.publishDate}>Publicerad 7 april</p>
          <h2 className={styles.subTitle}>Ljust rum i fin stuga vid skogen</h2>
          <img />
          <h3 className={styles.addressText}>Hövägen</h3>
          <p className={styles.addressSmallText}>Älvängen</p>
          <p className={styles.smallText}>Om boendet</p>
          <p className={styles.smallerText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum.
          </p>
          <p className={styles.smallerTextPartTwo}>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos, ac not aliquet odio mattis.
          </p>
          <div className={styles.facilitiesWrapper}>
            <p className={styles.subTitle}>Tidsperiod</p>
            <p className={styles.smallText}>6 månader</p>
            <p className={styles.smallText}>18-05-2022 - 18-11-2022</p>
            <p className={styles.subTitle}>Rum</p>
            <p className={styles.smallText}>1</p>
            <p className={styles.subTitle}>Hyresgäst antal</p>
            <p className={styles.smallText}>1</p>
            <p className={styles.subTitle}>Hyra</p>
            <p className={styles.smallText}>4 540 kr/månaden</p>
            <p className={styles.subTitle}>Egen yta (rum)</p>
            <p className={styles.smallText}>16 m&sup2;</p>
            <p className={styles.subTitle}>Bostadstyp</p>
            <p className={styles.smallText}>Hus</p>
            <p className={styles.subTitle}>Boendeform</p>
            <p className={styles.smallText}>Villa eller äganderätt</p>
            <p className={styles.subTitle}>Fakta och facilitet</p>
            <p className={styles.smallText}>Tillgängligt Wifi</p>
            <p className={styles.smallText}>Rullstolsanpassad</p>
            <p className={styles.smallText}>Husdjur tillåtet</p>
            <p className={styles.smallText}>Garage</p>
            <p className={styles.subTitle}>Tillgängligt i badrum</p>
            <p className={styles.smallText}>Dusch</p>
            <p className={styles.smallText}>Torktumlare</p>
            <p className={styles.smallText}>Tvättmaskin</p>
            <p className={styles.smallText}>Toalett</p>
            <p className={styles.subTitle}>Tillgängligt i kök</p>
            <p className={styles.smallText}>Mikrovågsugn</p>
            <p className={styles.smallText}>Vattenkokare</p>
            <p className={styles.smallText}>Frys</p>
            <p className={styles.smallText}>Ugn och spis</p>
            <p className={styles.smallText}>Kyl</p>
            <p className={styles.smallText}>Kaffebryggare</p>
            <p className={styles.subTitle}>Tillgängligt utomhus</p>
            <p className={styles.smallText}>Balkong</p>
          </div>
          <p className={styles.finishingText}>
            Ta det första steget till att göra det här stället till ditt
            temporära hem.
          </p>
          {/* <button></button> */}

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
              border="4px solid #3A0067"
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
