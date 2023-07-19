import React, { useState, useContext } from "react";
import { UserContext } from "../context/user";
//import { useHistory } from "react-router";

function ClientSignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { setUser } = useContext(UserContext);
  //const history = useHistory();

  function handleSubmit(e) {
    //this will be a request to clients or planners
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/client-signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((u) => setUser(u));
        //history.push("/");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div className="sign-up-container">
      <h2>Sign up for UpFed</h2>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username </label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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

        <div>
          <button className="sign-up-in-btn" type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
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

export default ClientSignUpForm;