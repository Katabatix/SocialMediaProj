import React, { useState, useContext, MouseEventHandler } from "react";
import { Button, Card, Form } from "react-bootstrap";
import loginContext from "../context/loginContext";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  Link,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./LoginPage.css";
import SigninPage from "../Signup/SignupPage";
import axios from "../axios";

type LoginPageProps = {
  // number: number;
};

const LoginPage = (): JSX.Element => {
  const context = useContext(loginContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSignin = (e: React.FormEvent<HTMLFormElement>) => {
    // console.log(e);
    e.preventDefault();
    axios
      .post("/users/login", {
        username: username,
        password: password,
      })
      .then((resp) => {
        console.log(resp);

        if (
          (resp.status === 201 || resp.status === 200) &&
          context.update !== undefined
        )
          context.update({
            username: username,
            password: password,
          });
        navigate("/homepage");
      })
      .catch((error) => console.log(error));
  };

  const Signup = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    // console.log(msg);
    console.log(context.user);
    navigate("/signup");
  };

  // const testing = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => { console.log(msg) };
  return (
    <>
      {/* {{ msg }} */}
      <Card
        className="loginPageCardBody"
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          top: "15vh",
          width: "20%",
          height: "70%",
        }}
      >
        <Form onSubmit={(e) => handleSignin(e)}>
          <div className="mt-5 row">
            <div className="col"></div>
            <div
              className="col"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Form.Label style={{ fontSize: "30px", fontWeight: "bold" }}>
                Login
              </Form.Label>
            </div>
            <div className="col"></div>
          </div>
          <div className="mt-3 row">
            <div className="col-1"></div>
            <div className="col">
              <Form.Label>Username</Form.Label>
            </div>
            <div className="col-1"></div>
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col">
              <div className="row">
                <label id="usernameInputBoxLabel">
                  <Form.Control
                    className="inputBox"
                    type="username"
                    placeholder="Enter username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </label>
              </div>
            </div>
            <div className="col-1"></div>
          </div>
          <div className="mt-3 row">
            <div className="col-1"></div>
            <div className="col">
              <Form.Label>Password</Form.Label>
            </div>
            <div className="col-1"></div>
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col">
              <div className="row">
                <label id="passwordInputBoxLabel">
                  <Form.Control
                    className="inputBox"
                    type="password"
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
              </div>
            </div>
            <div className="col-1"></div>
          </div>
          <div className="mt-1 row">
            <div className="col-1"></div>
            <div className="col">
              <div className="float-right">
                <span style={{ float: "right", fontSize: "12px" }}>
                  Forgot Password?
                </span>
              </div>
            </div>
            <div className="col-1"></div>
          </div>
          <div className="mt-4 row">
            <div className="col-1"></div>
            <div
              className="col"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Button type="submit" className="submitButton">
                Sign in
              </Button>
            </div>
            <div className="col-1"></div>
          </div>
          <div className="mt-5 row">
            <div className="col"></div>
            <div
              className="col"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Form.Label>Or Sign Up</Form.Label>
            </div>
            <div className="col"></div>
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div
              className="col"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <button
                className="signUpButton"
                onClick={(event) => Signup(event)}
              >
                Sign up
              </button>
            </div>
            <div className="col-1"></div>
          </div>
        </Form>
      </Card>
    </>
  );
};

export default LoginPage;
