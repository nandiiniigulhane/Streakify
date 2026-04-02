function HabitList({ habits }) {
  return (
    <div>
      {habits.map((habit, index) => (
        <div key={index}>
          <h3>{habit.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default HabitList;
