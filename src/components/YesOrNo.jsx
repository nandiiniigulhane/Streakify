function YesOrNo({ handleCreateHabit, onClose, onBack }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    handleCreateHabit({
      title: fd.get("habit-title"),
      color: fd.get("color"),
      notes: fd.get("notes"),
      type: "yes/no",
    });
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h2 className="modal-title">Yes or No</h2>
            <p className="modal-subtitle">Daily completion habit</p>
          </div>
          <button className="modal-close" onClick={onClose}>
            ✕
          </button>
        </div>
        <div className="modal-body">
          <button className="btn-back" onClick={onBack}>
            Back
          </button>
          <form className="habit-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="yn-title">Title</label>
              <input
                type="text"
                name="habit-title"
                id="yn-title"
                placeholder="e.g. Meditate"
                required
              />
            </div>
            <div className="form-field">
              <label>Colour</label>
              <div className="color-row">
                <input
                  type="color"
                  name="color"
                  id="yn-color"
                  defaultValue="#d97706"
                />
                <span className="color-hint">Pick a colour for this habit</span>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="yn-notes">Notes</label>
              <input
                type="text"
                name="notes"
                id="yn-notes"
                placeholder="Optional reminder"
              />
            </div>
            <div className="form-actions">
              <button type="submit" className="btn-save">
                Save Habit
              </button>
              <button type="button" className="btn-cancel" onClick={onClose}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default YesOrNo;
