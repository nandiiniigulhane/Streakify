import { useContext } from "react";
import { ThemeContext } from "../App";
import "./styles/ToggleButton.css";

function ToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button id="toggle-btn" onClick={toggleTheme}>
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}

export default ToggleButton;
