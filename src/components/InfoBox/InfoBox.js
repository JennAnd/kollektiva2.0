import React from "react";
import PropTypes from "prop-types";
import styles from "./InfoBox.module.css";
import LightSymbol from "../../assets/images/light-symbol.svg";

const InfoBox = ({ height, text, bg, gap, paddingRight }) => {
  return (
    <div
      className={styles.infoBox}
      style={{
        height: height,
        gap: gap,
      }}
    >
      <img
        className={styles.lightSymbol}
        src={LightSymbol}
        alt="symbol of light"
      ></img>
      <p
        className={styles.infoText}
        style={{
          paddingRight: paddingRight,
        }}
      >
        {text}
      </p>
    </div>
  );
};

InfoBox.propTypes = {
  text: PropTypes.string,
  height: PropTypes.string,
  gap: PropTypes.string,
  paddingRight: PropTypes.string,
};
export default InfoBox;
