import LandingPage from "./pages/LandingPage";
import useAuth from "./hooks/useAuth";
import Dashboard from "./pages/Dashboard";
import { createContext, useEffect, useState } from "react";
import "./App.css";

export const ThemeContext = createContext();
export const AuthContext = createContext();

function App() {
  const { user, handleLogin } = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    document.body.classList.toggle("light", theme === "light");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <AuthContext.Provider value={{ user, handleLogin }}>
        {user ? <Dashboard /> : <LandingPage />}
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
