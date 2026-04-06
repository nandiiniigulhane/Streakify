import "./styles/HabitList.css";

const DAY_ABBR = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTH_ABBR = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function buildDateList(anchorDate) {
  const list = [];
  for (let i = 4; i >= 0; i--) {
    const d = new Date(anchorDate);
    d.setDate(d.getDate() - i);
    list.push(d);
  }
  return list;
}

function HabitList({
  habits,
  habitData,
  handleHabitData,
  currentDate,
  onPrev,
  onNext,
  isToday,
}) {
  if (!habits.length) {
    return (
      <div className="habit-list-empty">
        <p>No habits yet — hit New Habit to start.</p>
      </div>
    );
  }

  const today = new Date();
  const dateList = buildDateList(currentDate);

  const helper = (habit, e, date) => {
    let val;
    if (habit.type === "quantitative") {
      val = e.target.value;
    } else {
      val = e.target.checked;
    }
    handleHabitData(habit, val, date);
  };

  return (
    <div className="habit-table">
      {/* HEADER */}
      <div className="habit-date-header">
        <div className="habit-date-header-nav">
          <span className="date-nav-label">dates</span>

          <button className="btn-arrow" onClick={onPrev}>
            {"<"}
          </button>
          <button className="btn-arrow" onClick={onNext} disabled={isToday}>
            {">"}
          </button>
        </div>

        {dateList.map((d) => {
          const isTodayCol = d.toDateString() === today.toDateString();

          return (
            <div
              key={d.toISOString()}
              className={`date-col-header${isTodayCol ? " is-today" : ""}`}
            >
              <span>{DAY_ABBR[d.getDay()]}</span>
              <span>
                {d.getDate()} {MONTH_ABBR[d.getMonth()]}
              </span>
            </div>
          );
        })}
      </div>

      {/* HABITS */}
      <div className="habit-list">
        {habits.map((habit, idx) => {
          const isMeasurable = habit.type === "quantitative";

          return (
            <div
              key={habit.id}
              className="habit-card"
              style={{ "--habit-color": habit.color }}
            >
              <div className="habit-card-info">
                <span className="habit-card-name">{habit.title}</span>
                <span className="habit-card-type">{habit.type}</span>
              </div>

              {dateList.map((d) => {
                const isTodayCol = d.toDateString() === today.toDateString();

                const dateKey = d.toISOString().split("T")[0];
                const value = habitData[habit.id]?.[dateKey];

                return (
                  <div
                    key={`${habit.id}-${dateKey}`}
                    className="habit-date-cell"
                  >
                    {isMeasurable ? (
                      <input
                        type="number"
                        value={value || ""}
                        onChange={(e) => helper(habit, e, d)}
                        className={`habit-number-input${
                          isTodayCol ? " is-today-col" : ""
                        }`}
                        placeholder="—"
                        min="0"
                      />
                    ) : (
                      <input
                        type="checkbox"
                        checked={value || false}
                        onChange={(e) => helper(habit, e, d)}
                        className={`habit-checkbox${
                          isTodayCol ? " is-today-col" : ""
                        }`}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HabitList;
