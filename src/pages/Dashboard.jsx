import ToggleButton from "../components/ToggleButton";
import Logout from "../components/Logout";
import YesOrNo from "../components/YesOrNo";
import Quantitative from "../components/Quantitative";
import { useState } from "react";
import CreateHabit from "../components/CreateHabit";

function Dashboard() {
  const [showComponents, setShowComponents] = useState(false);
  const handleShowComponents = () => {
    setShowComponents(!showComponents);
  };

  return (
    <div>
      <ToggleButton />
      <CreateHabit handleShowComponents={handleShowComponents} />
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
