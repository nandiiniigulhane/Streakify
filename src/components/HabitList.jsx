import "./styles/HabitList.css";

const DAY_ABBR = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function buildDateList(anchorDate) {
  const list = [];
  for (let i = 4; i >= 0; i--) {
    const d = new Date(anchorDate);
    d.setDate(d.getDate() - i);
    list.push(d);
  }
  return list;
}

function HabitList({ habits, currentDate, onPrev, onNext, isToday }) {
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

  const today = new Date();
  const dateList = buildDateList(currentDate);

  return (
    <div className="habit-table">
      <div className="habit-date-header">
        <div className="habit-date-header-nav">
          <span className="date-nav-label">dates</span>

          <button className="btn-arrow" onClick={onPrev} title="Earlier">
            <svg viewBox="0 0 12 12">
              <polyline points="8,2 4,6 8,10" />
            </svg>
          </button>

          <button
            className="btn-arrow"
            onClick={onNext}
            disabled={isToday}
            title="Later"
          >
            <svg viewBox="0 0 12 12">
              <polyline points="4,2 8,6 4,10" />
            </svg>
          </button>
        </div>

        {dateList.map((d, i) => {
          const isTodayCol = d.toDateString() === today.toDateString();
          return (
            <div
              key={i}
              className={`date-col-header${isTodayCol ? " is-today" : ""}`}
            >
              <span className="date-col-day">{DAY_ABBR[d.getDay()]}</span>
              <span className="date-col-num">{d.getDate()}</span>
            </div>
          );
        })}
      </div>

      <div className="habit-list">
        {habits.map((habit, i) => (
          <div
            key={i}
            className="habit-card"
            style={{ "--habit-color": habit.color }}
          >
            <div className="habit-card-info">
              <div className="habit-card-dot" />
              <span className="habit-card-name">{habit.title}</span>
              <span className="habit-card-type">{habit.type}</span>
            </div>

            {dateList.map((d, j) => {
              const isTodayCol = d.toDateString() === today.toDateString();
              return (
                <div key={j} className="habit-date-cell">
                  <div
                    className={`date-tick${isTodayCol ? " is-today-col" : ""}`}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HabitList;
