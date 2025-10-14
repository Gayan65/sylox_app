import React from "react";
import imgOne from "../assets/images/services/web.jpg";
import imgTwo from "../assets/images/services/mobile.jpg";
import imgThree from "../assets/images/services/eps.jpg";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
    const { t } = useTranslation("global");

    return (
        <div>
            {" "}
            <div
                className="container-fluid custom-color-gradient"
                id="portfolio-section-scroll"
            >
                <div className="container text-container">
                    <h1 className="heading-text"> {t("heading_portfolio")} </h1>
                    <p className="para-text">{t("para_portfolio")}</p>
                </div>
                <div className="container mt-5">
                    <div className="row justify-content-center g-4">
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="portfolio-card h-100">
                                <img
                                    src={imgOne}
                                    alt="Profile"
                                    className="profile-img"
                                />
                                <div className="container text-container-portfolio">
                                    <p className="para-text">
                                        An automated parking reservation web
                                        application that allows users to easily
                                        find, reserve, and manage parking spaces
                                        in real time. The system features secure
                                        user authentication, dynamic slot
                                        availability, and an intuitive interface
                                        for both customers and administrators.
                                        Built using React, Node.js, and MongoDB,
                                        it streamlines the parking process
                                        through automation and smart data
                                        management.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="portfolio-card h-100">
                                <img
                                    src={imgTwo}
                                    alt="Profile"
                                    className="profile-img"
                                />
                                <div className="container text-container-portfolio">
                                    <p className="para-text">
                                        An automated parking reservation web
                                        application that allows users to easily
                                        find, reserve, and manage parking spaces
                                        in real time. The system features secure
                                        user authentication, dynamic slot
                                        availability, and an intuitive interface
                                        for both customers and administrators.
                                        Built using React, Node.js, and MongoDB.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="portfolio-card h-100">
                                <img
                                    src={imgThree}
                                    alt="Profile"
                                    className="profile-img"
                                />
                                <div className="container text-container-portfolio">
                                    <p className="para-text">
                                        An automated parking reservation web
                                        application that allows users to easily
                                        find, reserve, and manage parking spaces
                                        in real time. The system features secure
                                        user authentication, dynamic slot
                                        availability, and an intuitive interface
                                        for both customers and administrators.
                                        Built using React, Node.js, and MongoDB,
                                        it streamlines
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="portfolio-card h-100">
                                <img
                                    src={imgThree}
                                    alt="Profile"
                                    className="profile-img"
                                />
                                <div className="container text-container-portfolio">
                                    <p className="para-text">
                                        An automated parking reservation web
                                        application that allows users to easily
                                        find, reserve, and manage parking spaces
                                        in real time. The system features secure
                                        user authentication, dynamic slot
                                        availability, and an intuitive interface
                                        for both customers and administrators.
                                        Built using React, Node.js, and MongoDB,
                                        it streamlines
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
