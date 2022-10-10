import React from 'react';
import { Navbar } from 'react-bootstrap';
import HeaderNav from '../HeaderNav/HeaderNav';

const HomePage = (): JSX.Element => {
    return (
        <div style={{ width: "100vw", height: "100vh", backgroundColor: "#f0f2f5" }}>
            <div style={{ width: "100vw", height: "7vh" }}>
                <HeaderNav></HeaderNav>
            </div>
            <div className="row">
                <div className="col-2">
                    <Navbar></Navbar>
                </div>
                <div className="col">
                    asdasdad
                </div>
                <div className="col-2">
                    qweqeqeqacsfca
                </div>
            </div>
        </div>
    )
}

export default HomePage;