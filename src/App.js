import logo from "./logo.svg";
import "./App.css";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentComponent from './PaymentCompoenent';

const stripePromise = loadStripe("YOUR_STRIPE_PUBLISHABLE_KEY");

function App() {
  return (
    <>
      <div className="App">
        <h1>Stripe Payment with Apple Pay</h1>
        <Elements stripe={stripePromise}>
          <PaymentComponent />
        </Elements>
      </div>
    </>
  );
}

export default App;
