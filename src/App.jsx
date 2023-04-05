import "./App.css";
import React, { useState } from "react";
import Register from "./pages/Register/Register";
import { Login } from "./pages/Login/Login";


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

