import React from "react";
import PropTypes from "prop-types";
import styles from "./MenuButton.module.css";
import menuClosed from "../../assets/images/menu-closed.svg";

const MenuButton = (props) => {
  return (
    <button className={styles.MenuButton} onClick={props.onClick}>
      <img
        src={menuClosed}
        alt="text menu and three lines horizontal in shape of a hamburger"
      />
    </button>
  );
};

export default MenuButton;
