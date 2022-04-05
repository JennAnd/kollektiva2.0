import React from "react";
import { Router } from "@reach/router";

//page components

import HomePage from "./pages/Home";
import RentalAddressPage from "./pages/RentalAddress";
import RentalSizePage from "./pages/RentalSize";
import RentalTypePage from "./pages/RentalType";
import FormOfHousingPage from "./pages/FormOfHousing";
import FactsAndFacilitiesPage from "./pages/FactsAndFacilities";
import BathroomPage from "./pages/Bathroom";
import KitchenPage from "./pages/Kitchen";
import OutsidePage from "./pages/Outside";
import DescriptionPage from "./pages/Description";
import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <HomePage path="/" />
        <FindFriendsPage path="/find-friends" />
        <RentalTypePage path="/rental-type" />
        <FormOfHousingPage path="/form-of-housing" />
        <FactsAndFacilitiesPage path="/facts-and-facilities" />
        <BathroomPage path="/bathroom" />
        <KitchenPage path="/kitchen" />
        <OutsidePage path="/outside" />
        <DescriptionPage path="/description" />
      </Router>
    </div>
  );
};

export default App;
