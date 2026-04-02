import { useState } from "react";

function QuantitativeForm({ onCancel, handleCreateHabit }) {
  const submitData = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const habit = {
      title: formData.get("habit-title"),
      color: formData.get("color"),
      units: formData.get("unit"),
      target: formData.get("target"),
      notes: formData.get("notes"),
      type: "quantitative",
    };

    handleCreateHabit(habit);
    event.currentTarget.reset();
    onCancel();
  };

  return (
    <form onSubmit={submitData}>
      <label htmlFor="habit-title">Title</label>
      <input
        type="text"
        name="habit-title"
        id="habit-title"
        placeholder="e.g. Run"
        required
      />

      <label htmlFor="color">Choose a color</label>
      <input type="color" name="color" id="color" />

      <label htmlFor="unit">Unit</label>
      <input
        type="text"
        name="unit"
        id="unit"
        placeholder="e.g. km, pages"
        required
      />

      <label htmlFor="target">Target</label>
      <input type="number" name="target" id="target" placeholder="e.g. 5" />

      <label htmlFor="notes">Notes</label>
      <input type="text" name="notes" id="notes" placeholder="(Optional)" />

      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
}

function Quantitative({ handleCreateHabit }) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h2>Measurable</h2>
      <p>Track habits with numbers</p>

      {!show && <button onClick={() => setShow(true)}>Create</button>}

      {show && (
        <QuantitativeForm
          onCancel={() => setShow(false)}
          handleCreateHabit={handleCreateHabit}
        />
      )}
    </div>
  );
}

export default Quantitative;
