import React, { useState } from "react";
import { navigate } from "@reach/router";
import styles from "./AdvertisementView.module.css";
import Button from "../../components/Button/Button";
import ContinueClose from "../../assets/images/continue-closed.svg";
import Wifi from "../../assets/images/wifi.svg";
import BigBedroom from "../../assets/images/big-bedroom.png";
import Customer from "../../assets/images/customer.png";
import SupportButton from "../../components/SupportButton/SupportButton";
import Paw from "../../assets/images/paw.svg";
import Wheelchair from "../../assets/images/wheelchair.svg";
import WashingMachine from "../../assets/images/washing-machine.svg";
import Shower from "../../assets/images/shower-head.svg";
import Toilet from "../../assets/images/toilet.svg";
import Dryer from "../../assets/images/tumble-dryer.svg";
import Microwave from "../../assets/images/microwave.svg";
import WaterBoiler from "../../assets/images/water-boiler.svg";
import Stove from "../../assets/images/stove.svg";
import Fridge from "../../assets/images/fridge.svg";
import FridgeBottom from "../../assets/images/fridge-bottom.svg";
import CoffeeMaker from "../../assets/images/coffee-maker.svg";
import Balcony from "../../assets/images/balcony.svg";
import Garage from "../../assets/images/garage-variant.svg";
import ArrowLeft from "../../assets/images/arrow-left.svg";
import ArrowRight from "../../assets/images/arrow-right.svg";
import Footer from "../../components/Footer/Footer";
import Popup from "../../components/Popup/Popup";
import Menu from "../../components/Menu/Menu";
import MenuButton from "../../components/MenuButton/MenuButton";
import MenuDesktop from "../../components/MenuDesktop/MenuDesktop";

