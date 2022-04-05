import React from "react";
import { Router } from "@reach/router";

//page components

import HomePage from "./pages/Home/Home";
import FindFriendsPage from "./pages/FindFriends/FindFriends";
import RentalAddressPage from "./pages/RentalAddress/RentalAddress";
import RentalSizePage from "./pages/RentalSize/RentalSize";
import RentalTypePage from "./pages/RentalType/RentalType";
import FormOfHousingPage from "./pages/FormOfHousing/FormOfHousing";
import FactsAndFacilitiesPage from "./pages/FactsAndFacilities/FactsAndFacilities";
import BathroomPage from "./pages/Bathroom/Bathroom";
import KitchenPage from "./pages/Kitchen/Kitchen";
import OutsidePage from "./pages/Outside/Outside";
import DescriptionPage from "./pages/Description/Description";
import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <HomePage path="/" />
        <FindFriendsPage path="/find-friends" />
        <RentalAddressPage path="/rental-address" />
        <RentalSizePage path="/rental-size" />
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
