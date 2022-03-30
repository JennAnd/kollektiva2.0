import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <Button buttonText="Hyr ut din bostad" />
      <Button buttonText="Hjälp" bg="white" border="2px solid #000000" />
      <Button buttonText="Tillbaka" bg="white" />
      <Button buttonText="Spara & fortsätt" color="white" />
      <Button buttonText="Godkänn och publicera" color="white" />
      <Button
        buttonText="Publicera min annons nu"
        bg="white"
        border="2px solid #000000"
      />
      <Button buttonText="Mina sidor" bg="white" border="2px solid #000000" />
    </div>
  );
}

export default App;
