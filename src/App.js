import logo from "./logo.svg";
import "./App.css";
import React from "react";
import * as BlinkCardSDK from "@microblink/blinkcard-in-browser-sdk";
// import * as BlinkCardSDK from "./es/blinkcard-sdk.js";

// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import PaymentComponent from './PaymentCompoenent';
//pk_live_51N3G7KH3CgfJQbH9oOe2zba2yBt21edBEsNMaKSVtGZnv1IxzdiZ4Y8jtIpdA7ySgl4G7K9Dlufhn8awjkJAFfco00i7lpd1YF
//pk_test_51N3G7KH3CgfJQbH9UvRGNfeXUCzOLRTIpfmUH20uAEejjEIQGSJuQNMADI25hqwGMBMoGuWhwDtRw0dpdB4nEjer00lFEVhvvI
// const stripePromise = loadStripe("pk_test_51N3G7KH3CgfJQbH9UvRGNfeXUCzOLRTIpfmUH20uAEejjEIQGSJuQNMADI25hqwGMBMoGuWhwDtRw0dpdB4nEjer00lFEVhvvI");

function App() {
  const blinkCardRef = React.useRef(null);
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    const licenseKey =
      "sRwAAAYJbG9jYWxob3N0r/lOPgo/w35CpOFWKFI7ZWysHXVwbOx9IuL6njL1wlgTKZLcxku+/BYGLT51y1BW60q69+lhdHbYGYdULkNP+9VXjWhAIjnbYIFzzncZ4Q9TBDfZiqELHE2xy+etFVMCpJnhPXEsXxlzcRhBo4K+XULYMYPK7Z9NJDGUsBBY4zRbtVWA9o4wQ5o=";
    if (BlinkCardSDK.isBrowserSupported()) {
      const loadSettings = new BlinkCardSDK.WasmSDKLoadSettings(
        licenseKey
      );

      console.log('awdawdwa', loadSettings);

      BlinkCardSDK.loadWasmModule(loadSettings).then(
        (wasmSDK) => {
          // The SDK was initialized successfully, save the wasmSDK for future use
        },
        (error) => {
          // Error happened during the initialization of the SDK
          console.log("Error during the initialization of the SDK!", error);
        }
      );
    } else {
      console.log("This browser is not supported by the SDK!");
    }
  }, []);

  return (
    <>
      <div className="App">
        {/* <h1>Stripe Payment with Apple Pay</h1> */}
        {/* <Elements stripe={stripePromise}>
          <PaymentComponent />
        </Elements> */}

        <h1>awdwdwa</h1>
      </div>
    </>
  );
}

export default App;
