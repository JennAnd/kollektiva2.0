import React from "react";
import { navigate } from "@reach/router";
import "./factsAndFacilities.css";
import Button from "../../components/Button";
import RadioButton from "./../../components/RadioButton";

const FactsAndFacilitiesPage = (props) => {
  return (
    <div class="factsAndFacilitiesChoice">
      <h1>Fakta och faciliteter</h1>
      <p>
        Specificera hur ditt boende ser ut. Fyll endast i det som finns
        tillgänligt för hyresgästen.
      </p>
      <h2>Bekvämligheter</h2>
      <form>
        <RadioButton
          id="factsAndFacilities"
          value="Husdjur tillåtet"
          name="factsAndFacilities"
        ></RadioButton>
        <RadioButton
          id="factsAndFacilities"
          value="Hiss"
          name="factsAndFacilities"
        ></RadioButton>
        <RadioButton
          id="factsAndFacilities"
          value="Parkering"
          name="factsAndFacilities"
        ></RadioButton>
        <RadioButton
          id="factsAndFacilities"
          value="Garage"
          name="factsAndFacilities"
        ></RadioButton>
        <RadioButton
          id="factsAndFacilities"
          value="Lämpligt för seniorer"
          name="factsAndFacilities"
        ></RadioButton>
      </form>

      {/* <div class="helpButton">
        <Button buttonText="Hjälp" bg="white" border="2px solid #000000" />
      </div> */}
      <div class="pageNavigation">
        <Button
          handleClick={() => navigate("/upload-photos")}
          buttonText="Tillbaka"
        />
        <Button
          handleClick={() => navigate("/bathroom")}
          buttonText="Spara & fortsätt"
        />
      </div>
    </div>
  );
};

export default FactsAndFacilitiesPage;
