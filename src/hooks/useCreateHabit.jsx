import { useState } from "react";

const useCreateHabit = () => {
  const [habits, setHabits] = useState([]);

  const handleCreateHabit = (habit) => {
    setHabits((prev) => [...prev, habit]);
  };

  // console.log(habits);

  return { habits, handleCreateHabit };
};

export default useCreateHabit;
