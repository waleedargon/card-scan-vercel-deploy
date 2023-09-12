import logo from "./logo.svg";
import "./App.css";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentComponent from './PaymentCompoenent';
//pk_live_51N3G7KH3CgfJQbH9oOe2zba2yBt21edBEsNMaKSVtGZnv1IxzdiZ4Y8jtIpdA7ySgl4G7K9Dlufhn8awjkJAFfco00i7lpd1YF
//pk_test_51N3G7KH3CgfJQbH9UvRGNfeXUCzOLRTIpfmUH20uAEejjEIQGSJuQNMADI25hqwGMBMoGuWhwDtRw0dpdB4nEjer00lFEVhvvI
const stripePromise = loadStripe("pk_live_51N3G7KH3CgfJQbH9oOe2zba2yBt21edBEsNMaKSVtGZnv1IxzdiZ4Y8jtIpdA7ySgl4G7K9Dlufhn8awjkJAFfco00i7lpd1YF");

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
