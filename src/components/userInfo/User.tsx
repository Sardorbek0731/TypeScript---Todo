// CSS
import "./User.css";

// Images
import user from "../../assets/images/user-image/Sardorbek2007.jpg";

// Icon
import calendar from "../../assets/icons/calendar.png";

function User(): JSX.Element {
  return (
    <div className="row flex alignCenter justifyBetween">
      <div className="userInfo flex alignCenter">
        <img src={user} alt="User Image" />
        <span className="flex column justifyBetween">
          <h1>Sardorbek Olimov</h1>
          <h3>31.07.2007</h3>
        </span>
      </div>
      <div className="date flex alignCenter">
        <img src={calendar} alt="Calendar Icon" />
        <span className="flex column justifyBetween">
          <h1 className="day">20</h1>
          <h3 className="year">February, 2024</h3>
        </span>
      </div>
    </div>
  );
}

export default User;
