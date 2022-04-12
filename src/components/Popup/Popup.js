import React from "react";
import styles from "./Popup.module.css";
import popupClosed from "../../assets/images/close-btn.svg";

function Popup(props) {
  return props.trigger ? (
    <div className={styles.popup}>
      <div className={styles.popupInner}>
        <button
          className={styles.closeBtn}
          onClick={() => props.setTrigger(false)}
        >
          <img
            src={popupClosed}
            alt="an x to press to colse the popup window"
          />
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
