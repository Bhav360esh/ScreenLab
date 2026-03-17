import { Link } from "react-router-dom";
import "../styles/global.css";

function Topbar() {
  return (
    <div className="topbar modernTopbar">

      <h2 className="logo">ScreenLab</h2>

      <div className="topActions">

        <Link to="/login">
          <button className="loginBtn modernBtn">
            Login
          </button>
        </Link>

        <Link to="/signup">
          <button className="signupBtn modernBtn primaryBtn">
            Sign Up
          </button>
        </Link>

      </div>

    </div>
  );
}

export default Topbar;