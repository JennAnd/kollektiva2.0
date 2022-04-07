import React from "react";
import styles from "./Footer.module.css";
import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.svg";
import instagram from "../../assets/images/instagram.svg";
import phone from "../../assets/images/phone.svg";
import mail from "../../assets/images/mail.svg";

const Footer = () => {
  return (
    <footer>
      <div className={styles.contactUs}>
        <h3 className={styles.subheading}>Kontakta oss</h3>
        <p className={styles.text}>
          Kontakta oss vid behov av hjälp med registering, annonsering och
          övrigt
        </p>
        <div className={styles.link}>
          <img src={phone} alt="phone icon" />
          <a className={styles.text} href="tel:010-70 75 100">
            010-70 75 100
          </a>
        </div>

        <div className={styles.link}>
          <img src={mail} alt="mail icon" />
          <a className={styles.text} href="mailto:webmaster@example.com">
            support@kollektiva.se
          </a>
        </div>
      </div>
      <div className={styles.linkPage}>
        <h3 className={styles.subheading}>Hyr ut bostad</h3>
        <a href="/" className={styles.text}>
          Frågor och svar
        </a>
        <a href="/" className={styles.text}>
          Berättelser
        </a>
        <a href="/" className={styles.text}>
          Hur det fungerar
        </a>
        <h3 className={styles.subheading}>Hyra bostad</h3>
        <a href="/" className={styles.text}>
          Frågor och svar{" "}
        </a>
        <a href="/" className={styles.text}>
          Annonser
        </a>
        <h3 className={styles.subheading}>Kollektiva</h3>
        <a href="/" className={styles.text}>
          Om oss
        </a>
        <a href="/" className={styles.text}>
          Allmänna villkor{" "}
        </a>
        <h3 className={styles.subheading}>Stöd</h3>
        <a href="/" className={styles.text}>
          Hjälp och guide
        </a>
        <a href="/" className={styles.text}>
          Säkerhetsinformation
        </a>
        <a href="/" className={styles.text}>
          Hjälp och guide{" "}
        </a>
      </div>
      <div className={styles.socialMedia}>
        <h3 className={styles.subheading}>Sociala medier</h3>
        <p className={styles.text}>
          Följ oss för nyheter och uppdateringar om Kollektiva.
        </p>
        <div className={styles.link}>
          <img src={facebook} alt="facebook icon" />
          <a href="/" className={styles.text}>
            Facebook
          </a>
        </div>
        <div className={styles.link}>
          <img src={twitter} alt="twitter icon" />
          <a href="/" className={styles.text}>
            Twitter
          </a>
        </div>
        <div className={styles.link}>
          <img src={instagram} alt="instagram icon" />
          <a href="/" className={styles.text}>
            Instagram
          </a>
        </div>
      </div>
      <p className={styles.copyright}>Copyright 2022 © Kollektiva</p>
    </footer>
  );
};

export default Footer;
