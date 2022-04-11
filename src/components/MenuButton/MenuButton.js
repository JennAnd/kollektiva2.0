import React from "react";
import PropTypes from "prop-types";
import styles from "./MenuButton.module.css";
import menuClosed from "../../assets/images/menu-closed.svg";

const MenuButton = (props) => {
  return props.open ? (
    <div>
      <button
        className={styles.MenuButton}
        onClick={() => props.setOpen(false)}
      >
        <img
          src={menuClosed}
          alt="text menu and three lines horizontal in shape of a hamburger"
        ></img>
      </button>
      {props.children}
    </div>
  ) : (
    ""
  );
};

export default MenuButton;
