import React from "react";
import "./home.css";
/* import Button from "../../components/Button"; */
import Card from "./../../components/Card";
import houseRoof from "./../../assets/images/houseRoof.png";

const HomePage = (props) => {
  return (
    <div>
      <h1>Bo tillsammans med andra</h1>
      <p>
        Kollektiva förmedlar på ett tryggt och effektivt sätt ut delade
        hyresbostäder.
      </p>
      <Card
        title="Hyr ut din bostad"
        text="Utöka ditt sociala liv och dra nytta av din bostad genom att hyra ut en del av den"
        image={houseRoof}
        buttonText="Läs mer om att hyra ut din bostad"
        bg="white"
      ></Card>
      <Card
        title="Hyr en bostad"
        text="500 000+ användare har redan hittat bostadsvänner via Kollektiva"
        image={houseRoof}
        buttonText="Läs mer om att hyra en bostad"
        bg="white"
      ></Card>
    </div>
  );
};

export default HomePage;
