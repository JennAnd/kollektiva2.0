import React from "react";
import { navigate } from "@reach/router";
import "./outside.css";
import Button from "../../components/Button";
import RadioButton from "./../../components/RadioButton";

const OutsidePage = (props) => {
  return (
    <div class="outsideChoice">
      <h1>Utomhus</h1>
      <form>
        <RadioButton id="outside" value="Balkong" name="outside"></RadioButton>
        <RadioButton id="outside" value="Trädgård" name="outside"></RadioButton>
        <RadioButton id="outside" value="Altan" name="outside"></RadioButton>
      </form>

      {/* <div class="helpButton">
        <Button buttonText="Hjälp" bg="white" border="2px solid #000000" />
      </div> */}
      <div class="pageNavigation">
        <Button
          handleClick={() => navigate("/kitchen")}
          buttonText="Tillbaka"
        />
        <Button
          handleClick={() => navigate("/description")}
          buttonText="Spara & fortsätt"
        />
      </div>
    </div>
  );
};

export default OutsidePage;
