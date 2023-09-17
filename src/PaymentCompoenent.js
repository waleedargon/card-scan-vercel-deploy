// PaymentComponent.js

import React, { useEffect, useState } from "react";
import {
  PaymentRequestButtonElement,
  useStripe,
  useElements,
  ExpressCheckoutElement,
  ExpressCheckout
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { Elements, ApplePayButton } from "@stripe/react-stripe-js";

const PaymentComponent = () => {

  const stripe = useStripe();
  const elements = useElements();
  const [paymentRequest, setPaymentRequest] = useState(null);
  const stripePromise = loadStripe("pk_test_51N3G7KH3CgfJQbH9UvRGNfeXUCzOLRTIpfmUH20uAEejjEIQGSJuQNMADI25hqwGMBMoGuWhwDtRw0dpdB4nEjer00lFEVhvvI");

  // React.useEffect(() => {
  //   const expressCheckoutOptions = {
  //     buttonType: {
  //       applePay: 'buy',
  //       googlePay: 'buy',
  //       paypal: 'buynow'
  //     }
  //   }
  //   const elements = stripe.elements({
  //     locale: 'us',
  //     mode: 'payment',
  //     amount: 1099,
  //     currency: 'usd',
  //   })
  //   const expressCheckoutElement = elements.create(
  //     'expressCheckout',
  //     expressCheckoutOptions
  //   )
  //   expressCheckoutElement.mount('#express-checkout-element')
  // }, [])
  // const [paymentRequest, setPaymentRequest] = useState(null);
  // const stripe = useStripe();
  // const elements = useElements();

  useEffect(() => {
    if (!stripe || !elements) {
      return;
    }

    const pr = stripe.paymentRequest({
      country: "US",
      currency: "usd",
      total: {
        label: "Membership",
        amount: 1000,
      },
      requestPayerName: true,
      requestPayerEmail: true,
      disableWallets: ["link"],
    });

    pr.canMakePayment().then((result) => {
      console.log("RESULT : ");
      console.log(result);

      if (result) {
        setPaymentRequest(pr);
      }
    });
  }, [stripe, elements]);

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     if (!stripe || !elements) {
  //       return;
  //     }

  //     const cardElement = elements.getElement(CardElement);

  //     const { error, paymentMethod } = await stripe.createPaymentMethod({
  //       type: 'card',
  //       card: cardElement,
  //     });

  //     if (error) {
  //       console.error('Error:', error);
  //       setPaymentError(error.message);
  //     } else {
  //       console.log('Payment Method:', paymentMethod);
  //       // Send paymentMethod.id to your server for payment processing
  //     }
  //   };

  return (
    <>
        <h1>Hello applePay</h1>
      {
            paymentRequest && <PaymentRequestButtonElement options={{paymentRequest}} />
        }
        


      
    </>
  );
}

export default PaymentComponent;
