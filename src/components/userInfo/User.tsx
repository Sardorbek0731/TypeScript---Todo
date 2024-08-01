// CSS
import "./User.css";

// Images
import user from "../../assets/images/user-image/Sardorbek2007.jpg";

function User(): JSX.Element {
  return (
    <div className="user flex alignCenter justifyBetween">
      <div className="userInfo flex alignCenter">
        <img src={user} alt="User Image" />
        <span className="flex column justifyBetween">
          <h1>Sardorbek Olimov</h1>
          <h3>31.7.2007</h3>
        </span>
      </div>
    </div>
  );
}

export default User;
