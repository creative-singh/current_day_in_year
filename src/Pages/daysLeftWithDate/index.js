import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [date, setDate] = useState("");
  const [daysLeft, setDaysLeft] = useState(0);

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  useEffect(() => {
    console.log("running");
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
    // setDaysLeft(
    //   Math.ceil(
    //     (date - new Date(date.slice(0, 4), 0, 1)) / 86400000
    //   )
    // );
    let currDate = new Date();
    // currDate = ;
    let myVal;
    console.log(
      (currDate - new Date(currDate.getFullYear(), 0, 1)) /
        86400000
    );
    console.log(
      (currDate - new Date(date.slice(0, 4), 0, 1)) /
        86400000
    );
    console.log(currDate);
  }, [date]);

  return (
    <div>
      <h1>Days left in your bday</h1>
      <hr />
      <form>
        <input
          type="date"
          // type="text"
          value={date}
          onChange={dateChangeHandler}
        />
      </form>
      <p>{daysLeft}</p>

      <footer>
        <Link to="/">Home</Link>
      </footer>
    </div>
  );
};

export default Index;
