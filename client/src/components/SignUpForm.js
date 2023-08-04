import React, { useState, useContext } from "react";
import { UserContext } from "../context/user";
import { useHistory } from "react-router";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [role, setRole] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { setUser } = useContext(UserContext);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        password_confirmation: passwordConfirmation,
        role
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((u) => setUser(u));
        history.push("/");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div className="sign-up-container">
      <h2>Sign up for EventHandler</h2>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email </label>
          <input
            type="text"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password Confirmation </label>
          <input
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="current-password"
          />
        </div>

        <div className="form-group">
          <label htmlFor="role">Account type </label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select one</option>
            <option value="Client">Client</option>
            <option value="Planner">Planner</option>
          </select>
        </div>

        <div>
          <button className="login-signup-btn" type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
        </div>

        <div className="errors-container">
          {errors.map((err) => (
            <p key={err}>{err}</p>
          ))}
        </div>

      </form>
    </div>
  );
}

export default SignUpForm;