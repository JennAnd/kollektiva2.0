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
      <RadioButton value="Villa"></RadioButton>
      <RadioButton value="Hus"></RadioButton>
      <RadioButton value="Radhus"></RadioButton>
      <RadioButton value="Stuga"></RadioButton>
      <RadioButton value="Parhus"></RadioButton>
      <RadioButton value="Korridorsrum"></RadioButton>
      <RadioButton value="Lägenheten"></RadioButton>
      <RadioButton value="Loftgångshus"></RadioButton>
    </div>
  );
};

export default RentalTypePage;