const AdvertisementViewPage = (props) => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonMenu, setButtonMenu] = useState(false);
  return (
    <div className={styles.choice}>
      <MenuDesktop />
      <div className={styles.marginWrapper}>
        <div className={styles.topBar}>
          <div className={styles.leftContainer}>
            <img src={ContinueClose} alt="cross for closing"></img>
            <p className={styles.continue}>Fortsätt senare</p>
          </div>
          <div className={styles.rightContainer}>
            <SupportButton />
          </div>
        </div>
        <p className={styles.steps}>Steg 15 av 15</p>
        <div className={styles.line}></div>
        <div className={styles.section}>
          <h1 className={styles.title}>Kontrollera din annons</h1>
          <p className={styles.preamble}>
            Titta över din annons och se till att alla uppgifter stämmer innan
            du publicerar den.
          </p>
          <p className={styles.publishDate}>Publicerad 7 april</p>
          <h2 className={styles.subTitle}>Ljust rum i fin stuga vid skogen</h2>
          <img src={BigBedroom} alt="bedroom" />
          <div className={styles.addressWrapper}>
            <h3 className={styles.addressText}>Hövägen</h3>
            <p className={styles.addressSmallText}>Älvängen</p>
          </div>
          <div className={styles.customerWrapper}>
            <img src={Customer} alt="man with hat" />
            <div className={styles.customer}>
              <p className={styles.customerName}>Al Morgon</p>
              <p className={styles.customerText}>Hyresvärd</p>
            </div>
            <Button buttonText="Kontakta värden"></Button>
          </div>
          <div className={styles.summary}>
            <p className={styles.boldText}>Om boendet</p>
            <p className={styles.summaryText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum.
            </p>
            <p className={styles.summaryText}>
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos, ac not aliquet odio mattis.
            </p>
          </div>
          <div className={styles.time}>
            <p className={styles.boldText}>Tidsperiod</p>
            <p className={styles.textDate}>18-05-2022 - 18-11-2022</p>
          </div>
          <div className={styles.rentalInfoWrapper}>
            <div className={styles.rentalWrapper}>
              <div className={styles.rentalInfo}>
                <p className={styles.boldText}>Rum</p>
                <p className={styles.text}>1</p>
              </div>
              <div className={styles.rentalInfo}>
                <p className={styles.boldText}>Hyresgäst antal</p>
                <p className={styles.text}>1</p>
              </div>
              <div className={styles.rentalInfo}>
                <p className={styles.boldText}>Hyra</p>
                <p className={styles.text}>4 540 kr/månaden</p>
              </div>
            </div>
            <div className={styles.rentalWrapper}>
              <div className={styles.rentalInfo}>
                <p className={styles.boldText}>Egen yta (rum)</p>
                <p className={styles.text}>16 m&sup2;</p>
              </div>
              <div className={styles.rentalInfo}>
                <p className={styles.boldText}>Bostadstyp</p>
                <p className={styles.text}>Hus</p>
              </div>
              <div className={styles.rentalInfo}>
                <p className={styles.boldText}>Boendeform</p>
                <p className={styles.text}>Villa eller äganderätt</p>
              </div>
            </div>
          </div>
          <div className={styles.Info}>
            <p className={styles.boldText}>Fakta och facilitet</p>
            <div className={styles.infoWrapper}>
              <div className={styles.leftImgText}>
                <div className={styles.imgText}>
                  <img src={Wifi} alt="wifi" />
                  <p className={styles.text}>Tillgängligt Wifi</p>
                </div>
                <div className={styles.imgText}>
                  <img src={Wheelchair} alt="wheelchair" />
                  <p className={styles.text}>Rullstolsanpassad</p>
                </div>
              </div>
              <div className={styles.rightImgText}>
                <div className={styles.imgText}>
                  <img src={Paw} alt="paw" />
                  <p className={styles.text}>Husdjur tillåtet</p>
                </div>
                <div className={styles.imgText}>
                  <img src={Garage} alt="Garage" />
                  <p className={styles.text}>Garage</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.Info}>
            <p className={styles.boldText}>Tillgängligt i badrum</p>
            <div className={styles.infoWrapper}>
              <div className={styles.leftImgText}>
                <div className={styles.imgText}>
                  <img src={Shower} alt="shower" />
                  <p className={styles.text}>Dusch</p>
                </div>
                <div className={styles.imgText}>
                  <img src={Dryer} alt="dryer" />
                  <p className={styles.text}>Torktumlare</p>
                </div>
              </div>
              <div className={styles.rightImgText}>
                <div className={styles.imgText}>
                  <img src={WashingMachine} alt="washing machine" />
                  <p className={styles.text}>Tvättmaskin</p>
                </div>
                <div className={styles.imgText}>
                  <img src={Toilet} alt="Toilet" />
                  <p className={styles.text}>Toalett</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.Info}>
            <p className={styles.boldText}>Tillgängligt i kök</p>
            <div className={styles.infoWrapper}>
              <div className={styles.leftImgText}>
                <div className={styles.imgText}>
                  <img src={Microwave} alt="microwave" />
                  <p className={styles.text}>Mikrovågsugn</p>
                </div>
                <div className={styles.imgText}>
                  <img src={WaterBoiler} alt="water boiler" />
                  <p className={styles.text}>Vattenkokare</p>
                </div>
                <div className={styles.imgText}>
                  <img src={FridgeBottom} alt="fridge bottom" />
                  <p className={styles.text}>Frys</p>
                </div>
              </div>
              <div className={styles.rightImgText}>
                <div className={styles.imgText}>
                  <img src={Stove} alt="stove" />
                  <p className={styles.text}>Ugn och spis</p>
                </div>
                <div className={styles.imgText}>
                  <img src={Fridge} alt="fridge" />
                  <p className={styles.text}>Kyl</p>
                </div>
                <div className={styles.imgText}>
                  <img
                    src={CoffeeMaker}
                    alt="C
            coffee maker"
                  />
                  <p className={styles.text}>Kaffebryggare</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.Info}>
            <p className={styles.boldText}>Tillgängligt utomhus</p>
            <div className={styles.imgText}>
              <img src={Balcony} alt="balcony" />
              <p className={styles.text}>Balkong</p>
            </div>
          </div>
          <div className={styles.lastPart}>
            <p className={styles.lastPartText}>
              Ta det första steget till att göra det här stället till ditt
              temporära hem.
            </p>
            <Button
              buttonText="Kontakta hyresvärden"
              width="396px"
              jc="center"
            ></Button>
          </div>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h3 className={styles.titlePopup}>
              Är du redo att publicera din annons?
            </h3>
            <p className={styles.textPopup}>
              Det går att uppdatera din annons senare via mina sidor.
            </p>
            <p className={styles.textPopup}>
              Tveka inte att kontakta oss om du behöver hjälp med din annons.
            </p>
            <div className={styles.containerBtn}>
              <button
                className={styles.btn}
                onClick={() => navigate("/advertisement-publish")}
              >
                Publicera min annons nu
              </button>
            </div>
          </Popup>
          <div className={styles.pageNavigation}>
            <Button
              onClick={() => navigate("/description")}
              icon={ArrowLeft}
              bg="white"
              border="4px solid #3A0067"
              color="#3A0067"
              buttonText="Tillbaka"
              flexDirection="row"
            ></Button>
            <Button
              onClick={() => setButtonPopup(true)}
              buttonText="Pubilcera"
              icon={ArrowRight}
              flexDirection="row-reverse"
            ></Button>
          </div>
        </div>
      </div>
      <MenuButton onClick={() => setButtonMenu(true)} />
      <Menu open={buttonMenu} setOpen={setButtonMenu} />
      <Footer />
    </div>
  );
};

export default AdvertisementViewPage;
