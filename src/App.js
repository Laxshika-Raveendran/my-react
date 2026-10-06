import React, { useState } from "react";
import Header from "./components/header";
import DonationForm from "./components/Donation form";
function App() {
  const [food, setFood] = useState("");

  return (
    <div>
      <Header title="Food Donation System" />

      <h1>Food Donation</h1>

      <input
        type="text"
        placeholder="Enter food name"
        value={food}
        onChange={(e) => setFood(e.target.value)}
      />

      <p>Food: {food}</p>
    </div>
  );
}

export default App;