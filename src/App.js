// import logo from "./logo.svg";
// import "./App.css";
// import React from "react";
// import * as BlinkCardSDK from "@microblink/blinkcard-in-browser-sdk";

// // import { loadStripe } from "@stripe/stripe-js";
// // import { Elements } from "@stripe/react-stripe-js";
// // import PaymentComponent from './PaymentCompoenent';
// //pk_live_51N3G7KH3CgfJQbH9oOe2zba2yBt21edBEsNMaKSVtGZnv1IxzdiZ4Y8jtIpdA7ySgl4G7K9Dlufhn8awjkJAFfco00i7lpd1YF
// //pk_test_51N3G7KH3CgfJQbH9UvRGNfeXUCzOLRTIpfmUH20uAEejjEIQGSJuQNMADI25hqwGMBMoGuWhwDtRw0dpdB4nEjer00lFEVhvvI
// // const stripePromise = loadStripe("pk_test_51N3G7KH3CgfJQbH9UvRGNfeXUCzOLRTIpfmUH20uAEejjEIQGSJuQNMADI25hqwGMBMoGuWhwDtRw0dpdB4nEjer00lFEVhvvI");

// function App() {
//   const blinkCardRef = React.useRef(null);
//   const videoRef = React.useRef(null);

//   const callbacks = {
//     onFirstSideResult: () => alert("Flip the card"),
//   };

//   React.useEffect(() => {
//     // const licenseKey =
//       // "sRwAAAYJbG9jYWxob3N0r/lOPgo/w35CpOFWKFI7ZWysHXVwbOx9IuL6njL1wlgTKZLcxku+/BYGLT51y1BW60q69+lhdHbYGYdULkNP+9VXjWhAIjnbYIFzzncZ4Q9TBDfZiqELHE2xy+etFVMCpJnhPXEsXxlzcRhBo4K+XULYMYPK7Z9NJDGUsBBY4zRbtVWA9o4wQ5o=";

//       const licenseKey = "sRwAAAYiY2FyZC1zY2FuLXZlcmNlbC1kZXBsb3kudmVyY2VsLmFwcAHp+mMmWs3YlAzquODHyQaMUPRtdrU1hYoTtxs8PkDQ6iiy8SKGtHM3+goNSYELhwDXg7SU0U/VrRwurnMey2WPrGbOqwgMsI/iA7Yh1hNVT/eoEMvcV18CE8uG0ea4D1sJ8eaDiWtC1nRjt5LDxjgLoOOEwv+bJgwnVE81TT82WHgyNsBcQJ1m";
//     if (BlinkCardSDK.isBrowserSupported()) {
//       const loadSettings = new BlinkCardSDK.WasmSDKLoadSettings(licenseKey);

//       BlinkCardSDK.loadWasmModule(loadSettings).then(
//         async (wasmSDK) => {
//           const recognizer = await BlinkCardSDK.createBlinkCardRecognizer(
//             wasmSDK
//           );
//           const recognizerRunner = await BlinkCardSDK.createRecognizerRunner(
//             wasmSDK,
//             [recognizer],
//             true,
//             callbacks
//           );

//           // const cameraFeed = document.getElementsByClassName( "myCameraVideoElement" );
//           try {
//             const videoRecognizer = await BlinkCardSDK.VideoRecognizer.createVideoRecognizerFromCameraStream(
//               videoRef.current,
//               recognizerRunner
//             );

//             console.log("wadawdaw", videoRecognizer);

//             // There is more than one way to handle recognition

//             // Using the recognize() method will provide you with the default behavior,
//             // such as built-in error handling, timeout and video feed pausing.
//             // const processResult = await videoRecognizer.recognize();

//             // Using the startRecognition() method allows you to pass your own onScanningDone callback,
//             // giving you the option to create custom behavior.
//             // const processResult = await videoRecognizer.recognize();

//             // Using the startRecognition() method allows you to pass your own onScanningDone callback,
//             // giving you the option to create custom behavior.
//             const processResult = await videoRecognizer.startRecognition(
//               async (recognitionState) => {
//                 videoRecognizer.pauseRecognition();
//                 return recognitionState;
//               }
//             );

//             if (processResult !== BlinkCardSDK.RecognizerResultState.Empty) {
//               const recognitionResult = await recognizer.getResult();
//               console.log(recognitionResult);
//               alert(recognitionResult.cardNumber);
//               videoRecognizer.releaseVideoFeed();
//               recognizerRunner.delete();
//               recognizer.delete();
//             } else {
//               console.log("Recognition was not successful!");
//             }

