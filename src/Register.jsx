import React, { useState } from "react";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const user = [];

  return (
    <div className="container">
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="name" id="name" name="name" placeholder="Name" />
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
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Register
      </button>
    </div>
  );
};
