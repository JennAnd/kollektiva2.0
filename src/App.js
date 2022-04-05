import React from "react";
import { Router } from "@reach/router";

//page components

import HomePage from "./pages/Home/Home";
import FindFriendsPage from "./pages/FindFriends/FindFriends";
import RentalTypePage from "./pages/RentalType/RentalType";
import FormOfHousingPage from "./pages/FormOfHousing/FormOfHousing";
import FactsAndFacilitiesPage from "./pages/FactsAndFacilities/FactsAndFacilities";
import BathroomPage from "./pages/Bathroom/Bathroom";
import KitchenPage from "./pages/Kitchen/Kitchen";
import OutsidePage from "./pages/Outside/Outside";
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
      </Router>
    </div>
  );
};

export default App;
