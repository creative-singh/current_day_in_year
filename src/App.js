import { Route } from "react-router-dom";
import Home from "./Pages/Home";
import CurrentDayInYear from "./Pages/currentDayInYear";
import daysLeftWithDate from "./Pages/daysLeftWithDate";

const App = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/currentDayInYear"
        component={CurrentDayInYear}
      />
      <Route
        exact
        path="/daysLeftWithDate"
        component={daysLeftWithDate}
      />
    </>
  );
};

export default App;
