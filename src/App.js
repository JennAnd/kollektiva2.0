import React from "react";
import { Router } from "@reach/router";

//page components

import HomePage from "./pages/Home/Home";
import FindFriendsPage from "./pages/FindFriends/FindFriends";
import RentalAddressPage from "./pages/RentalAddress/RentalAddress";
import RentalSizePage from "./pages/RentalSize/RentalSize";
import RentalTypePage from "./pages/RentalType/RentalType";
import FormOfHousingPage from "./pages/FormOfHousing/FormOfHousing";
import NumberOfPeoplePage from "./pages/NumberOfPeople/NumberOfPeople";
import RentalTimelinePage from "./pages/RentalTimeline/RentalTimeline";
import PaymentPage from "./pages/Payment/Payment";
import UploadPhotosPage from "./pages/UploadPhotos/UploadPhotos";
import FactsAndFacilitiesPage from "./pages/FactsAndFacilities/FactsAndFacilities";
import BathroomPage from "./pages/Bathroom/Bathroom";
import KitchenPage from "./pages/Kitchen/Kitchen";
import OutsidePage from "./pages/Outside/Outside";
import DescriptionPage from "./pages/Description/Description";
import AdvertisementViewPage from "./pages/AdvertisementView/AdvertisementView";
import AdvertisementPublishPage from "./pages/AdvertisementPublish/AdvertisementPublish";
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
        <NumberOfPeoplePage path="/number-of-people" />
        <RentalTimelinePage path="/rental-timeline" />
        <PaymentPage path="/payment" />
        <UploadPhotosPage path="/upload-photos" />
        <FactsAndFacilitiesPage path="/facts-and-facilities" />
        <BathroomPage path="/bathroom" />
        <KitchenPage path="/kitchen" />
        <OutsidePage path="/outside" />
        <DescriptionPage path="/description" />
        <AdvertisementViewPage path="/advertisement-view" />
        <AdvertisementPublishPage path="/advertisement-publish" />
      </Router>
    </div>
  );
};

export default App;
