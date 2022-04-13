import React from "react";
import styles from "./MenuDesktop.module.css";
import addHome from "../../assets/images/add-home.svg";
import myPage from "../../assets/images/my-page.svg";
import searchHome from "../../assets/images/search-home.svg";

const MenuDesktop = (props) => {
  return (
    <div>
      <nav className={styles.menu}>
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
      </nav>
    </div>
  );
};

export default MenuDesktop;