//             // To obtain recognition results see next step
//           } catch (error) {
//             console.log(error);
//             if (error.name === "VideoRecognizerError") {
//               // Reason is of type BlinkCardSDK.NotSupportedReason and contains information why video
//               // recognizer could not be used. Usually this happens when user didn't grant access to a
//               // camera or when a hardware or OS error occurs.
//               const reason = error.reason;
//             }
//           }
//         },
//         (error) => {
//           // Error happened during the initialization of the SDK
//           console.log("Error during the initialization of the SDK!", error);
//         }
//       );
//     } else {
//       console.log("This browser is not supported by the SDK!");
//     }
//   }, []);

//   return (
//     <>
//       <div className="App">
//         {/* <div ref={videoRef} className="myCameraVideoElement">

//         </div> */}
//         {/* <h1>Stripe Payment with Apple Pay</h1> */}
//         {/* <Elements stripe={stripePromise}>
//           <PaymentComponent />
//         </Elements> */}

//         <video ref={videoRef}></video>
//       </div>
//     </>
//   );
// }

// export default App;

// import logo from "./logo.svg";
// import "./App.css";

// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import PaymentComponent from './PaymentCompoenent';
// //pk_live_51N3G7KH3CgfJQbH9oOe2zba2yBt21edBEsNMaKSVtGZnv1IxzdiZ4Y8jtIpdA7ySgl4G7K9Dlufhn8awjkJAFfco00i7lpd1YF
// //pk_test_51N3G7KH3CgfJQbH9UvRGNfeXUCzOLRTIpfmUH20uAEejjEIQGSJuQNMADI25hqwGMBMoGuWhwDtRw0dpdB4nEjer00lFEVhvvI
// const stripePromise = loadStripe("pk_test_51MbtlPF2qxPMBfveHj6RYDrbLSJrtKMoACIRXCU2eE1K4nRuVacXnQYO74mtwl29z7T1i1fJZZKSnPiRQOYVTJrm00eorhLYiW");

// function App() {
//   return (
//     <>
//       <div className="App">
//         <h1>Stripe Payment with Apple Pay</h1>
//         <Elements stripe={stripePromise}>
//           <PaymentComponent />
//         </Elements>
//       </div>
//     </>
//   );
// }

// export default App;

import React, { useRef, useEffect, useState } from "react";
import Webcam from "react-webcam";
import Tesseract from "tesseract.js";

const App = () => {
  const webcamRef = useRef(null);
  const [cardData, setCardData] = useState(null);

  const videoConstraints = {
    facingMode: 'environment',
  };

  useEffect(() => {
    const captureFrameAndRecognize = async () => {
      const imageSrc = webcamRef.current.getScreenshot();
      const result = await Tesseract.recognize(imageSrc, "eng", {
        logger: (m) => console.log("awdawdaw", m),
      });
      // Split the input text into lines
      const lines = result.data.text.split("\n");


      // Initialize variables to store extracted information
      let extractedCardNumber = "";
      let extractedCardName = "";
      let extractedExpiryDate = "";

      const capitalLettersRegex = /^[A-Z\s]+$/;

      // Iterate through each line and check for card-related information
      lines.forEach((line) => {
        // Try to extract card numbers using a regular expression
        const cardNumberMatch = line.match(/\d{4}\s\d{4}\s\d{4}\s\d{4}/);


        if (cardNumberMatch) {
          extractedCardNumber = cardNumberMatch[0];
        }

        // Try to extract cardholder names based on text patterns
        if (capitalLettersRegex.test(line)) {
          extractedCardName = line;
        }

        // Try to extract expiry date using a regular expression
        const expiryDateMatch = line.match(/\d{2}\/\d{2}/);

        console.log('expiryDateMatch', expiryDateMatch)
        if (expiryDateMatch) {
          extractedExpiryDate = expiryDateMatch[0];
        }
      });
      setCardData( {'extractedCardNumber': extractedCardNumber,
    'extractedExpiryDate': extractedExpiryDate, 
  'extractedCardName': extractedCardName});
    };

    const interval = setInterval(captureFrameAndRecognize, 10000); // Capture and recognize every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Credit Card Scanner</h1>
      <Webcam
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        style={{width: "100%",
          height: "auto"}}
        audio={false}
        width={640}
        height={480}
        videoConstraints={videoConstraints}
      />
      {cardData && (
        <div>
          <h2>OCR Result:</h2>
          <pre>{cardData}</pre>
        </div>
      )}
    </div>
  );
};

export default App;
