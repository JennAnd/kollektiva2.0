import React from "react";
import styles from "./Button.module.css";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button
      onClick={props.handleClick}
      className={styles.btn}
      style={{
        backgroundColor: props.bg,
        border: props.border,
        color: props.color,
        icon: props.icon,

        /* width: props.width, */
      }}
    >
      {props.buttonText}
    </button>
  );
};

/* const btnHelp = (props) => <Button {...props} />; */

Button.propTypes = {
  buttonText: PropTypes.string,
  bg: PropTypes.string,
  handleClick: PropTypes.func,
  border: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string,
  /* width:PropTypes.string, */
};

Button.defaultProps = {
  buttonText: "error",
};

export default Button;
