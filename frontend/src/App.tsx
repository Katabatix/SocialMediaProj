import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./Login/LoginPage";

function App() {
  return (
    <div style={{ margin: "100px", width: "100%", height: "100%", backgroundColor: "yellow" }}>

      <LoginPage number={1} />
    </ div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
