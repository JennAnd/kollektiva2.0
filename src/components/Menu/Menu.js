import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Menu.module.css";
import menuClosed from "../../assets/images/menu-closed.svg";

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.menu}>
      <nav>
        {open ? (
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
        ) : null}
        <button onClick={() => setOpen(!open)}>
          <img
            src={menuClosed}
            alt="text menu and three lines horizontal in shape of a hamburger"
          ></img>
        </button>
      </nav>
    </div>
  );
};

Menu.propTypes = {
  handleClick: PropTypes.func,
};

export default Menu;
