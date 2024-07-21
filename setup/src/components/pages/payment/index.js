import React, { useState } from "react";
import { useSelector } from "react-redux";
import mastercardSVG from "./mastercardSVG.svg";
import visaCard from "./v-card_visa.svg";
import paypalSVG from "./paypal-SVG.svg";
import reversibleSVG from "./reversibleSVG.svg";
import { AiOutlineArrowLeft } from "react-icons/ai";
import {
  setProductIds,
  setQuantities,
  setTotal,
  setAddress,
} from "../../../store/checkout-slice";
const viewportHeight = window.innerHeight;
const viewPortWidth = window.innerWidth;

const heightResponsivness =
  (Number(viewPortWidth) - Number(viewportHeight)) / 10;
console.log(Number(heightResponsivness));

function Payment() {
  //On work: Check for page rerendering

  const [cardholderName, setCardholderName] = useState("Your Name");
  const [inputCardholderName, setInputCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardDisplay, setCardDisplay] = useState("****************");
  const [formattedCardNumber, setFormattedCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [formattedExpirationDate, setFormattedExpirationDate] = useState("");
  const [isCVV2Active, setCVV2Active] = useState(false);
  const [inputCvv2, setInputCvv2] = useState("");

  const productIds = useSelector((state) => state.checkout.productIds);
  const quantities = useSelector((state) => state.checkout.quantities);
  const total = useSelector((state) => state.checkout.total);
  const address = useSelector((state) => state.checkout.address);

  // console.log("productIds:", productIds);
  // console.log("quantities:", quantities);
  // console.log("total:", total);
  // console.log("address", address);

  const handleCardNumberChange = (e) => {
    let inputNumber = e.target.value.replace(/\s/g, "");
    inputNumber = inputNumber.slice(0, 16);
    setCardNumber(inputNumber);

    const formattedDisplay = inputNumber.match(/.{1,4}/g);
    const maskedDisplay = formattedDisplay ? formattedDisplay.join(" ") : "";
    setCardDisplay(maskedDisplay);

    const spacedNumber = formattedDisplay ? formattedDisplay.join(" ") : "";
    setFormattedCardNumber(spacedNumber);
  };
  const handleCardholderNameChange = (e) => {
    const inputName = e.target.value;
    setCardholderName(inputName.toUpperCase());
    setInputCardholderName(inputName);
  };
  const handleExpirationDateChange = (e) => {
    let inputDate = e.target.value.replace(/\D/g, "");
    inputDate = inputDate.slice(0, 4);

    if (inputDate.length === 1 && inputDate > "1") {
      inputDate = `0${inputDate}`;
    }
    setExpirationDate(inputDate);

    const formattedDisplay = inputDate.match(/.{1,2}/g);
    const formattedDate = formattedDisplay ? formattedDisplay.join("/") : "";
    setFormattedExpirationDate(formattedDate);
  };

  const handleCvv2Focus = () => {
    setCVV2Active(true);
  };

  const handleCvv2Blur = () => {
    setCVV2Active(false);
  };

  const handleCvv2Change = (e) => {
    let inputCvv2 = e.target.value.replace(/\D/g, "");
    inputCvv2 = inputCvv2.slice(0, 3);
    setInputCvv2(inputCvv2);
  };

  return (
    <div className="relative flex min-h-screen max-h-screen mt-[-2%] flex-col justify-center align-center">
      <container className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 w-11/12 bg-[#ecf9ff] h-4/5 overflow-hidden">
        <div className="DarkBlue Rectangle w-[445px] h-[2074px] fixed right-[430px] -top-80 bg-[#467eeb] rotate-[41.00deg] visible "></div>
        <div className="LightBlue Rectangle w-[445px] h-[2074px] fixed -right-[100px] -top-80 bg-[#467eeb4a] rotate-[41.00deg] visible"></div>
        <div className="InnerRectangle absolute top-[56%] left-[48%] w-[70%] h-[75%] -translate-x-1/2 -translate-y-1/2 min-h-[500px]">
          <div className="leftPannel w-[48%] h-[100%] absolute top-0 bg-[#467eeb] rounded-[10px]">
            <div className="PaymentForms Container left-1/2 flex justify-center w-[100%] h-[20%] z-30 rounded-[10px]">
              <div className="Logos flex items-center justify-center space-x-6">
                <div className="MastercardRectangle w-[32%] h-[60%] ml-[2%] bg-[#ecf9ff80] flex justify-center items-center rounded-[36px] drop-shadow-lg shadow-xl">
                  <img
                    src={mastercardSVG}
                    alt="mastercard"
                    className="w-auto h-[80%]"
                  />
                </div>
                <div className="VisaMasterdCard drop-shadow-md w-auto h-[60%]">
                  <img src={visaCard} alt="visaCard" />
                </div>
                <div className="Paypal w-auto h-[90%]">
                  <img
                    src={paypalSVG}
                    alt="Paypal"
                    className="h-auto w-[80%]"
                  />
                </div>
              </div>
            </div>
            <div className="SmallBarGrey w-[11%] h-[5%] fixed bg-[#ebf3fe] rounded-[20px] top-[23%] -left-[8%]"></div>
            <div className="SmallBarGrey w-[8%] h-[5%] fixed bg-[#467eeb] rounded-[20px] top-[28%] -left-[10%]"></div>
            <div className="SmallBarGrey w-[11%] h-[6%] fixed bg-[#ebf3fe] rounded-[20px] top-[35%] -left-[6%]"></div>
            <div className="SmallBarGrey w-[5%] h-[5%] fixed bg-[#467eeb] rounded-[20px] top-[42%] -left-[7%]"></div>
            <div className="SmallBarGrey w-[11%] h-[6%] fixed bg-[#ebf3fe] rounded-[20px] top-[47%] -left-[8%]"></div>
            <div className="absolute bottom-[18%] left-[38%] flex flex-row items-center cursor-pointer  ">
              <AiOutlineArrowLeft
                size={24}
                color="white"
                onClick={() => {}}
                className="mr-4"
              />
              <small className="text-sm text-white tracking-wide font-medium">
                Previous Step
              </small>
            </div>
          </div>
          <div className="rightPannel w-[52%] h-[100%] absolute top-0 right-0 bg-white rounded-[10px] flex justify-center items-center">
            <div className="SmallBarGrey w-[10%] h-[5%] fixed bg-[#467eeb] rounded-[20px] top-[37%] -right-[3%]"></div>
            <div className="SmallBarGrey w-[6%] h-[5%] fixed bg-[#ebf3fe] rounded-[20px] top-[42%] -right-[8%]"></div>
            <div className="SmallBarGrey w-[9%] h-[5%] fixed bg-[#467eeb] rounded-[20px] top-[47%] -right-[4%]"></div>
            <div className="SmallBarGrey w-[4%] h-[5%] fixed bg-[#ebf3fe] rounded-[20px] top-[51%] -right-[9%]"></div>
            <div
              className="RightSide Details flex flex-col w-[75%] ml-8 h-[90%] items-center
             [&_input]:xl:text-xl [&_input]:text-black [&_input]:tracking-[0.40px] [&_input]:leading-[34px] [&_input]:whitespace-nowrap [&_div]:border-slate-300 
             [&_div]:border-b-[0.8px] justify-around"
            >
              <h1
                className="text-center 2xl:text-[2.5rem] xl:text-3xl lg:text-2xl md:text-2xl sm:text-2xl font-bold text-[2.5rem] text-[#00000099] tracking-[0.50px] leading-[normal]
               2xl:mt-12 xl:mt-12 lg:mt-4 md:mt-2 mt-auto"
              >
                Payment Details
              </h1>
              <div
                className="PaymentDetails Info w-[100%] flex flex-col items-center border-none [&_div]:2xl:mb-3 [&_label]:text-[#939292]
              [&_label]:text-[0.938rem] [&_label]:tracking-[0.40px] [&_input]:md:h-[24px] font-[Poppins] "
              >
                <div className="Cardholder name border-b-[1px] w-[80%] ">
                  <label htmlFor="Cardholder Name">Cardholder Name</label>
                  <input
                    type="name"
                    id="Cardholder Name"
                    placeholder=""
                    onChange={handleCardholderNameChange}
                    value={inputCardholderName}
                    // ref={}
                    className="items-start px-2 bg-opacity-20 flex w-[100%] 2xl:py-1 xl:py-1 active:border-none focus:outline-none"
                  />
                </div>
                <div className="CardNumber border-b-2 w-[80%] ">
                  <label htmlFor="Card Number">Card Number</label>
                  <input
                    type="text"
                    id="Card Number"
                    placeholder=""
                    onChange={handleCardNumberChange}
                    value={formattedCardNumber}
                    dir="ltr"
                    // ref={}
                    className="items-start px-2 bg-opacity-20 flex w-[100%] py-1 active:border-none focus:outline-none"
                  />
                </div>
                <div className="Cardholder address border-b-2 w-[80%] ">
                  <label htmlFor="address">Address</label>
                  <input
                    type="address"
                    id="address"
                    placeholder=""
                    // ref={}
                    className="items-start px-2 bg-opacity-20 flex w-[100%] py-1 active:border-none focus:outline-none"
                  />
                </div>
                <div className="Cardholder name border-b-2 w-[80%] ">
                  <label htmlFor="phone-number">Number</label>
                  <input
                    type="tel"
                    id="Card Number"
                    placeholder=""
                    // ref={}
                    className="items-start px-2 bg-opacity-20 flex w-[100%] py-1 active:border-none focus:outline-none"
                  />
                </div>
                <div className="ExpDate CVV2 flex flex-row justify-around border-none w-[80%] 2xl:mt-4 xl:mt-4 mt-[2%]">
                  <div className="2xl:w-[25%] w-[35%] flex flex-col items-center lg:text-xs md:text-xs">
                    <label htmlFor="expiration-date" className="">
                      Exp Date
                    </label>
                    <input
                      type="text"
                      id="Card Number"
                      placeholder="MM/YY"
                      onChange={handleExpirationDateChange}
                      value={formattedExpirationDate}
                      // ref={}
                      className="items-start px-2 bg-opacity-20 flex w-[100%] text-center h-[1.56rem] 2xl:text-xl xl:text-xl
                       active:border-none focus:outline-none lg:placeholder:text-xs md:placeholder:text-xs"
                    />
                  </div>
                  <div className="w-[25%] flex flex-col items-center">
                    <label htmlFor="cvv2">CVV2</label>
                    <input
                      type="text"
                      id="Cvv2"
                      placeholder=""
                      onFocus={handleCvv2Focus}
                      onBlur={handleCvv2Blur}
                      onChange={handleCvv2Change}
                      maxLength={3}
                      // ref={}
                      className="items-start px-2 bg-opacity-20 flex w-[100%] text-center h-[1.56rem] 2xl:text-xl xl:text-xl active:border-none focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              <div
                className="PayNow Button w-[55%] h-[56px] bg-[#0363dc] border-none rounded-[30px] flex justify-center
               items-center shadow-md drop-shadow-md hover:bg-sky-700 duration-100 cursor-pointer min-h-[40px]"
              >
                <label className="text-white font-semibold text-base cursor-pointer">
                  Pay Now &nbsp;$1800
                </label>
              </div>
            </div>
          </div>
        </div>
        <div
          className="MAIN CONTAINER Flip-Credit-Card bg-transparent h-[36%] w-[32%]  min-h-[250px]  relative top-[36%] left-[18%] rounded-[30px]"
          style={{
            perspective: "1000px",
            translateZ: "0.000001",
            // transform: isCVV2Active ? "rotateY(180deg)" : "rotateY(180deg)",
          }}
        >
          <div
            className="flip-card-inner h-[100%] w-[100%] relative"
            style={{
              transition: "1.3s",
              transformOrigin: "center center",
              transformStyle: "preserve-3d",
              transform: isCVV2Active ? "rotateY(180deg)" : "rotateY(0deg)",
              WebkitTransformOrigin: "34% 50%",
              perspectiveOrigin: "center",
              perspective: "1000px",
              translateZ: "0.000001",
            }}
          >
            <div
              className="frontFaceCard h-[100%] w-[100%] absolute"
              style={{
                WebkitBackfaceVisibility: "hidden",
                backfaceVisibility: "hidden",
                translateZ: "0.000001",
              }}
            >
              <div
                className="Bank Card absolute h-[100%] w-[100%] max-w-none bg-gradient-to-r from-indigo-500 to-blue-500 drop-shadow-md
            shadow-xl rounded-[30px] overflow-hidden "
              >
                <div className="Reversible absolute top-[25px] left-[25px]">
                  <img src={reversibleSVG} alt="reversible" />
                </div>
                <div className="RoundedShape fixed w-[450px] h-[300px] bg-gradient-to-b from-blue-700 via-blue-800 to-blue-500 rounded-[50%] -top-[220px] left-[150px] shadow-md"></div>
                <div className="RoundedShape fixed w-[450px] h-[350px] bg-[#325cdf] rounded-[50%] top-[120px] -left-[180px]"></div>
              </div>
              <div className="CardDetails absolute h-[80%] w-[100%] max-w-none  rounded-[30px] overflow-hidden">
                <div className="CardContainer w-[100%] h-[100%]">
                  <div className="Card-Info absolute px-8 py-4 w-[100%] h-[100%]">
                    <div className="absolute top-[2%] right-[13%] w-[15%]">
                      <img
                        src={mastercardSVG}
                        alt="master card logo"
                        className="drop-shadow-lg"
                      ></img>
                    </div>
                    <div className="absolute top-[30%] right-[11%] w-[15%]">
                      <img
                        src={visaCard}
                        alt="master card logo"
                        className="drop-shadow-lg  w-[90%]"
                      ></img>
                    </div>

                    <div
                      className="CardNumbers fixed 2xl:text-[1.875rem] xl:text-[1.5rem] lg:text-[1.2rem] tracking-[0.50px] leading-[normal] text-white font-['Orbitron']
               opacity-90  top-[45%] left-[10%]"
                    >
                      <p className="[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                        {cardDisplay}
                      </p>
                    </div>
                    <div className="CardholderName fixed bottom-[10%] left-[10%] text-white tracking-[0.95px]">
                      <p
                        className="[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] font-['Orbitron'] 2xl:text-base xl:text-base
                      lg:text-base md:text-sm text-sm"
                      >
                        {cardholderName}
                      </p>
                    </div>
                    <div className="absolute text-white bottom-[3%] right-[10%]">
                      <p className="2xl:text-base xl:text-base lg:text-base md:text-sm lg:text-sm text-sm font-['Orbitron']">
                        Exp Date
                      </p>
                      <p className="fixed [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] font-['Orbitron']">
                        {formattedExpirationDate}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flipCard-Back h-[100%] w-[100%] rounded-[30px] bg-gradient-to-r from-indigo-500 to-blue-500 drop-shadow-md
            shadow-xl"
              style={{
                WebkitBackfaceVisibility: "hidden",
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <div className="absolute w-[100%] h-[25%] top-[17%] bg-black"></div>
              <div className="absolute justify-center w-[80%] h-[30%] top-[50%] left-[10%] bg-white rounded-[20px]">
                <p className="absolute italic font-bold text-black 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-xl top-[25%] right-[5%]">
                  {inputCvv2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </container>
    </div>
  );
}

export default Payment;
