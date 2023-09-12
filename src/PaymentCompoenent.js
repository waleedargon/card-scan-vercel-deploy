// PaymentComponent.js

import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

function PaymentComponent() {
  const [paymentError, setPaymentError] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error('Error:', error);
      setPaymentError(error.message);
    } else {
      console.log('Payment Method:', paymentMethod);
      // Send paymentMethod.id to your server for payment processing
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <CardElement />
      </div>
      {paymentError && <div>{paymentError}</div>}
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
}

export default PaymentComponent;
