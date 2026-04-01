import { useState } from "react";

function QuantitativeForm() {
  return (
    <div>
      <form>
        <label htmlFor="habit-title">Title</label>
        <input
          type="text"
          placeholder="e.g. Run"
          name="habit-title"
          id="habit-title"
          required
        />

        <label htmlFor="color">Choose a color</label>
        <input type="color" name="color" id="color" />

        <label htmlFor="unit">Unit</label>
        <input
          type="text"
          placeholder="e.g. miles"
          name="unit"
          id="unit"
          required
        />

        <label htmlFor="target">Target</label>
        <input type="number" placeholder="e.g. 15" name="target" id="target" />

        <label htmlFor="notes">Notes</label>
        <input type="text" placeholder="(Optional)" name="notes" id="notes" />

        <button type="submit">Save</button>
        <button type="button">Cancel</button>
      </form>
    </div>
  );
}

function Quantitative() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  return (
    <div onClick={handleShow}>
      <h2>Measurable</h2>
      <p>
        e.x How many miles did you run today? How many pages of book did you
        read today?
      </p>
      {show && <QuantitativeForm />}
    </div>
  );
}

export default Quantitative;
