import { useState } from "react";
import "../styles/global.css";

function AuthModal({ isOpen, onClose, defaultRole }) {

  const [isLogin, setIsLogin] = useState(false);
  const [role, setRole] = useState(defaultRole || "audience");

  if (!isOpen) return null;

  return (
    <div className="modalOverlay">

      <div className="authModal">

        {/* CLOSE BUTTON */}
        <span className="closeBtn" onClick={onClose}>✕</span>

        <h2>{isLogin ? "Login" : "Create Account"}</h2>

        {/* ROLE SELECT */}
        <div className="roleSwitch">

          <button
            className={role === "audience" ? "activeRole" : ""}
            onClick={() => setRole("audience")}
          >
            Audience
          </button>

          <button
            className={role === "creator" ? "activeRole" : ""}
            onClick={() => setRole("creator")}
          >
            Creator
          </button>

        </div>

        {/* FORM */}

        {!isLogin && (
          <input placeholder="Full Name" />
        )}

        <input placeholder="Email" />
        <input placeholder="Password" type="password" />

        <button className="submitBtn">
          {isLogin ? "Login" : "Sign Up"} as {role}
        </button>

        {/* TOGGLE */}

        <p className="toggleText">
          {isLogin ? "Don't have an account?" : "Already have an account?"}

          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? " Sign Up" : " Login"}
          </span>
        </p>

      </div>

    </div>
  );
}

export default AuthModal;