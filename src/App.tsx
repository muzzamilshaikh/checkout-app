import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import EMI from "./components/EMI";
import Invoice from "./components/Invoice";
import Payment from "./components/Payment";
import CheckoutScreen from "./layout/CheckoutScreen";

interface IState {
  amount?: string;
  name?: string;
}

function App() {
  const [state, setState] = useState<IState>({
    name: "",
  });

  return (
    <CheckoutScreen>
      <Routes>
        <Route path="/" element={<EMI />} />
        <Route
          path="/payment"
          element={<Payment globalSetState={setState} globalState={state} />}
        />
        <Route path="/invoice" element={<Invoice state={state} />} />
      </Routes>
    </CheckoutScreen>
  );
}

export default App;
