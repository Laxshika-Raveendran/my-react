import { useState } from "react";

function DonationForm() {
  const [food, setFood] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Food donated: ${food}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Food Donation</h2>

      <input
        type="text"
        placeholder="Enter food name"
        value={food}
        onChange={(e) => setFood(e.target.value)}
      />

      <button type="submit">Donate Food</button>
    </form>
  );
}
export default DonationForm;