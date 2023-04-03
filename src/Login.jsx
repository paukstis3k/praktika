import React, { useState } from "react";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password: </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="*******"
          id="password"
          name="password"
        />
        <button type="submit">Log in</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("register")}>
        Or register here
      </button>
    </div>
  );
};
