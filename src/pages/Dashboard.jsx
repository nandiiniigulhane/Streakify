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
import Dates from "../components/Dates";

function Dashboard() {
  const { habits, handleCreateHabit } = useCreateHabit();
  const [modal, setModal] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showLastDate, setShowLastDate] = useState(false);
  const close = () => setModal(null);

  const handlePrev = () => {
    const temp = new Date(currentDate);
    temp.setDate(temp.getDate() - 1);
    setCurrentDate(temp);
  };

  const handleNext = () => {
    const temp = new Date(currentDate);
    temp.setDate(temp.getDate() + 1);
    setCurrentDate(temp);
  };

  const helperForPrevButton = () => {
    const today = new Date();

    if (currentDate.toDateString() === today.toDateString()) {
      setShowLastDate(false);
    } else {
      setShowLastDate(true);
    }
  };

  useEffect(() => {
    helperForPrevButton();
  }, [currentDate]);

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

      <div>
        {showLastDate && (
          <button type="button" onClick={handleNext}>
            {" "}
            Prev
          </button>
        )}

        <Dates date={currentDate} />
        <button type="button" onClick={handlePrev}>
          Next
        </button>
      </div>
      <main className="dashboard-body">
        <p className="dashboard-section-label">Your habits</p>
        <HabitList habits={habits} />
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
