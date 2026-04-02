import useCreateHabit from "../hooks/useCreateHabit";
import HabitList from "../components/HabitList";
import CreateHabit from "../components/CreateHabit";
import ToggleButton from "../components/ToggleButton";
import Logout from "../components/Logout";
import YesOrNo from "../components/YesOrNo";
import Quantitative from "../components/Quantitative";
import { useState } from "react";

function Dashboard() {
  const [showComponents, setShowComponents] = useState(false);
  const { habits, handleCreateHabit } = useCreateHabit();

  const handleShowComponents = () => {
    setShowComponents(!showComponents);
  };

  return (
    <div>
      <ToggleButton />

      {showComponents ? (
        <>
          <YesOrNo handleCreateHabit={handleCreateHabit} />
          <Quantitative handleCreateHabit={handleCreateHabit} />
        </>
      ) : (
        <CreateHabit handleShowComponents={handleShowComponents} />
      )}

      <HabitList habits={habits} />

      <Logout />
    </div>
  );
}

export default Dashboard;
