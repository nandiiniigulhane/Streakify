import { useState } from "react";

function YesOrNoForm() {
  return (
    <div>
      <form>
        <label htmlFor="habit-title">Title</label>
        <input
          type="text"
          placeholder="e.g. Exercise"
          name="habit-title"
          id="habit-title"
          required
        />
        <label htmlFor="color">Choose a color</label>
        <input type="color" name="color" id="color" />
        <label htmlFor="notes">Notes</label>
        <input type="text" placeholder="(Optional)" name="notes" id="notes" />
        <button type="submit">Save</button>
        <button type="button">Cancel</button>
      </form>
    </div>
  );
}

function YesOrNo() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div onClick={handleShow}>
      <h2>Yes or No</h2>
      <p>e.x Did you run today? Did you read a book today? Did you exercise?</p>
      {show && <YesOrNoForm />}
    </div>
  );
}

export default YesOrNo;
