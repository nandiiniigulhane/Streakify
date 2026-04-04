import { useEffect, useState } from "react";
import useCreateHabit from "../hooks/useCreateHabit";
import HabitList from "../components/HabitList";
import ToggleButton from "../components/ToggleButton";
import Logout from "../components/Logout";
import HabitTypePicker from "../components/HabitTypePicker";
import YesOrNo from "../components/YesOrNo";
import Quantitative from "../components/Quantitative";
import "./styles/Dashboard.css";
import "./styles/Modal.css";

function Dashboard() {
  const { habits, handleCreateHabit, habitData, handleHabitData } =
    useCreateHabit();
  const [modal, setModal] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const close = () => setModal(null);

  const isToday = currentDate.toDateString() === new Date().toDateString();

  const handlePrev = () => {
    const d = new Date(currentDate);
    d.setDate(d.getDate() - 1);
    setCurrentDate(d);
  };

  const handleNext = () => {
    const d = new Date(currentDate);
    d.setDate(d.getDate() + 1);
    setCurrentDate(d);
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <span className="dashboard-wordmark">Streakify</span>
        <div className="dashboard-header-right">
          <ToggleButton />
          <button id="create-habit-btn" onClick={() => setModal("picker")}>
            New Habit
          </button>
          <Logout />
        </div>
      </header>

      <main className="dashboard-body">
        <p className="dashboard-section-label">Your habits</p>
        <HabitList
          habits={habits}
          habitData={habitData}
          handleHabitData={handleHabitData}
          currentDate={currentDate}
          onPrev={handlePrev}
          onNext={handleNext}
          isToday={isToday}
        />
      </main>

      {modal === "picker" && (
        <HabitTypePicker onSelect={(type) => setModal(type)} onClose={close} />
      )}
      {modal === "yes-no" && (
        <YesOrNo
          handleCreateHabit={handleCreateHabit}
          onClose={close}
          onBack={() => setModal("picker")}
        />
      )}
      {modal === "quantitative" && (
        <Quantitative
          handleCreateHabit={handleCreateHabit}
          onClose={close}
          onBack={() => setModal("picker")}
        />
      )}
    </div>
  );
}

export default Dashboard;
