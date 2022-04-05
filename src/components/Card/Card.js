import React from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.css";
import Button from "../Button/Button";

const Card = ({ image, title, text, buttonText, bg }) => {
  return (
    <article className={styles.card}>
      <img src={image} alt="houseroof" />
      <div className={styles.cardContent}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
        <Button buttonText="Läs mer om att hyra ut din bostad" bg="white" />
      </div>
    </article>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  buttonText: PropTypes.string,
  bg: PropTypes.string,
};
export default Card;
