import { useState } from "react";

const useCreateHabit = () => {
  const [habits, setHabits] = useState([]);
  const [habitData, setHabitData] = useState({});

  const handleCreateHabit = (habit) => {
    setHabits((prev) => [...prev, habit]);
  };

  const handleHabitData = (habit, val, date) => {
    const dateKey = new Date(date).toISOString().split("T")[0];

    setHabitData((prev) => ({
      ...prev,
      [habit.title]: {
        ...prev[habit.title],
        [dateKey]: val,
      },
    }));
  };

  return { habits, handleCreateHabit, habitData, handleHabitData };
};

export default useCreateHabit;
