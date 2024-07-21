// import { useNavigate } from "react-router-dom";
// import {
//   CardElement,
//   ElementsConsumer,
//   useElements,
//   useStripe,
// } from "@stripe/react-stripe-js";
// import { CardNumberElement, Elements } from "@stripe/react-stripe-js";
// import { PaymentElement } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import { useEffect, useState } from "react";
// import CheckoutForm from "./CheckoutForm";
// import {
//     formattedCardNumber,
//     formatCVC,
//     formattedExpirationDate
// } from "./cardUtils"
// import axios from "axios"

// // const publishableKey = process.env.REACT_APP_STRIPE_PK_TEST;

// // const CardPayment = () => {
// //   const [stripePromise, setStripePromise] = useState(null);
// //   const [clientSecret, setClientSecret] = useState("");

// //   const elements = useElements();
// //   const stripe = useStripe();

// //   const [isProcessing, setIsProcessing] = useState(false);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     if (!stripe || !elements) {
// //       return;
// //     }

// //     setIsProcessing(true);

// //     const { error, paymentIntent } = await stripe
// //       .confirmPayment({
// //         elements,
// //         confirmParams: {
// //           return_url: "http://localhost:3000/all-done",
// //         },
// //       })
// //       .then(function (result) {
// //         if (result.error) {
// //           console.log("There was an error in confirmPayment: ", error.message);
// //         }
// //       });

// //     if (error) {
// //       console.log(error.message);
// //     } else if (paymentIntent && paymentIntent.status === "succeeded") {
// //       console.log("Payment status: " + paymentIntent.amount.status + "🤷");
// //     } else {
// //       console.log("Unexpected state");
// //     }

// //     setIsProcessing(false);
// //   };

// //   useEffect(() => {
// //     fetch("http://localhost:4000/api/create-payment-intent", {
// //       method: "POST",
// //       body: JSON.stringify({}),
// //     }).then(async (r) => {
// //       const { clientSecret } = await r.json();

// //       setStripePromise(loadStripe(process.env.REACT_APP_STRIPE_PK_TEST));
// //       setClientSecret(clientSecret);
// //     });
// //   }, []);

// //   return (
// //     <div className="border-none">
// //       {stripePromise && clientSecret && (
// //         <Elements stripe={stripePromise} options={{ clientSecret }}>
// //           <form id="payment-form" onSubmit={handleSubmit}>
// //             <PaymentElement />
// //             <button
// //               onClick={handleSubmit}
// //               disabled={isProcessing}
// //               id="submit"
// //               className="cursor-pointer"
// //             >
// //               Pay now
// //             </button>
// //             <span id="button-text">
// //               {/*{isProcessing ? "Processing..." : "Pay now"}*/}
// //             </span>
// //           </form>
// //         </Elements>
// //       )}
// //     </div>
// //   );
// // };

// // export default CardPayment;
