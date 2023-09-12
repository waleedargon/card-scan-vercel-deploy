// PaymentComponent.js

import React, { useEffect, useState } from 'react';
import { PaymentRequestButtonElement, useStripe, useElements } from '@stripe/react-stripe-js';

function PaymentComponent() {
  const [paymentRequest, setPaymentRequest] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {

    if (!stripe || !elements) {
        return;
    }

    const pr = stripe.paymentRequest({
        currency: 'usd',
        country: 'US',
        requestPayerEmail: true,
        total: {
            label: 'demo payment',
            amount: 1990
        }
    })

    pr.canMakePayment().then(result => {
        if (result) {
            setPaymentRequest(pr);
        }
    })

  }, [stripe, elements])

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
        {
            paymentRequest && <PaymentRequestButtonElement options={{paymentRequest}} />
        }
    </>
  );
}

export default PaymentComponent;
