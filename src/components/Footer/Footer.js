import React from "react";
import styles from "./Footer.module.css";
import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.svg";
import instagram from "../../assets/images/instagram.svg";
import phone from "../../assets/images/phone.svg";
import mail from "../../assets/images/mail.svg";
import logo from "../../assets/images/logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className={styles.contactUs}>
        <div className={styles.logo}>
          <img src={logo} alt="a big k in purple and white" />
        </div>
        <div className={styles.contactUsText}>
          <h3 className={styles.subheading}>Kontakta oss</h3>
          <p className={styles.textContactUs}>
            Kontakta oss vid behov av hjälp med registering, annonsering och
            övrigt
          </p>
        </div>
        <div className={styles.contactLinks}>
          <div className={styles.link}>
            <img src={phone} alt="phone icon" />
            <a className={styles.contacts} href="tel:010-70 75 100">
              010-70 75 100
            </a>
          </div>

          <div className={styles.link}>
            <img src={mail} alt="mail icon" />
            <a className={styles.contacts} href="mailto:webmaster@example.com">
              support@kollektiva.se
            </a>
          </div>
        </div>
      </div>
      <div className={styles.linkPage}>
        <div className={styles.rentOut}>
          <h3 className={styles.subheadingFirst}>Hyr ut bostad</h3>
          <a href="/" className={styles.textInfo}>
            Frågor och svar
          </a>
          <a href="/" className={styles.textInfo}>
            Berättelser
          </a>
          <a href="/" className={styles.textInfo}>
            Hur det fungerar
          </a>
        </div>
        <div className={styles.rent}>
          <h3 className={styles.subheading}>Hyra bostad</h3>
          <a href="/" className={styles.textInfo}>
            Frågor och svar{" "}
          </a>
          <a href="/" className={styles.textInfo}>
            Annonser
          </a>
        </div>
        <div className={styles.aboutUs}>
          <h3 className={styles.subheading}>Kollektiva</h3>
          <a href="/" className={styles.textInfo}>
            Om oss
          </a>
          <a href="/" className={styles.textInfo}>
            Allmänna villkor{" "}
          </a>
        </div>
        <div className={styles.support}>
          <h3 className={styles.subheading}>Stöd</h3>
          <a href="/" className={styles.textInfo}>
            Hjälp och guide
          </a>
          <a href="/" className={styles.textInfo}>
            Tillgänglighet
          </a>
          <a href="/" className={styles.textInfo}>
            Säkerhetsinformation
          </a>
        </div>
      </div>
      <div className={styles.socialMedia}>
        <div className={styles.socialMediaText}>
          <h3 className={styles.subheadingFirst}>Sociala medier</h3>
          <p className={styles.text}>
            Följ oss för nyheter och uppdateringar om Kollektiva.
          </p>
        </div>
        <div className={styles.socialMediaLinks}>
          <div className={styles.link}>
            <img src={facebook} alt="facebook icon" />
            <a href="/" className={styles.textInfo}>
              Facebook
            </a>
          </div>
          <div className={styles.link}>
            <img src={twitter} alt="twitter icon" />
            <a href="/" className={styles.textInfo}>
              Twitter
            </a>
          </div>
          <div className={styles.link}>
            <img src={instagram} alt="instagram icon" />
            <a href="/" className={styles.textInfo}>
              Instagram
            </a>
          </div>
        </div>
      </div>
      <p className={styles.copyright}>Copyright 2022 © Kollektiva</p>
    </footer>
  );
};

export default Footer;
