import { useState } from "react";

const useCreateHabit = () => {
  const [habits, setHabits] = useState([]);

  const handleCreateHabit = (habit) => {
    setHabits((prev) => [...prev, habit]);
  };

  return { habits, handleCreateHabit };
};

export default useCreateHabit;
