import "./styles/HabitList.css";

function HabitList({ habits }) {
  if (!habits.length) {
    return (
      <div className="habit-list-empty">
        <div className="habit-list-empty-icon">
          <svg viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="6" />
            <path d="M8 5v3l2 1.5" />
          </svg>
        </div>
        <p>No habits yet — hit New Habit to start.</p>
      </div>
    );
  }

  return (
    <div className="habit-list">
      {habits.map((habit, i) => (
        <div
          key={i}
          className="habit-card"
          style={{ "--habit-color": habit.color }}
        >
          <div className="habit-card-dot" />
          <h3>{habit.title}</h3>
          <span className="habit-card-type">{habit.type}</span>
        </div>
      ))}
    </div>
  );
}

export default HabitList;
