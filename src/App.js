import logo from "./logo.svg";
import "./App.css";
import { CardScanView } from "@cardscan.ai/insurance-cardscan-react";

// See Authentication on where to get this token.
const token = "secret_test_9gfPEdNWmzPNhIr0";

function App() {
  const onSuccess = (card) => {
    console.log("new card: ", card);
  };

  const onError = (err) => {
    console.log("error: ", err);
  };

  const handleCardScan = (data) => {
    console.log("awdawdawd", data);
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
