// CSS
import "./User.css";

// Images
import user from "../../assets/user-image/Sardorbek2007.jpg";

function User(): JSX.Element {
  return (
    <div className="userInfo flex alignCenter">
      <img src={user} alt="User Image" />
      <div className="flex column justifyBetween">
        <h1>Sardorbek Olimov</h1>
        <span>31.07.2007</span>
      </div>
    </div>
  );
}

export default User;
