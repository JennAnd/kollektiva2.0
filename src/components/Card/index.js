import React from "react";
import PropTypes from "prop-types";
import "./card.css";
import Button from "./../Button";

const Card = ({ image, title, text, buttonText, bg }) => {
  return (
    <article className="card">
      <img src={image} alt="houseroof" />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{text}</p>
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
