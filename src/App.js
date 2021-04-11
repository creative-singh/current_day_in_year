import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const currDate = new Date();
  const daysInWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthsInYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [currDay, setCurrDay] = useState(0);
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    setCurrDay(
      Math.ceil(
        (currDate -
          new Date(currDate.getFullYear(), 0, 1)) /
          86400000
      )
    );
    setDaysLeft(
      Math.ceil(
        (new Date(currDate.getFullYear(), 12, 0) -
          currDate) /
          86400000
      )
    );
  }, []);

  return (
    <div>
      <header>
        <h1>Current Day in Year</h1>
        <hr />
      </header>
      <section>
        <h5>
          Today is{" "}
          {`${daysInWeek[currDate.getDay()]}, 
          ${monthsInYear[currDate.getMonth()]} 
          ${currDate.getDate()}, 
          ${currDate.getFullYear()} is ...`}
        </h5>
        <div className="container">
          <p>Day {currDay}</p>
        </div>
        <p className="smText">
          Day of the year is a number between 1 and 365 (in
          2021), January 1 is day 1.
        </p>
        <p className="smText">
          After today <strong>{daysLeft}</strong> days are
          remaining in this year.
        </p>
      </section>
    </div>
  );
};

export default App;
