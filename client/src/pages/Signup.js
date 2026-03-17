function Signup() {
  return (
    <div className="authBox">
      <h2>Sign Up</h2>

      <input placeholder="Name" />
      <input placeholder="Email" />
      <input placeholder="Password" type="password" />

      <button>Create Account</button>
    </div>
  );
}

export default Signup;