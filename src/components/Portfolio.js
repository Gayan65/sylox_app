import React, { useState } from "react";
import cvImg from "../assets/images/portfolio/cvBuilder.png";
import weatherImg from "../assets/images/portfolio/weatherStation.png";
import parkingImg from "../assets/images/portfolio/parkReservation.png";
import bloggyImg from "../assets/images/portfolio/bloggyApp.png";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
    const { t } = useTranslation("global");
    const [activeCard, setActiveCard] = useState(null);
    const [fadeOut, setFadeOut] = useState(false);

    const showDescription = (num) => {
        setFadeOut(true);
        setTimeout(() => {
            setActiveCard(num);
            setFadeOut(false);
        }, 300);
    };

    const goBack = () => {
        setFadeOut(true);
        setTimeout(() => {
            setActiveCard(null);
            setFadeOut(false);
        }, 300);
    };

    return (
        <div
            className="container-fluid custom-color-gradient"
            id="portfolio-section-scroll"
        >
            <div className="container text-container">
                <h1 className="heading-text">{t("heading_portfolio")}</h1>
                <p className="para-text">{t("para_portfolio")}</p>
            </div>

            <div className="container min-vh-100 d-flex justify-content-center align-items-center">
                <div className="portfolio-section">
                    <div className="portfolio-grid">
                        {/* CARD 1 */}
                        <div
                            className={`portfolio-card ${
                                activeCard === 1 ? "active" : ""
                            } ${fadeOut ? "fade-out" : "fade-in"}`}
                        >
                            {activeCard === 1 ? (
                                <div className="card-content fade-in">
                                    <h3> {t("heading_card1_portfolio")} </h3>
                                    <p>{t("para_card1_portfolio")}</p>
                                    <button onClick={goBack}>
                                        {" "}
                                        {t("btn-back")}{" "}
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <img
                                        src={parkingImg}
                                        alt="Parking Reservation App"
                                        onClick={() => showDescription(1)}
                                    />
                                    <div className="overlay">
                                        <h3>{t("heading_card1_portfolio")}</h3>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* CARD 2 */}
                        <div
                            className={`portfolio-card ${
                                activeCard === 2 ? "active" : ""
                            } ${fadeOut ? "fade-out" : "fade-in"}`}
                        >
                            {activeCard === 2 ? (
                                <div className="card-content fade-in">
                                    <h3>{t("heading_card2_portfolio")}</h3>
                                    <p>{t("para_card2_portfolio")}</p>
                                    <button onClick={goBack}>
                                        {t("btn-back")}
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <img
                                        src={cvImg}
                                        alt="InstaResume App"
                                        onClick={() => showDescription(2)}
                                    />
                                    <div className="overlay">
                                        <h3>{t("heading_card2_portfolio")}</h3>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* CARD 3 */}
                        <div
                            className={`portfolio-card ${
                                activeCard === 3 ? "active" : ""
                            } ${fadeOut ? "fade-out" : "fade-in"}`}
                        >
                            {activeCard === 3 ? (
                                <div className="card-content fade-in">
                                    <h3>{t("heading_card3_portfolio")}</h3>
                                    <p>{t("para_card3_portfolio")}</p>
                                    <button onClick={goBack}>
                                        {t("btn-back")}
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <img
                                        src={bloggyImg}
                                        alt="Bloggy App"
                                        onClick={() => showDescription(3)}
                                    />
                                    <div className="overlay">
                                        <h3>{t("heading_card3_portfolio")}</h3>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* CARD 4 */}
                        <div
                            className={`portfolio-card ${
                                activeCard === 4 ? "active" : ""
                            } ${fadeOut ? "fade-out" : "fade-in"}`}
                        >
                            {activeCard === 4 ? (
                                <div className="card-content fade-in">
                                    <h3>{t("heading_card4_portfolio")}</h3>
                                    <p>{t("para_card1_portfolio")}</p>
                                    <button onClick={goBack}>
                                        {t("btn-back")}
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <img
                                        src={weatherImg}
                                        alt="Weather Station IoT"
                                        onClick={() => showDescription(4)}
                                    />
                                    <div className="overlay">
                                        <h3>{t("heading_card4_portfolio")}</h3>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
