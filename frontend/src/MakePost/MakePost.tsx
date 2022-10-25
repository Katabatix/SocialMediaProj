import React, { useContext } from "react";
import { Navbar } from "react-bootstrap";
import { Navigate } from "react-router";
import HeaderNav from "../HeaderNav/HeaderNav";
import { useNavigate } from 'react-router-dom';
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import axios from "../axios";
import loginContext from "../context/loginContext";

const MakePost = (): JSX.Element => {
    const userCon = useContext(loginContext);
    const [postContent, setPostContent] = React.useState("");
    const test = () => {
        console.log(postContent);
    }
    const handleSubmit = () => {
        // console.log(postContent);
        axios.post('/posts/create', {
            "username": userCon?.user?.username,
            "postContent": postContent
        })
            .then((resp) => {
                console.log(resp);
            }).catch(error => console.log(error));
    }
    return (
        <div>
            <form>
                <label>Make your post
                    <Form.Control className="inputBox" type="lastName" placeholder="Enter last name" onChange={
                        event => {
                            setPostContent(event.target.value);
                        }
                    } />
                </label>
                <input type="submit" value="Submit" onClick={handleSubmit} />
            </form>
        </div>
    )
}

export default MakePost;