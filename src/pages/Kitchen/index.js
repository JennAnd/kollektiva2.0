import React from "react";
import { navigate } from "@reach/router";
import "./kitchen.css";
import Button from "../../components/Button";
import RadioButton from "./../../components/RadioButton";

const KitchenPage = (props) => {
  return (
    <div class="kitchenChoice">
      <h1>Kök</h1>
      <form>
        <RadioButton
          id="kitchen"
          value="Diskmaskin"
          name="kitchen"
        ></RadioButton>
        <RadioButton id="kitchen" value="Kyl" name="kitchen"></RadioButton>
        <RadioButton id="kitchen" value="Frys" name="kitchen"></RadioButton>
        <RadioButton id="kitchen" value="Ugn/Spis" name="kitchen"></RadioButton>
        <RadioButton
          id="kitchen"
          value="Köksfläkt"
          name="kitchen"
        ></RadioButton>
        <RadioButton
          id="kitchen"
          value="Microvågsugn"
          name="kitchen"
        ></RadioButton>
        <RadioButton
          id="kitchen"
          value="Kaffebryggare"
          name="kitchen"
        ></RadioButton>
        <RadioButton
          id="kitchen"
          value="Vattenkokare"
          name="kitchen"
        ></RadioButton>
      </form>

      {/* <div class="helpButton">
        <Button buttonText="Hjälp" bg="white" border="2px solid #000000" />
      </div> */}
      <div class="pageNavigation">
        <Button
          handleClick={() => navigate("/bathroom")}
          buttonText="Tillbaka"
        />
        <Button
          handleClick={() => navigate("/outside")}
          buttonText="Spara & fortsätt"
        />
      </div>
    </div>
  );
};

export default KitchenPage;
