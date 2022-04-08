import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Menu.module.css";
import menuClosed from "../../assets/images/menu-closed.svg";
import addHome from "../../assets/images/add-home.svg";
import myPage from "../../assets/images/my-page.svg";
import searchHome from "../../assets/images/search-home.svg";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const ToggleButton = () => {
    setOpen(!open);
  };
  return (
    <div>
      <nav className={styles.menu}>
        {open ? (
          <ul className={styles.ul}>
            <li className={styles.list}>
              <img src={myPage} alt="icon of a person" />
              <a href="/">Mina sidor</a>
            </li>
            <li className={styles.list}>
              <img
                src={addHome}
                alt="icon of a house and a plus in the lower right corner"
              />
              <a href="/">Hyr ut din bostad</a>
            </li>
            <li className={styles.list}>
              <img
                src={searchHome}
                alt="icon of a house and a magnifying glass in the lower right corner"
              />
              <a href="/">Hitta en bostad</a>
            </li>
          </ul>
        ) : null}
        <button onClick={ToggleButton}>
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
