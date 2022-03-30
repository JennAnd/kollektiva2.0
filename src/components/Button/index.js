import React from "react";
import PropTypes from "prop-types";
import "./button.css";

const Button = (props) => {
  return (
    <button
      onClick={props.handleClick}
      className="btn"
      style={{
        backgroundColor: props.bg,
        border: props.border,
        color: props.color,
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
  /* width:PropTypes.string, */
};

Button.defaultProps = {
  buttonText: "error",
};

export default Button;
