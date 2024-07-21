// import React, { useState } from "react";
// import {
//   CardElement,
//   useElements,
//   useStripe,
// } from "@stripe/react-stripe-js";
// import axios from "axios";

// const CARD_OPTIONS = {
//   iconStyle: "solid",
//   style: {
//     base: {
//       iconColor: "#fff",
//       fontWeight: 500,
//       color: "#aaaa",
//       fontFamily: "Poppins, sans-serif",
//       fontSize: "16px",
//       fontSmoothing: "antialiased",
//     },
//     invalid: {
//       iconColor: "#ffc7ee",
//       color: "#ffc7ee",
//     },
//   },
// };

// const CheckoutForm = () => {
//   const [success, setSuccess] = useState(false);
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { error, paymentMethod } = await stripe.createMethod({
//       type: "card",
//       card: elements.getElement(CardElement),
//     });

//     if (!error) {
//       try {
//         const { id } = paymentMethod;
//         const response = await axios.post(
//           "http://localhost:4000/api/create-payment-intent",
//           {
//             amount: 500,
//             id,
//           }
//         );

//         if (response.data.success) {
//           console.log("Succesful payment");
//           setSuccess(true);
//         }
//       } catch (error) {
//         console.log("Error", error);
//       }
//     } else {
//       console.log(error.message);
//     }
//   };

//   return (
//     <div>
//       {!success ? (
//         <form onSubmit={handleSubmit}>
//           <fieldset className="FormGroup">
//             <div className="FormRow">
//               <CardElement options={CARD_OPTIONS} />
//             </div>
//           </fieldset>
//           <button>Pay</button>
//         </form>
//       ) : (
//         <div>
//           <h2>You just made a order.</h2>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CheckoutForm;
