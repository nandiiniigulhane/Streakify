import { useState } from "react";
import { updateHabitData } from "../services/db";

const useCreateHabit = () => {
  const [habits, setHabits] = useState([]);
  const [habitData, setHabitData] = useState({});

  const handleCreateHabit = (habit) => {
    setHabits((prev) => [...prev, habit]);
  };

  const handleHabitData = async (habit, val, date) => {
    const dateKey = new Date(date).toISOString().split("T")[0];

    const newData = {
      ...habitData[habit.id],
      [dateKey]: val,
    };

    setHabitData((prev) => ({
      ...prev,
      [habit.id]: newData,
    }));

    await updateHabitData(habit.id, newData);
  };

  const setInitialHabitData = (data) => {
    setHabitData(data);
  };

  return {
    habits,
    handleCreateHabit,
    habitData,
    handleHabitData,
    setInitialHabitData,
  };
};

export default useCreateHabit;
