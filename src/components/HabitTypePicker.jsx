function HabitTypePicker({ onSelect, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h2 className="modal-title">New Habit</h2>
            <p className="modal-subtitle">Choose a tracking style</p>
          </div>
          <button className="modal-close" onClick={onClose}>
            ✕
          </button>
        </div>
        <div className="modal-body">
          <div className="habit-type-grid">
            <button
              className="habit-type-card"
              onClick={() => onSelect("yes-no")}
            >
              <div className="habit-type-icon yes-no">
                {/* checkmark */}
                <svg
                  viewBox="0 0 16 16"
                  stroke="#d97706"
                  fill="none"
                  strokeWidth="1.5"
                >
                  <polyline points="2,8 6,12 14,4" />
                </svg>
              </div>
              <span className="habit-type-name">Yes or No</span>
              <span className="habit-type-desc">
                Simple daily check-in. Did you do it?
              </span>
            </button>

            <button
              className="habit-type-card"
              onClick={() => onSelect("quantitative")}
            >
              <div className="habit-type-icon measurable">
                {/* bar chart */}
                <svg
                  viewBox="0 0 16 16"
                  stroke="#7c3aed"
                  fill="none"
                  strokeWidth="1.5"
                >
                  <rect x="2" y="9" width="3" height="5" rx="1" />
                  <rect x="6.5" y="5" width="3" height="9" rx="1" />
                  <rect x="11" y="2" width="3" height="12" rx="1" />
                </svg>
              </div>
              <span className="habit-type-name">Measurable</span>
              <span className="habit-type-desc">
                Track progress with numbers &amp; targets.
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HabitTypePicker;
