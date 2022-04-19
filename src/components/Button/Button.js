import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({
  onClick,
  bg,
  border,
  color,
  icon,
  altText,
  buttonText,
  flexDirection,
  width,
  jc
}) => {
  return (
    <button
      className={styles.btn}
      onClick={onClick}
      style={{
        backgroundColor: bg,
        border: border,
        color: color,
        flexDirection: flexDirection,
        width: width,
        justifyContent:jc,
      }}
    >
      <img src={icon} alt={altText} />
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string,
  bg: PropTypes.string,
  onClick: PropTypes.func,
  border: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.string,
  jc:PropTypes.string,
  icon: PropTypes.string,
};

export default Button;
