import React from "react";
import { navigate } from "@reach/router";
import styles from "./UploadPhotos.module.css";
import Button from "../../components/Button/Button";

const UploadPhotosPage = (props) => {
  return (
    <div className={styles.choice}>
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

      {/* // KÖK// */}
      <h1 className={styles.title}>Ladda upp bilder</h1>
      <h3 className={styles.subTitle}>Kök</h3>

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

      {/* // ÖVRIGA RUM// */}
      <h1 className={styles.title}>Ladda upp bilder</h1>
      <h3 className={styles.subTitle}>Övriga rum</h3>

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
    </div>
  );
};

export default UploadPhotosPage;
