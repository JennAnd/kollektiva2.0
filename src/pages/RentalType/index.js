import React from "react";
import "./rentalType.css";
/* import Button from "../../components/Button"; */
import RadioButton from "./../../components/RadioButton";

const RentalTypePage = (props) => {
  return (
    <div class="rentalTypeChoice">
      <h1>Typ av bostad</h1>
      <p>
        Välj vilket typ av bostad du vill hyra ut. Du kan endast annonsera ett
        boende i taget.
      </p>
      <form>
        <RadioButton value="Villa" name="rentalType"></RadioButton>
        <RadioButton value="Hus" name="rentalType"></RadioButton>
        <RadioButton value="Radhus" name="rentalType"></RadioButton>
        <RadioButton value="Stuga" name="rentalType"></RadioButton>
        <RadioButton value="Parhus" name="rentalType"></RadioButton>
        <RadioButton value="Korridorsrum" name="rentalType"></RadioButton>
        <RadioButton value="Lägenheten" name="rentalType"></RadioButton>
        <RadioButton value="Loftgångshus" name="rentalType"></RadioButton>
      </form>
    </div>
  );
};

export default RentalTypePage;
