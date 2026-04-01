import ToggleButton from "../components/ToggleButton";
import Logout from "../components/Logout";
import YesOrNo from "../components/YesOrNo";
import Quantitative from "../components/Quantitative";
import { useState } from "react";

function Dashboard() {
  const [showComponents, setShowComponents] = useState(false);
  const handleShowComponents = () => {
    setShowComponents(!showComponents);
  };

  // };
  return (
    <div>
      <ToggleButton />
      <button id="create-habit-btn" onClick={handleShowComponents}>
        Create New Habit
      </button>
      {showComponents && (
        <>
          <YesOrNo />
          <Quantitative />
        </>
      )}
      <Logout />
    </div>
  );
}

export default Dashboard;
