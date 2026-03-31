import { useContext } from "react";
import { ThemeContext } from "../App";

function ToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button id="toggle-btn" onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
}

export default ToggleButton;
