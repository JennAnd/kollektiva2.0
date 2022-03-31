import React from "react";
import { Router } from "@reach/router";

//page components

import HomePage from "./pages/Home";
import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <HomePage path="/" />
      </Router>
    </div>
  );
};

export default App;
