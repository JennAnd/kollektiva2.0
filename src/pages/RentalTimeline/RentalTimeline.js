import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { navigate } from "@reach/router";
import styles from "./RentalTimeline.module.css";
import Button from "../../components/Button/Button";
import ContinueClose from "../../assets/images/continue-closed.svg";
import SupportButton from "../../components/SupportButton/SupportButton";
import InfoBox from "../../components/InfoBox/InfoBox";
import ArrowLeft from "../../assets/images/arrow-left.svg";
import ArrowRight from "../../assets/images/arrow-right.svg";
import Footer from "../../components/Footer/Footer";
import "react-datepicker/dist/react-datepicker.css";
import Menu from "../../components/Menu/Menu";
import MenuButton from "../../components/MenuButton/MenuButton";
import MenuDesktop from "../../components/MenuDesktop/MenuDesktop";

const RentalTimelinePage = () => {
  const [startDate, setStartDate] = useState(new Date("2022/01/01"));
  const [endDate, setEndDate] = useState(new Date("2022/01/02"));
  const [buttonMenu, setButtonMenu] = useState(false);

  return (
    <div className={styles.choice}>
      <MenuDesktop />
      <div className={styles.marginWrapper}>
        <div className={styles.topBar}>
          <div className={styles.leftContainer}>
            <img src={ContinueClose} alt="cross for closing"></img>
            <p className={styles.continue}>Fortsätt senare</p>
          </div>
          <div className={styles.rightContainer}>
            <SupportButton />
          </div>
        </div>
        <p className={styles.steps}>Steg 6 av 15</p>
        <div className={styles.line}></div>
        <div className={styles.section}>
          <h1 className={styles.title}>Tidsperiod</h1>
          <p className={styles.text}>
            Välj hur länge du vill hyra ut din bostad.
          </p>
          <div className={styles.datePickerContainer}>
            <div className={styles.datePickerContainerStart}>
              <label htmlFor="startDate" className={styles.textDatePicker}>
                Från:
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
              />
            </div>
            <div className={styles.datePickerContainerEnd}>
              <label htmlFor="endDate" className={styles.textDatePicker}>
                Till:
              </label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
              />
            </div>
          </div>
          <div className={styles.infoBox}>
            <InfoBox
              text="Vi rekommenderar att du hyr ut bostaden från första dagen i varje månad för att du ska kunna ta betalt månadsvis. Dina chanser för uthyrning ökar om du hyr ut din bostad minst 3 månader."
              height="124px"
              gap="16px"
              paddingRight="30px"
            ></InfoBox>
          </div>
          <div className={styles.pageNavigation}>
            <Button
              onClick={() => navigate("/number-of-people")}
              icon={ArrowLeft}
              altText={"arrow left"}
              bg="white"
              border="4px solid #3A0067"
              color="#3A0067"
              buttonText="Tillbaka"
              flexDirection="row"
            ></Button>
            <Button
              onClick={() => navigate("/notice-period")}
              buttonText="Fortsätt"
              icon={ArrowRight}
              altText={"arrow right"}
              flexDirection="row-reverse"
            ></Button>
          </div>
        </div>
      </div>
      <MenuButton onClick={() => setButtonMenu(true)} />
      <Menu open={buttonMenu} setOpen={setButtonMenu} />
      <Footer />
    </div>
  );
};

export default RentalTimelinePage;
