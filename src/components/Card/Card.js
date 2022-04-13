import React from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.css";
import Button from "../Button/Button";

const Card = ({ title, text, buttonText, bg }) => {
  return (
    <article className={styles.card}>
      <div className={styles.cardContent}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
        <button className={styles.btn}>{buttonText}</button>
      </div>
    </article>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  buttonText: PropTypes.string,
};
export default Card;
