import React, { useContext, useEffect, useRef, useState } from "react";
import { Navbar } from "react-bootstrap";
import { Navigate } from "react-router";
import loginContext from "../context/loginContext";
import HeaderNav from "../HeaderNav/HeaderNav";
import { useNavigate } from 'react-router-dom';
import MakePost from "../MakePost/MakePost";
import axios from "../axios";
import { Post } from "../types";

const HomePage = (): JSX.Element => {
  const [posts, setPosts] = useState<Post[]>([]);
  const userCon = useContext(loginContext);
  const navigate = useNavigate()
  const logout = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    userCon.update?.({
      username: "",
      password: ""
    });
    navigate('/');
  }
  const getPosts = async () => {
    await axios.get('/posts/getPosts')
      .then((resp) => {
        console.log(resp);
        var postArr: Post[] = [];
        resp.data.forEach((post: Post) => {
          postArr.push(post);
        });
        console.log(postArr);
        setPosts(postArr);
      }).catch(error => console.log(error));
  }

  useEffect(() => {
    const interval = setInterval(getPosts, 10 * 1000);
    return () => clearInterval(interval);
  }, [])



  return (
    <div
      style={{ width: "100vw", height: "100vh", backgroundColor: "#f0f2f5" }}
    >
      <button onClick={logout}>Log Out</button>
      <div className="row" style={{ width: "100vw", height: "7vh", backgroundColor: "#ffffff", justifyContent: "right" }}>
        {/* <HeaderNav></HeaderNav> */}
        Welcome, {userCon?.user?.username}
      </div>
      <div className="row">
        <div className="col-2">
        </div>
        <div className="col">
          <MakePost></MakePost>
        </div>
        <div className="col-2">
          <div>
            {
              posts.map(post => {
                return (<div>
                  {post.postContent}
                </div>);
              })
            }
          </div>
        </div>
      </div>
    </div >
  );
};

export default HomePage;
