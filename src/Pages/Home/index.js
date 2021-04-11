import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div>
      <h1>Current Day App</h1>
      <h5>A Calender Manage App</h5>
      <hr />
      <div className="myClass"></div>
      <div className="row">
        <div className="col-6">
          <Link to="/currentDayInYear">
            Tell me How Many Days Left In This Year
          </Link>
        </div>
        <div className="col-6">
          <Link to="/daysLeftWithDate">
            Tell me How Many Days Left In My Birthday
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
