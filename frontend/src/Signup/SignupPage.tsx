import React, { useContext } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './SignupPage.css'
import { useNavigate } from 'react-router-dom';
import axios from "../axios";
import loginContext from "../context/loginContext"

const SigninPage: React.FunctionComponent = () => {

    const navigate = useNavigate()
    const goBack = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => navigate('/');
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [birthday, setBirthday] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    // const msg = useContext(loginContext);
    const signup = () => {
        axios.post('/users/create', {
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "birthday": birthday,
            "username": username,
            "password": password
        })
            .then((resp) => {

                console.log(resp);
                if (resp.status == 201 || resp.status == 200) navigate('/');
            }).catch(error => console.log(error));
        // console.log(firstName, lastName, email, birthday, username, password);
        // console.log(msg);
    }
    return (
        <Card className="signUpPageCardBody" style={{ marginLeft: "auto", marginRight: "auto", top: "5vh", width: "20%", height: "90%" }}>
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
                                <Form.Control className="inputBox" type="firstName" placeholder="Enter first name" onChange={
                                    event => {
                                        setFirstName(event.target.value);
                                    }
                                } />
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
                                <Form.Control className="inputBox" type="lastName" placeholder="Enter last name" onChange={
                                    event => {
                                        setLastName(event.target.value);
                                    }
                                } />
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
                                <Form.Control className="inputBox" type="email" placeholder="Enter email" onChange={
                                    event => {
                                        setEmail(event.target.value);
                                    }
                                } />
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
                                <Form.Control className="dateInputBox" type="date" onChange={
                                    event => {
                                        setBirthday(event.target.value);
                                    }
                                } />
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
                                <Form.Control className="inputBox" type="username" placeholder="Enter username" onChange={
                                    event => {
                                        setUsername(event.target.value);
                                    }
                                } />
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
                                <Form.Control className="inputBox" type="password" placeholder="Enter password" onChange={
                                    event => {
                                        setPassword(event.target.value);
                                    }
                                } />
                            </label>
                        </div>
                    </div>
                    <div className="col-1"></div>
                </div>
                <div className="mt-5 row">
                    <div className="col-6" style={{ display: "flex", justifyContent: "right" }}>
                        <Button onClick={goBack} className="submitButton">
                            Cancel
                        </Button>
                    </div>
                    <div className="col-6" style={{ display: "flex", justifyContent: "left" }}>
                        <Button onClick={signup} className="submitButton">
                            Sign Up
                        </Button>
                    </div>
                </div>
            </Form>
        </Card>
    );
};

export default SigninPage;