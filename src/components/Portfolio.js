import React from "react";
import imgOne from "../assets/images/services/web.jpg";
import imgTwo from "../assets/images/services/mobile.jpg";
import imgThree from "../assets/images/services/eps.jpg";

const Portfolio = () => {
    return (
        <div>
            {" "}
            <div className="container-fluid custom-color-gradient">
                <div className="container text-container">
                    <h1 className="heading-text">Recent Projects</h1>
                    <p className="para-text">
                        Our management ensures innovation, quality, and
                        client-focused delivery in every project.
                    </p>
                </div>
                <div className="container mt-5">
                    <div className="d-flex flex-wrap justify-content-center gap-4">
                        <div className="portfolio-card">
                            <img
                                src={imgOne}
                                alt="Profile"
                                className="profile-img"
                            />
                            <div className="container text-container-portfolio">
                                <p className="para-text">Core-founder</p>
                            </div>
                        </div>
                        <div className="portfolio-card">
                            <img
                                src={imgTwo}
                                alt="Profile"
                                className="profile-img"
                            />
                            <div className="container text-container-portfolio">
                                <p className="para-text">Head of Operations</p>
                            </div>
                        </div>
                        <div className="portfolio-card">
                            <img
                                src={imgThree}
                                alt="Profile"
                                className="profile-img"
                            />
                            <div className="container text-container-portfolio">
                                <p className="para-text">Head of Technology</p>
                            </div>
                        </div>
                        <div className="portfolio-card">
                            <img
                                src={imgThree}
                                alt="Profile"
                                className="profile-img"
                            />
                            <div className="container text-container-portfolio">
                                <p className="para-text">Head of Technology</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
