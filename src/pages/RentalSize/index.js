import React from "react";
import { navigate } from "@reach/router";
import "./rentalSize.css";
import Button from "../../components/Button";

const RentalSizePage = (props) => {
  return (
    <div class="rentalSizeChoice">
      <h1>Ge en beskrivning</h1>
      <p>Ge en generell beskrivning av bostaden och dess område.</p>
      <form>
        <p>Antal rum</p>
        <select>
          <option value="size">1</option>
          <option value="size">2</option>
          <option value="size">3</option>
          <option value="size">4</option>
          <option value="size">5</option>
        </select>
        <div className="size">
          <p>rum</p>
        </div>
      </form>
      <form>
        <p>Storlek</p>
        <select>
          <option value="size">22</option>
          <option value="size">23</option>
          <option value="size">24</option>
          <option value="size">25</option>
          <option value="size">26</option>
        </select>
        <div>
          <p>m&sup2;</p>
        </div>
      </form>

      {/*  <div class="helpButton">
        <Button buttonText="Hjälp" bg="white" border="2px solid #000000" />
      </div> */}
      <div class="pageNavigation">
        <Button
          handleClick={() => navigate("/rental-address")}
          buttonText="Tillbaka"
        />
        <Button
          handleClick={() => navigate("/rental-type")}
          buttonText="Spara & fortsätt"
        />
      </div>
    </div>
  );
};

export default RentalSizePage;
