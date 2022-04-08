import React from "react";
import { navigate } from "@reach/router";
import styles from "./AdvertisementPublish.module.css";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";

const AdvertisementPublishPage = (props) => {
  return (
    <div className={styles.choice}>
      <h1 className={styles.title}>Din annons har publicerats</h1>
      <h3 className={styles.subTitle}>
        Din annons är nu sökbar för andra personer
      </h3>
      <p className={styles.smallText}>
        Ha koll på din annons och se vilka som är intresserade i din bostad på
        <a href="#"> mina sidor.</a>
      </p>
      <div className={styles.viewMyPages}>
        <Button
          /* handleClick={() => navigate("/kitchen")} */
          buttonText="Mina sidor"
          bg="white"
          border="2px solid #000000"
        />
      </div>
      <form>
        <h3 className={styles.title}>Att tänka på</h3>
        <ul>
          Håll koll på om någon kontaktar dig, se dina{" "}
          <a href="#"> meddelanden</a>
        </ul>
        <textarea cols="50" rows="8" />
      </form>
      <Footer />
    </div>
  );
};

export default AdvertisementPublishPage;
