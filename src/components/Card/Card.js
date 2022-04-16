import React from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.css";
import Button from "../Button/Button";

const Card = ({ title, text, buttonText, onClick }) => {
  return (
    <article className={styles.card}>
      <div className={styles.cardContent}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
        <button className={styles.btn} onClick={onClick}>
          {buttonText}
        </button>
      </div>
    </article>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  buttonText: PropTypes.string,
  onClick: PropTypes.func,
};
export default Card;
