import React from "react";
import { navigate } from "@reach/router";
import "./description.css";
import Button from "../../components/Button";

const DescriptionPage = (props) => {
  return (
    <div class="descriptionChoice">
      <h1>Ge en beskrivning</h1>
      <p>Ge en generell beskrivning av bostaden och dess område.</p>
      <form>
        <textarea cols="50" rows="20" />
      </form>

      {/*  <div class="helpButton">
        <Button buttonText="Hjälp" bg="white" border="2px solid #000000" />
      </div> */}
      <div class="pageNavigation">
        <Button
          handleClick={() => navigate("/outside")}
          buttonText="Tillbaka"
        />
        <Button
          handleClick={() => navigate("/advertisement-view")}
          buttonText="Spara & fortsätt"
        />
      </div>
    </div>
  );
};

export default DescriptionPage;
