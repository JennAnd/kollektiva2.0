import React from "react";
import { Router } from "@reach/router";

//page components

import HomePage from "./pages/Home";
import RentalTypePage from "./pages/RentalType";
import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <HomePage path="/" />
        <RentalTypePage path="/rentalType" />
      </Router>
    </div>
  );
};

export default App;
