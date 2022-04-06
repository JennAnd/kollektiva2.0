import React from "react";
import { navigate } from "@reach/router";
import styles from "./AdvertisementView.module.css";
import Button from "../../components/Button/Button";
/* import houseView from "./../../assets/images/houseView.png"; */

const AdvertisementViewPage = (props) => {
  return (
    <div className={styles.choice}>
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
    </div>
  );
};

export default AdvertisementViewPage;
