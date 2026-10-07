import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      <section className="hero">
        <h1>Reduce Food Waste. Help People.</h1>

        <p>
          Share your extra food with people who need it.
          Together, we can reduce food waste and build a caring community.
        </p>

        <Link to="/donate" className="donate-button">
  Donate Food
</Link>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>

        <div className="steps">

          <div>
            <h3>1. Donate</h3>
            <p>Add details about the food you want to donate.</p>
          </div>

          <div>
            <h3>2. Connect</h3>
            <p>Connect with people or organizations who need food.</p>
          </div>

          <div>
            <h3>3. Help</h3>
            <p>Make a positive difference by sharing extra food.</p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;