import React from "react";
import "./App.css";
import LoginPage from "./Login/LoginPage";
import background from "./loginBackground.jpg";
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import SigninPage from "./Signup/SignupPage";
import HomePage from "./Home/HomePage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={
          <div style={{ width: "100vw", height: "100vh", backgroundImage: `url(${background})` }}>
            <LoginPage />
          </div>
        } />
        <Route path="/signup" element={
          <div style={{ width: "100vw", height: "100vh", backgroundImage: `url(${background})` }}>
            <SigninPage />
          </div>
        } />
        <Route path="/homepage" element={<><HomePage /></>} />
        <Route path="*" element={<Navigate to="login" replace />} />
      </Routes>
    </BrowserRouter >
  );
}

// function App() {
//   return (
//     <Routes>
//       <Route element={}>

//       </Route>
//     </Routes>
//   )
// }



export default App;
