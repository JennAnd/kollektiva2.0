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
  fontSize,
  padding,
  height,
  width,
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
        fontSize: fontSize,
        padding: padding,
        height,
        width,
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
  icon: PropTypes.string,
  fontSize: PropTypes.string,
  padding: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

export default Button;
