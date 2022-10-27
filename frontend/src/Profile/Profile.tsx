import { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import loginContext from "../context/loginContext";
import { UserInfo } from "../types";
import "./Profile.css";

const Profile = (): JSX.Element => {
  const user = useContext(loginContext);

  const userInfo: UserInfo = {
    username: "Ilectric",
    email: "its.ilectric@gmail.com",
    firstName: "Nathan",
    lastName: "Hui",
    birthday: new Date(),
    status: "Ouch.",
  };

  return (
    <>
      <div className="Profile">
        <Row>
          <img
            src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
            alt="profile pic"
            className="profile-pic"
          />
          <Col>
            <b style={{ fontSize: "30px" }}>{userInfo.username}</b>
            <p>{userInfo.status}</p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Profile;
