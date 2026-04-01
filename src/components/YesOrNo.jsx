import { useState } from "react";

function YesOrNoFrom() {
  return <p>Form</p>;
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
      {show && <YesOrNoFrom />}
    </div>
  );
}

export default YesOrNo;
