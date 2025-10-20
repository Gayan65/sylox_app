import React from "react";
import img1 from "../assets/images/hero/2.jpg";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
    const { t } = useTranslation("global");

    return (
        <div className="container-fluid custom-color-gradient">
            <div className="container text-container">
                <h1 className="heading-text"> {t("heading_management")} </h1>
                <p className="para-text">{t("para_management")}</p>
            </div>
            <div className="container mt-5">
                <div id="carouselExampleIndicators" className="carousel slide">
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
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item carousel-item-custom active ">
                            <>
                                <section className="learn-section">
                                    <div className="learn-container">
                                        <div className="learn-image">
                                            <img
                                                src={img1}
                                                alt="People learning together"
                                            />
                                        </div>
                                        <div className="learn-content">
                                            <h2>Learn with Us!</h2>
                                            <p>
                                                Quis viverra nibh cras pulvinar
                                                mattis nunc sed. Lacus sed
                                                turpis tincidunt id aliquet
                                                risus feugiat in. Auctor augue
                                                mauris augue neque gravida in
                                                fermentum et. Feugiat in
                                                fermentum posuere urna.
                                            </p>
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
                                                src={img1}
                                                alt="People learning together"
                                            />
                                        </div>
                                        <div className="learn-content">
                                            <h2>Learn with Us!</h2>
                                            <p>
                                                Quis viverra nibh cras pulvinar
                                                mattis nunc sed. Lacus sed
                                                turpis tincidunt id aliquet
                                                risus feugiat in. Auctor augue
                                                mauris augue neque gravida in
                                                fermentum et. Feugiat in
                                                fermentum posuere urna.
                                            </p>
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
                                                src={img1}
                                                alt="People learning together"
                                            />
                                        </div>
                                        <div className="learn-content">
                                            <h2>Learn with Us!</h2>
                                            <p>
                                                Quis viverra nibh cras pulvinar
                                                mattis nunc sed. Lacus sed
                                                turpis tincidunt id aliquet
                                                risus feugiat in. Auctor augue
                                                mauris augue neque gravida in
                                                fermentum et. Feugiat in
                                                fermentum posuere urna.
                                            </p>
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
