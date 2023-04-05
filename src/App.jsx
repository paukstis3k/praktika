import "./App.css";
import React from "react";
import FormInput from "./components/FormInput";
import { useState } from "react";

const App = (e) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    errorMessage: "",
  });


  const inputs = [
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Email must be in valid form (email@.com)",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should have 6 symbols at minimum, and have 1, uppercase letter and 1 number",
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "confirmPassword",
      placeholder: "Confirm password",
      errorMessage: "Confirm password must be same as password",
      required: true,
      pattern: values.password,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);
  return (
    <div className="app">
      <div className="container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
              />
              ))}

          <button>Register</button>
          <button className="link-btn" onClick={() => e.onFormSwitch("login")}>
            Back to Login
          </button>
        </form>

      </div>
    </div>
  );
};

export default App;

// const form = document.querySelector("form");
// const submit = form.querySelector(`button[type="submit"]`);
// submit.addEventListener("click", function(e) {
//   e.preventDefault();
// });
