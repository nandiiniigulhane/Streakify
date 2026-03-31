import LandingPage from "./pages/LandingPage";
import useAuth from "./hooks/useAuth";
import Dashboard from "./pages/Dashboard";
import { createContext, useState } from "react";

export const ThemeContext = createContext();

function App() {
  const [isLoggedIn, handleLogin] = useAuth();
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    if (theme === "light") {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {isLoggedIn ? <Dashboard /> : <LandingPage handleLogin={handleLogin} />}
    </ThemeContext.Provider>
  );
}

export default App;
