import { useState } from "react";

function DonationForm() {
  const [food, setFood] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Food donated: ${food}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Food Donation</h2>

      <label>Food Name</label>
      <input
        type="text"
        placeholder="Enter food name"
        value={food}
        onChange={(e) => setFood(e.target.value)}
      />

      <br />

      <label>Category</label>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select category</option>
        <option value="Rice">Rice</option>
        <option value="Curry">Curry</option>
        <option value="Bakery">Bakery</option>
        <option value="Fruits">Fruits</option>
        <option value="Vegetables">Vegetables</option>
        <option value="Other">Other</option>
      </select>

      <br />

      <label>Quantity</label>
      <input
        type="text"
        placeholder="Enter quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <br />

      <label>Pickup Location</label>
      <input
        type="text"
        placeholder="Enter pickup location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <br />

      <label>Description</label>
      <textarea
        placeholder="Enter food description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br />

      <button type="submit">Donate Food</button>
    </form>
  );
}

export default DonationForm;