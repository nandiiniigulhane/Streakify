function Quantitative({ handleCreateHabit, onClose, onBack }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    handleCreateHabit({
      title: fd.get("habit-title"),
      color: fd.get("color"),
      units: fd.get("unit"),
      target: fd.get("target"),
      notes: fd.get("notes"),
      type: "quantitative",
      date: new Date().toLocaleDateString(),
    });
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h2 className="modal-title">Measurable</h2>
            <p className="modal-subtitle">Track habits with numbers</p>
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
              <label htmlFor="q-title">Title</label>
              <input
                type="text"
                name="habit-title"
                id="q-title"
                placeholder="e.g. Run"
                required
              />
            </div>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="q-unit">Unit</label>
                <input
                  type="text"
                  name="unit"
                  id="q-unit"
                  placeholder="km, pages…"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="q-target">Daily target</label>
                <input
                  type="number"
                  name="target"
                  id="q-target"
                  placeholder="e.g. 5"
                  min="0"
                />
              </div>
            </div>
            <div className="form-field">
              <label>Colour</label>
              <div className="color-row">
                <input
                  type="color"
                  name="color"
                  id="q-color"
                  defaultValue="#7c3aed"
                />
                <span className="color-hint">Pick a colour for this habit</span>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="q-notes">Notes</label>
              <input
                type="text"
                name="notes"
                id="q-notes"
                placeholder="Optional"
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

export default Quantitative;
