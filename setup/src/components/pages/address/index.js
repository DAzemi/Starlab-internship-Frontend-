import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAddress } from "../../../store/checkout-slice";
import { useNavigate } from "react-router-dom";
import {
  setProductIds,
  setQuantities,
  setTotal,
} from "../../../store/checkout-slice";

function CheckoutAddress() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fullNameRef = useRef();
  const emailRef = useRef();
  const countryRef = useRef();
  const streetAddressRef = useRef();
  const zipCodeRef = useRef();
  const cityRef = useRef();

  const productIds = useSelector((state) => state.checkout.productIds);
  const quantities = useSelector((state) => state.checkout.quantities);
  const total = useSelector((state) => state.checkout.total);

  // console.log("productIds:", productIds);
  // console.log("quantities:", quantities);
  // console.log("total:", total);

  const handleAddressSubmit = (e) => {
    e.preventDefault();

    const inputData = {
      name: fullNameRef.current.value,
      email: emailRef.current.value,
      country: countryRef.current.value,
      streetAddress: streetAddressRef.current.value,
      zipCode: zipCodeRef.current.value,
      city: cityRef.current.value,
    };

    dispatch(setAddress(inputData));
    dispatch(setProductIds(productIds));
    dispatch(setQuantities(quantities));
    dispatch(setTotal(total));
    navigate("/checkout/payment");
  };

  return (
    <div className="relative flex min-h-screen max-h-[50%] justify-center font-['Poppins']">
      <div className="flex items-center justify-center xl:w-3/4 lg:w-3/4 md:w-3/4 w-[98%]">
        <container
          className="flex flex-col max-w-none justify-center items-center bg-[#f7fdff] rounded-[36px] [&_div]:mt-[2%]
           [&_label]:text-[rgba(27,31,59,0.65)]
       [&_label]:font-['Manrope'] [&_label]:tracking-wide [&_label]:font-[500] w-[95%] pb-[3%] "
        >
          <div className="InnerContent flex flex-col justify-center items-center">
            <form className="flex flex-col justify-center w-[100%] items-center">
              <h2 className="xl:text-[3rem] lg:text-[2.5rem] md:text-[2.5rem] text-[1.5rem] mt-[3%] text-[#505872] font-[600] tracking-wide">
                Enter your shipping address
              </h2>
              <div className=" drop-shadow-md w-[70%]  min-w-[350px] rounded-[12px]">
                <label htmlFor="Name">Full Name</label>
                <input
                  type="name"
                  id="Cardholder Name"
                  placeholder=""
                  name="fullName"
                  ref={fullNameRef}
                  className="items-start h-[56px] border
              bg-opacity-20 flex w-[100%] 2xl:py-1 xl:py-1 px-2 focus:outline-[blue]
              rounded-[12px]"
                />
              </div>
              <div className=" drop-shadow-md w-[70%] min-w-[350px]">
                <label htmlFor="Name">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder=""
                  name="email"
                  ref={emailRef}
                  className="items-start px-2 h-[56px] bg-opacity-20 flex w-[100%] 2xl:py-1 xl:py-1 focus:outline-[blue] rounded-[12px] border"
                  required
                />
              </div>
              <div className=" drop-shadow-md w-[70%] min-w-[350px]">
                <label htmlFor="Name">Confirm Email</label>
                <input
                  type="email"
                  id="confirm email"
                  placeholder=""
                  name="confirmEmail"
                  // ref={confirmEmailRef}
                  className="items-start px-2 h-[56px] bg-opacity-20 flex w-[100%] 2xl:py-1 xl:py-1 focus:outline-[blue] rounded-[12px] border"
                />
              </div>
              <div className=" drop-shadow-md w-[70%] min-w-[350px]">
                <label>Country</label>
                <input
                  type="text"
                  id="Country"
                  placeholder=""
                  name="country"
                  ref={countryRef}
                  className="items-start px-2 h-[56px] bg-opacity-20 flex w-[100%] 2xl:py-1 xl:py-1 focus:outline-[blue] rounded-[12px] border"
                />
              </div>
              <div className=" drop-shadow-md w-[70%] min-w-[350px]">
                <label>Street Adress</label>
                <input
                  type="text"
                  id="streetAddress"
                  placeholder=""
                  name="streetAddress"
                  ref={streetAddressRef}
                  className="items-start px-2 h-[56px] bg-opacity-20 flex w-[100%] 2xl:py-1 xl:py-1 focus:outline-[blue] rounded-[12px] border"
                />
              </div>
              <div
                className="ZipCode and City w-[80%] flex xl:justify-between lg:justify-between md:justify-between min-w-[350px]
            justify-between"
              >
                <div className=" drop-shadow-md w-[45%]">
                  <label htmlFor="zipcode">Zip Code</label>
                  <input
                    type="text"
                    name="zipcode"
                    id="ZipCode"
                    placeholder=""
                    ref={zipCodeRef}
                    className="items-start px-2 h-[56px] bg-opacity-20 flex w-[100%] 2xl:py-1 xl:py-1 focus:outline-[blue] rounded-[12px] border"
                  />
                </div>
                <div className=" drop-shadow-md w-[45%] min-w-[150px]">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder=""
                    ref={cityRef}
                    className="items-start px-2 h-[56px] bg-opacity-20 flex w-[100%] 2xl:py-1 xl:py-1 focus:outline-[blue] rounded-[12px] border"
                  />
                </div>
              </div>
              <div className="Button w-[70%]">
                <button
                  onClick={handleAddressSubmit}
                  className="h-[56px] w-[100%] rounded-[12px] bg-[#0363DC] flex items-center justify-center text-white hover:opacity-90
              cursor-pointer drop-shadow-lg shadow-md"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        </container>
      </div>
    </div>
  );
}
export default CheckoutAddress;
