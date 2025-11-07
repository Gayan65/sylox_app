import React from "react";
import visionImg from "../assets/images/team/IMG_4957.jpg";
import missionImg from "../assets/images/team/IMG_4903.jpg";
import teamCulture from "../assets/images/team/IMG_4436.jpeg";
import howWorkImg from "../assets/images/team/IMG_4350.jpeg";
import ourCommitImg from "../assets/images/team/IMG_4433.jpg";

import { useTranslation } from "react-i18next";

const AboutUs = () => {
    const { t } = useTranslation("global");

    return (
        <div
            className="container-fluid custom-color-gradient"
            id="why-section-scroll"
        >
            <div className="container text-container">
                <h1 className="heading-text"> {t("title_about")} </h1>
                <p className="para-text">{t("para_about")}</p>
            </div>
            <div className="container mt-5">
                <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-bs-ride="carousel"
                    data-bs-interval="8000"
                >
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="3"
                            aria-label="Slide 4"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="4"
                            aria-label="Slide 5"
                        ></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item carousel-item-custom active ">
                            <>
                                <section className="learn-section">
                                    <div className="learn-container">
                                        <div className="learn-image">
                                            <img
                                                src={visionImg}
                                                alt="People learning together"
                                            />
                                        </div>
                                        <div className="learn-content">
                                            <h2> {t("card1_title_about")} </h2>
                                            <p>{t("card1_para_about")}</p>
                                        </div>
                                    </div>
                                </section>
                            </>
                        </div>
                        <div className="carousel-item carousel-item-custom">
                            <>
                                <section className="learn-section">
                                    <div className="learn-container">
                                        <div className="learn-image">
                                            <img
                                                src={missionImg}
                                                alt="People learning together"
                                            />
                                        </div>
                                        <div className="learn-content">
                                            <h2> {t("card2_title_about")} </h2>
                                            <p>{t("card2_para_about")}</p>
                                        </div>
                                    </div>
                                </section>
                            </>
                        </div>
                        <div className="carousel-item carousel-item-custom">
                            <>
                                <section className="learn-section">
                                    <div className="learn-container">
                                        <div className="learn-image">
                                            <img
                                                src={teamCulture}
                                                alt="People learning together"
                                            />
                                        </div>
                                        <div className="learn-content">
                                            <h2> {t("card3_title_about")} </h2>
                                            <p>{t("card3_para_about")}</p>
                                        </div>
                                    </div>
                                </section>
                            </>
                        </div>
                        <div className="carousel-item carousel-item-custom">
                            <>
                                <section className="learn-section">
                                    <div className="learn-container">
                                        <div className="learn-image">
                                            <img
                                                src={howWorkImg}
                                                alt="People learning together"
                                            />
                                        </div>
                                        <div className="learn-content">
                                            <h2> {t("card4_title_about")} </h2>
                                            <p>{t("card4_para_about")}</p>
                                        </div>
                                    </div>
                                </section>
                            </>
                        </div>
                        <div className="carousel-item carousel-item-custom">
                            <>
                                <section className="learn-section">
                                    <div className="learn-container">
                                        <div className="learn-image">
                                            <img
                                                src={ourCommitImg}
                                                alt="People learning together"
                                            />
                                        </div>
                                        <div className="learn-content">
                                            <h2> {t("card5_title_about")} </h2>
                                            <p>{t("card5_para_about")}</p>
                                        </div>
                                    </div>
                                </section>
                            </>
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
