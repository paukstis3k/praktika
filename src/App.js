import "./App.css";
import { Register } from "./Register";
import { Login } from "./Login";
import React, { useState } from "react";





function App() {
  const form = document.querySelector("form");
  const submit = form.querySelector(`button[type="submit"]`);
  submit.addEventListener("click", function(event) {
    event.preventDefault();
  });

  const [currentform, setCurrentForm] = useState("");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      {currentform === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  );
}

export default App;
