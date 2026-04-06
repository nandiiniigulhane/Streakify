import { useState } from "react";
import { updateHabitData, deleteHabitFromFirestore } from "../services/db";

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

  const deleteHabit = async (id) => {
    setHabits((prev) => prev.filter((habit) => habit.id !== id));
    setHabitData((prev) => {
      const newData = { ...prev };
      delete newData[id];
      return newData;
    });
    await deleteHabitFromFirestore(id);
  };

  const setInitialHabitData = (data) => {
    setHabitData(data);
  };

  return {
    habits,
    handleCreateHabit,
    habitData,
    handleHabitData,
    deleteHabit,
    setInitialHabitData,
  };
};

export default useCreateHabit;
