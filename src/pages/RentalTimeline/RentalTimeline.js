import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { navigate } from "@reach/router";
import styles from "./RentalTimeline.module.css";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import "react-datepicker/dist/react-datepicker.css";

const RentalTimelinePage = () => {
  const [startDate, setStartDate] = useState(new Date("2022/01/01"));
  const [endDate, setEndDate] = useState(new Date("2022/01/02"));

  return (
    <div className={styles.choice}>
      <h1 className={styles.title}>Tidsperiod</h1>
      <p className={styles.text}>Välj hur länge du vill hyra ut din bostad.</p>
      <div className={styles.datePickerContainerStart}>
        <label for="startDate" className={styles.textDatePicker}>
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
        <label for="endDate" className={styles.textDatePicker}>
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
      <div className={styles.pageNavigation}>
        <Button
          handleClick={() => navigate("/number-of-people")}
          buttonText="Tillbaka"
        />
        <Button
          handleClick={() => navigate("/payment")}
          buttonText="Spara & fortsätt"
        />
      </div>
      <Footer />
    </div>
  );
};

export default RentalTimelinePage;
