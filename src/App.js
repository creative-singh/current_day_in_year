const App = () => {
  const currDate = new Date();
  const currDay = currDate.getDay();
  const currMonth = currDate.getMonth();
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
        <input type="text" placeholder="0" />
      </section>
    </div>
  );
};

export default App;
