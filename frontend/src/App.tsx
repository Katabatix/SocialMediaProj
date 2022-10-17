import React, { useState, useMemo } from "react";
import "./App.css";
import LoginPage from "./Login/LoginPage";
import background from "./loginBackground.jpg";
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import SigninPage from "./Signup/SignupPage";
import HomePage from "./Home/HomePage";
import loginContext from "./context/loginContext";
import { User, UserContext } from "./types";
function App() {
  const [user, setUser] = useState<User>({
    username: "",
    password: "",
  });

  let context: UserContext = {
    user: user,
    update: (user: User) => setUser(user),
  };

  return (
    <loginContext.Provider value={context}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={
              <div
                style={{
                  width: "100vw",
                  height: "100vh",
                  backgroundImage: `url(${background})`,
                }}
              >
                <LoginPage />
              </div>
            }
          />
          <Route
            path="/signup"
            element={
              <div
                style={{
                  width: "100vw",
                  height: "100vh",
                  backgroundImage: `url(${background})`,
                }}
              >
                <SigninPage />
              </div>
            }
          />
          <Route
            path="/homepage"
            element={
              <>
                <HomePage />
              </>
            }
          />
          <Route path="*" element={<Navigate to="login" replace />} />
        </Routes>
      </BrowserRouter>
    </loginContext.Provider>
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
