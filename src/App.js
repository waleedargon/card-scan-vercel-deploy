import logo from "./logo.svg";
import "./App.css";
import React from "react";
import * as BlinkCardSDK from "@microblink/blinkcard-in-browser-sdk";

// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import PaymentComponent from './PaymentCompoenent';
//pk_live_51N3G7KH3CgfJQbH9oOe2zba2yBt21edBEsNMaKSVtGZnv1IxzdiZ4Y8jtIpdA7ySgl4G7K9Dlufhn8awjkJAFfco00i7lpd1YF
//pk_test_51N3G7KH3CgfJQbH9UvRGNfeXUCzOLRTIpfmUH20uAEejjEIQGSJuQNMADI25hqwGMBMoGuWhwDtRw0dpdB4nEjer00lFEVhvvI
// const stripePromise = loadStripe("pk_test_51N3G7KH3CgfJQbH9UvRGNfeXUCzOLRTIpfmUH20uAEejjEIQGSJuQNMADI25hqwGMBMoGuWhwDtRw0dpdB4nEjer00lFEVhvvI");

function App() {
  const blinkCardRef = React.useRef(null);
  const videoRef = React.useRef(null);

  const callbacks = {
    onFirstSideResult: () => alert("Flip the card"),
  };

  React.useEffect(() => {
    const licenseKey =
      "sRwAAAYJbG9jYWxob3N0r/lOPgo/w35CpOFWKFI7ZWysHXVwbOx9IuL6njL1wlgTKZLcxku+/BYGLT51y1BW60q69+lhdHbYGYdULkNP+9VXjWhAIjnbYIFzzncZ4Q9TBDfZiqELHE2xy+etFVMCpJnhPXEsXxlzcRhBo4K+XULYMYPK7Z9NJDGUsBBY4zRbtVWA9o4wQ5o=";
    if (BlinkCardSDK.isBrowserSupported()) {
      const loadSettings = new BlinkCardSDK.WasmSDKLoadSettings(licenseKey);

      BlinkCardSDK.loadWasmModule(loadSettings).then(
        async (wasmSDK) => {
          const recognizer = await BlinkCardSDK.createBlinkCardRecognizer(
            wasmSDK
          );
          const recognizerRunner = await BlinkCardSDK.createRecognizerRunner(
            wasmSDK,
            [recognizer],
            true,
            callbacks
          );

          // const cameraFeed = document.getElementsByClassName( "myCameraVideoElement" );
          try {
            const videoRecognizer = await BlinkCardSDK.VideoRecognizer.createVideoRecognizerFromCameraStream(
              videoRef.current,
              recognizerRunner
            );

            console.log("wadawdaw", videoRecognizer);

            // There is more than one way to handle recognition

            // Using the recognize() method will provide you with the default behavior,
            // such as built-in error handling, timeout and video feed pausing.
            // const processResult = await videoRecognizer.recognize();

            // Using the startRecognition() method allows you to pass your own onScanningDone callback,
            // giving you the option to create custom behavior.
            // const processResult = await videoRecognizer.recognize();

            // Using the startRecognition() method allows you to pass your own onScanningDone callback,
            // giving you the option to create custom behavior.
            const processResult = await videoRecognizer.startRecognition(
              async (recognitionState) => {
                videoRecognizer.pauseRecognition();
                return recognitionState;
              }
            );

            if (processResult !== BlinkCardSDK.RecognizerResultState.Empty) {
              const recognitionResult = await recognizer.getResult();
              console.log(recognitionResult);
              videoRecognizer.releaseVideoFeed();
              recognizerRunner.delete();
              recognizer.delete();
            } else {
              console.log("Recognition was not successful!");
            }

            // To obtain recognition results see next step
          } catch (error) {
            console.log(error);
            if (error.name === "VideoRecognizerError") {
              // Reason is of type BlinkCardSDK.NotSupportedReason and contains information why video
              // recognizer could not be used. Usually this happens when user didn't grant access to a
              // camera or when a hardware or OS error occurs.
              const reason = error.reason;
            }
          }
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
        {/* <div ref={videoRef} className="myCameraVideoElement">

        </div> */}
        {/* <h1>Stripe Payment with Apple Pay</h1> */}
        {/* <Elements stripe={stripePromise}>
          <PaymentComponent />
        </Elements> */}

        <video ref={videoRef}></video>
      </div>
    </>
  );
}

export default App;
