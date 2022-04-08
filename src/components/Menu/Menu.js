import React from "react";
import PropTypes from "prop-types";
import styles from "./Menu.module.css";
import menuClosed from "../../assets/images/menu-closed.svg";

const Menu = ({ handleClick }) => {
  return (
    <div className={styles.menu}>
      <button className={styles.menuClosed} onClick={handleClick}>
        <img
          src={menuClosed}
          alt="text menu and three lines horizontal in shape of a hamburger"
        ></img>
      </button>
    </div>
  );
};

Menu.propTypes = {
  handleClick: PropTypes.func,
};

export default Menu;
