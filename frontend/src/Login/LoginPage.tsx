import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
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
type LoginPageProps = {
    // number: number;
};

const LoginPage = (): JSX.Element => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const handleSignin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Sign in", username);
        navigate("/homepage")
    };

    const Signup = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
        navigate("/signup");

    return (
        <>
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
