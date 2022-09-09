import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './SignupPage.css'
const SigninPage: React.FunctionComponent = () => {
    return (
        <Card className="loginPageCardBody" style={{ marginLeft: "auto", marginRight: "auto", top: "5vh", width: "20%", height: "90%" }}>
            <Form onSubmit={e => { }}>
                <div className="mt-5 row">
                    <div className="col"></div>
                    <div className="col" style={{ display: "flex", justifyContent: "center" }}>
                        <Form.Label style={{ fontSize: "30px", fontWeight: "bold" }}>
                            Sign up
                        </Form.Label>
                    </div>
                    <div className="col"></div>
                </div>
                <div className="mt-3 row">
                    <div className="col-1"></div>
                    <div className="col">
                        <Form.Label>First Name</Form.Label>
                    </div>
                    <div className="col-1"></div>
                </div>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col">
                        <div className="row">
                            <label id="firstNameInputBoxLabel">
                                <Form.Control className="inputBox" type="firstName" placeholder="Enter first name" />
                            </label>
                        </div>
                    </div>
                    <div className="col-1"></div>
                </div>
                <div className="mt-3 row">
                    <div className="col-1"></div>
                    <div className="col">
                        <Form.Label>Last Name</Form.Label>
                    </div>
                    <div className="col-1"></div>
                </div>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col">
                        <div className="row">
                            <label id="lastNameInputBoxLabel">
                                <Form.Control className="inputBox" type="lastName" placeholder="Enter last name" />
                            </label>
                        </div>
                    </div>
                    <div className="col-1"></div>
                </div>
                <div className="mt-3 row">
                    <div className="col-1"></div>
                    <div className="col">
                        <Form.Label>Email</Form.Label>
                    </div>
                    <div className="col-1"></div>
                </div>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col">
                        <div className="row">
                            <label id="emailInputBoxLabel">
                                <Form.Control className="inputBox" type="email" placeholder="Enter email" />
                            </label>
                        </div>
                    </div>
                    <div className="col-1"></div>
                </div>
                <div className="mt-3 row">
                    <div className="col-1"></div>
                    <div className="col">
                        <Form.Label>Birthday</Form.Label>
                    </div>
                    <div className="col-1"></div>
                </div>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col">
                        <div className="row">
                            <label id="dateInputBoxLabel">
                                <Form.Control className="dateInputBox" type="date" />
                            </label>
                        </div>
                    </div>
                    <div className="col-1"></div>
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
                                <Form.Control className="inputBox" type="username" placeholder="Enter username" />
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
                                <Form.Control className="inputBox" type="password" placeholder="Enter password" />
                            </label>
                        </div>
                    </div>
                    <div className="col-1"></div>
                </div>
                <div className="mt-5 row">
                    <div className="col-1"></div>
                    <div className="col" style={{ display: "flex", justifyContent: "center" }}>
                        <Button type="submit" id="submitButton">
                            Sign Up
                        </Button>
                    </div>
                    <div className="col-1"></div>
                </div>
            </Form>
        </Card>
    );
};

export default SigninPage;