import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Food Donation System</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/donate">Donate</Link>
        <Link to="/donations">Donations</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;