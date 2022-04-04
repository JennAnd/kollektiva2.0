import React from "react";
import PropTypes from "prop-types";
import "./radioButton.css";

const RadioButton = ({ value, name }) => {
  return (
    <div className="input-box">
      <input type="radio" value={value} name={name}></input>
      <label for={value}>{value}</label>
    </div>
  );
};

RadioButton.propTypes = {
  value: PropTypes.string,
};

RadioButton.defaultProps = {
  value: "error",
};

export default RadioButton;
