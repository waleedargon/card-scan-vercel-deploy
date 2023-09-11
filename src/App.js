import logo from "./logo.svg";
import "./App.css";
import { React, useState } from "react";
import { CardScanView } from "@cardscan.ai/insurance-cardscan-react";

// See Authentication on where to get this token.
const token = "secret_test_9gfPEdNWmzPNhIr0";

function App() {

  const [data, setData] = useState('');

  const onSuccess = (card) => {
    alert(card);
    setData(card);
  };

  const onError = (err) => {
    alert("error: ", err);
    setData(err);
  };

  const handleCardScan = (data) => {
    alert("awdawdawd", data);
    setData(data);
  };

  return (
    <CardScanView
      live={false}
      sessionToken={token}
      onSuccess={onSuccess}
      onError={onError}
    />
  );
}

export default App;
