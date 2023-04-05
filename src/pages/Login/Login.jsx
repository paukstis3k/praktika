import React, { useState } from "react";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // const user = [];


  return (
    <div className="container">
      <form className="register-form" onSubmit={handleSubmit}>
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
        <button onClick={handleSubmit} type="submit">Log in</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("register")}>
        Register
      </button>
    </div>
  );
};
