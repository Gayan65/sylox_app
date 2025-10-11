import React from "react";
import imgOne from "../assets/images/management/Gayan.jpg";
import imgTwo from "../assets/images/management/Tanel.jpg";
import imgThree from "../assets/images/management/Sam.jpg";

const Management = () => {
    return (
        <div className="container-fluid custom-color">
            <div className="container text-container">
                <h1 className="heading-text">Meet Our Leadership</h1>
                <p className="para-text">
                    Our management ensures innovation, quality, and
                    client-focused delivery in every project.
                </p>
            </div>
            <div className="container mt-5">
                <div className="d-flex flex-wrap justify-content-center gap-4">
                    <div className="profile-card">
                        <img
                            src={imgOne}
                            alt="Profile"
                            className="profile-img"
                        />
                    </div>
                    <div className="profile-card">
                        <img
                            src={imgTwo}
                            alt="Profile"
                            className="profile-img"
                        />
                    </div>
                    <div className="profile-card">
                        <img
                            src={imgThree}
                            alt="Profile"
                            className="profile-img"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Management;
