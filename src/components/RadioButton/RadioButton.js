import React from "react";
import PropTypes from "prop-types";
import styles from "./RadioButton.module.css";

const RadioButton = ({ value, name, id }) => {
  return (
    <div className={styles.inputBox}>
      <input type="radio" id={id} name={name}></input>
      <label for={id}>{value}</label>
    </div>
  );
};

RadioButton.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
};

RadioButton.defaultProps = {
  value: "error",
};

export default RadioButton;