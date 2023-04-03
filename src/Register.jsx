import React, { useState } from "react";

const Register = (e) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleEmailChange = (e) => {
    const input = e.target.value;
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
    if (isValid) {
      setEmail(input);
    }
  };
  const handlePasswordChange = (e) => {
    const input = e.target.value;
    const isValid = input.length >= 8;
    if (isValid) {
      setPassword(input);
    }
  };

  return (
    <div className="container">
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="name"
          id="name"
          name="name"
          placeholder="Name"
        />
        <label htmlFor="email">Email: </label>
        <input
          value={email}
          onChange={() => setEmail(handleEmailChange)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password: </label>
        <input
          value={password}
          onChange={() => setPassword(handlePasswordChange)}
          type="password"
          placeholder="*******"
          id="password"
          name="password"
        />
        <button type="submit">Register</button>
      </form>
      <button className="link-btn" onClick={() => e.onFormSwitch("login")}>
        Back to login
      </button>
    </div>
  );
};

export default Register;
