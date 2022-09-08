import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './LoginPage.css'
type LoginPageProps = {
    // number: number;
}


const LoginPage = (): JSX.Element => {
    const handleSubmit = () => {

    }

    return (<>
        <Card style={{ marginLeft: "40vw", top: "15vh", width: "20%", height: "70%" }}>
            <Form onSubmit={handleSubmit}>
                <div className="mt-5 row">
                    <div className="col"></div>
                    <div className="col" style={{ display: "flex", justifyContent: "center" }}>
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
                <div className="mt-1 row">
                    <div className="col-1"></div>
                    <div className="col">
                        <div className="float-right">
                            <span style={{ float: "right", fontSize: "12px" }}>Forgot Password?</span>
                        </div>
                    </div>
                    <div className="col-1"></div>
                </div>
                <div className="row" style={{ marginTop: "10vh" }}>
                    <div className="col-1"></div>
                    <div className="col" style={{ display: "flex", justifyContent: "center" }}>
                        <button id="submitButton">
                            Sign in
                        </button>
                    </div>
                    <div className="col-1"></div>
                </div>
                <div className="row" style={{ marginTop: "10vh" }}>
                    <div className="col"></div>
                    <div className="col" style={{ display: "flex", justifyContent: "center" }}>
                        <Form.Label>
                            Or Sign Up
                        </Form.Label>
                    </div>
                    <div className="col"></div>
                </div>
                <div className="mt-1 row">
                    <div className="col-1"></div>
                    <div className="col" style={{ display: "flex", justifyContent: "center" }}>
                        <button id="signUpButton">
                            Sign in
                        </button>
                    </div>
                    <div className="col-1"></div>
                </div>
            </Form>
        </Card>


    </>)
}

export default LoginPage;