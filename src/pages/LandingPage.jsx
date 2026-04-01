import { useContext } from "react";
import { AuthContext } from "../App";
import Features from "../components/Features";
import ToggleButton from "../components/ToggleButton";
import "./styles/Header.css";
import "./styles/LandingPage.css";

function LandingPage() {
  const { user, handleLogin } = useContext(AuthContext);
  return (
    <div className="landing-page">
      <header>
        <h2>Streakify</h2>
        <nav>
          <a href="#features-section">Features</a>
          <ToggleButton />
          <button id="login-btn" onClick={handleLogin}>
            SIGN IN
          </button>
        </nav>
      </header>

      <section className="hero">
        <span className="hero-label">Habit Tracker</span>
        <h1>
          Your daily discipline, <em>refined.</em>
        </h1>
        <p className="hero-description">
          Track your habits, protect your streaks, and watch consistency
          compound into something you're proud of — one day at a time.
        </p>
        <div className="hero-cta-group">
          <button id="sign-in-with-google-button" onClick={handleLogin}>
            Continue with Google
          </button>
          <a href="#features-section">Explore features</a>
        </div>
      </section>

      <Features />
    </div>
  );
}

export default LandingPage;
