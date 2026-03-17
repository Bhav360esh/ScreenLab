import { Link } from "react-router-dom";

function Topbar() {
  return (
    <div className="topbar">

      <h2>ScreenLab</h2>

      <div className="topActions">

        <Link to="/login">
          <button className="loginBtn">Login</button>
        </Link>

        <Link to="/signup">
          <button className="signupBtn">Sign Up</button>
        </Link>

      </div>

    </div>
  );
}

export default Topbar;