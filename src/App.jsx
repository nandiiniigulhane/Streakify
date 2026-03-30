import Dashboard from "./components/Dashboard";
import Features from "./components/Features";
import ToggleButton from "./components/ToggleButton";
import useAuth from "./components/useAuth";

function App() {
  const [isLoggedIn, handleLogin] = useAuth();
  return (
    <>
      <header>
        <h2>Streakify</h2>
      </header>
      <nav>
        <a href="#features-section">Features</a>
        <ToggleButton />
        <button id="login-btn" onClick={handleLogin}>
          SIGN IN
        </button>
      </nav>

      <div>
        <p>Your daily discipline, refined.</p>
        <p>
          Track your habits, protect your streaks, and watch consistency
          compound into something you're proud of - one day at a time.
        </p>
        <p>Ready to build unbreakable habits?</p>
        <button id="sign-in-with-google-button" onClick={handleLogin}>
          Continue with Google
        </button>
        <a href="#features-section">Explore features</a>
      </div>

      <Features />

      {isLoggedIn && <Dashboard />}
    </>
  );
}

export default App;
