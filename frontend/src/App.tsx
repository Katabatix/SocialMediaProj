import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./Login/LoginPage";
import background from "./loginBackground.jpg";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import SigninPage from "./Signup/SignupPage";
function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", backgroundImage: `url(${background})` }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><LoginPage /></>} />
          <Route path="/signup" element={<><SigninPage /></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
