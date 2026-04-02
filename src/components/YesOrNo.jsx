import { useState } from "react";

function YesOrNoForm({ onCancel, handleCreateHabit }) {
  const submitData = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const habit = {
      title: formData.get("habit-title"),
      color: formData.get("color"),
      notes: formData.get("notes"),
      type: "yes/no",
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
        placeholder="e.g. Exercise"
        required
      />

      <label htmlFor="color">Choose a color</label>
      <input type="color" name="color" id="color" />

      <label htmlFor="notes">Notes</label>
      <input type="text" name="notes" id="notes" />

      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
}

function YesOrNo({ handleCreateHabit }) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h2>Yes or No</h2>
      <p>Did you complete a habit today?</p>

      {!show && <button onClick={() => setShow(true)}>Create</button>}

      {show && (
        <YesOrNoForm
          onCancel={() => setShow(false)}
          handleCreateHabit={handleCreateHabit}
        />
      )}
    </div>
  );
}

export default YesOrNo;
