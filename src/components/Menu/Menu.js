import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Menu.module.css";
import menuClosed from "../../assets/images/menu-closed.svg";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <a href="/">Mina sidor</a>
        </li>
        <li>
          <a href="/">Hyr ut din bostad</a>
        </li>
        <li>
          <a href="/">Hitta en bostad</a>
        </li>
      </ul>
      <button>
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
