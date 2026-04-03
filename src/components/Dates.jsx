import { useState, useEffect } from "react";

function Dates({ date }) {
  const [dateList, setDateList] = useState([]);

  const retrieveDates = () => {
    const tempList = [];
    for (let i = 0; i < 5; i++) {
      const temp = new Date(date);
      temp.setDate(temp.getDate() - i);
      tempList.push(temp);
    }
    setDateList(tempList);
  };

  useEffect(() => {
    retrieveDates();
  }, [date]);

  return (
    <div>
      {dateList.map((current, index) => (
        <div key={index}>{current.toDateString()}</div>
      ))}
    </div>
  );
}

export default Dates;
