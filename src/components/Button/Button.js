import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ handleClick, children }) => {
  return (
    <button onClick={handleClick} className={styles.btn}>
      {children}
    </button>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func,
};

export default Button;
