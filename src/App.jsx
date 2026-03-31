import LandingPage from "./pages/LandingPage";
import useAuth from "./hooks/useAuth";
import Dashboard from "./pages/Dashboard";
import { createContext, useState } from "react";
import "./App.css";

export const ThemeContext = createContext();
export const AuthContext = createContext();

function App() {
  const { user, handleLogin } = useAuth();
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";

      document.body.style.backgroundColor =
        newTheme === "dark" ? "black" : "white";
      document.body.style.color = newTheme === "dark" ? "white" : "black";

      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <AuthContext.Provider value={{ user, handleLogin }}>
        {user ? <Dashboard /> : <LandingPage />}
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
