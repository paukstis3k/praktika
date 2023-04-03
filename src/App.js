import "./App.css";
import { Login } from "./Login";
import Register from "./Register";
import React, { useState } from "react";


function App() {
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


// const form = document.querySelector("form");
// const submit = form.querySelector(`button[type="submit"]`);
// submit.addEventListener("click", function(e) {
//   e.preventDefault();
// });
