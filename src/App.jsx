import Features from "./components/Features";
import ToggleButton from "./components/ToggleButton";

function App() {
  return (
    <>
      <header>
        <h2>Streakify</h2>
      </header>
      <nav>
        <a href="#features-section">Features</a>
        <ToggleButton />
        <button id="login-btn">SIGN IN</button>
      </nav>

      <div>
        <p>Your daily discipline, refined.</p>
        <p>
          Track your habits, protect your streaks, and watch consistency
          compound into something you're proud of - one day at a time.
        </p>
        <p>Ready to build unbreakable habits?</p>
        <button id="sign-in-with-google-button">Continue with Google</button>
        <a href="#features-section">Explore features</a>
      </div>

      <Features />
    </>
  );
}

export default App;
