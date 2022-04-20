import React, { useState } from "react";
import { navigate } from "@reach/router";
import styles from "./FindFriends.module.css";
import MediumLogo from "./../../assets/images/medium-logo.svg";
import Language from "./../../assets/images/language.svg";
import Button from "../../components/Button/Button";
import ManImage from "./../../assets/images/man.webp";
import StepOne from "./../../assets/images/step1.svg";
import StepTwo from "./../../assets/images/step2.svg";
import StepThree from "./../../assets/images/step3.svg";
import Line from "./../../assets/images/line.svg";
import Star from "./../../assets/images/star.svg";
import WomanImage from "./../../assets/images/woman.webp";
import SmallCheckmark from "./../../assets/images/small-checkmark.svg";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import MenuButton from "../../components/MenuButton/MenuButton";
import MenuDesktop from "../../components/MenuDesktop/MenuDesktop";

const FindFriendsPage = (props) => {
  const [buttonMenu, setButtonMenu] = useState(false);
  return (
    <div className={styles.choice}>
      <MenuDesktop />
      <div className={styles.topBar}>
        <div className={styles.leftContainer}>
          <img src={MediumLogo} alt="logotype for Kollektiva"></img>
        </div>
        <div className={styles.rightContainer}>
          <p className={styles.chooseLanguage}>Välj språk</p>
          <img src={Language} alt="round swedish flag"></img>
        </div>
      </div>
      <div className={styles.marginWrapper}>
        <div className={styles.section}>
          <h1 className={styles.title}>Dela med dig av ditt hem</h1>

          <p className={styles.text}>
            Utöka ditt sociala liv och dra nytta av din bostad genom att hyra ut
            en del av den.
          </p>
          <div className={styles.createAdvertisementButton}>
            <Button
              buttonText="Skapa en annons"
              bg="#6B51EF"
              color="white"
              width="396px"
              height="60px"
              jc="center"
            />
          </div>
          <img
            className={styles.image}
            src={ManImage}
            alt="image of a man"
          ></img>
          <div className={styles.howTo}>
            <h4 className={styles.howToHeader}>Hur går det till?</h4>
            <div className={styles.howToWrapper}>
              <div className={styles.howToPartWrapper}>
                <img src={StepOne} alt="step one svg"></img>
                <p className={styles.subTitle}>Registrera dig</p>
                <p className={styles.smallText}>
                  Skapa en profil och verifiera dig, tryggt och säkert.
                </p>
                <img className={styles.line} src={Line} alt="line"></img>
              </div>

              <div className={styles.howToPartWrapper}>
                <img src={StepTwo} alt="step two svg"></img>
                <p className={styles.subTitle}>Skapa en annons</p>
                <p className={styles.smallText}>
                  Det tar bara 10 minuter och vår kundtjänst finns alltid till
                  hjälp.
                </p>
                <img className={styles.line} src={Line} alt="line"></img>
              </div>

              <div className={styles.howToPartWrapper}>
                <img src={StepThree} alt="step three svg"></img>
                <p className={styles.subTitle}>Hitta en hyresgäst</p>
                <p className={styles.smallText}>
                  Välj själv bland flera seriösa sökande. Kollektiva ser till
                  att alla känner sig bekväma.
                </p>
                <img className={styles.line} src={Line} alt="line"></img>
              </div>

              <div className={styles.howToPartWrapper}>
                <img src={Star} alt="yellow star"></img>
                <p className={styles.subTitle}>Börja leva ihop</p>
                <p className={styles.smallText}>
                  Upptäck nya saker genom att dela boenden med någon ny!
                </p>
              </div>
            </div>
          </div>
          <img
            className={styles.imageWoman}
            src={WomanImage}
            alt="image of a woman"
          ></img>
          <h2 className={styles.processHeader}>
            Vi hjälper dig genom hela processen
          </h2>
          <div className={styles.checkWrapper}>
            <div className={styles.checkPartWrapper}>
              <img
                className={styles.smallCheckmark}
                src={SmallCheckmark}
                alt="small round checkmark"
              ></img>
              <p className={styles.checkmarkText}>Skapa annons</p>
            </div>
            <div className={styles.checkPartWrapper}>
              <img
                className={styles.smallCheckmark}
                src={SmallCheckmark}
                alt="small round checkmark"
              ></img>
              <p className={styles.checkmarkText}>Ta kontakt med hyresgäster</p>
            </div>
            <div className={styles.checkPartWrapper}>
              <img
                className={styles.smallCheckmark}
                src={SmallCheckmark}
                alt="small round checkmark"
              ></img>
              <p className={styles.checkmarkText}>Skriva på kontrakt</p>
            </div>
          </div>
          <div className={styles.contactInfoButton}>
            <Button
              buttonText="Läs mer om hur du kontaktar oss"
              bg="#6B51EF"
              color="white"
              width="320px"
              height="60px"
              jc="center"
              fontSize="18px"
              padding="1px"
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

export default FindFriendsPage;
