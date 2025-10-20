import React, { useState } from "react";
import imgOne from "../assets/images/management/Gayan.jpg";
import imgTwo from "../assets/images/management/Tanel.jpg";
import imgThree from "../assets/images/management/Sam.jpg";
import imgTanel from "../assets/images/management/TanelClose.png";
import imgGayan from "../assets/images/management/GayanClose.png";
import imgSam from "../assets/images/management/SamClose.png";
import { useTranslation } from "react-i18next";

const Management = () => {
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
            id="management-section-scroll"
        >
            <div className="container text-container">
                <h1 className="heading-text"> {t("heading_management")} </h1>
                <p className="para-text">{t("para_management")}</p>
            </div>
            <div className="container mt-5">
                <div className="d-flex flex-wrap justify-content-center gap-4">
                    {/* CARD 1 */}
                    <div
                        className={`profile-card ${
                            activeCard === 1 ? "active" : ""
                        } ${fadeOut ? "fade-out" : "fade-in"}`}
                    >
                        {activeCard === 1 ? (
                            <div className="profile-card-back fade-in">
                                <div className="profile-img-container">
                                    <img
                                        src={imgGayan}
                                        alt="Profile"
                                        className="profile-img-back"
                                    />
                                    <span className="status-dot"></span>
                                </div>

                                <h2 className="profile-name">Gayan Gamage</h2>
                                <p className="profile-role">
                                    {" "}
                                    {t("card1_designation")}{" "}
                                </p>

                                <p className="profile-description">
                                    {t("card1_description")}
                                </p>

                                <div className="profile-socials">
                                    <div className="social-item">
                                        <a
                                            href="https://www.linkedin.com/in/gayangamage/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="social-link"
                                        >
                                            <img
                                                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
                                                alt="LinkedIn"
                                                className="social-icon"
                                            />
                                            <span>Gayan Gamage</span>
                                        </a>
                                    </div>
                                </div>

                                <button onClick={goBack} className="mt-5">
                                    {" "}
                                    {t("btn-back")}{" "}
                                </button>
                            </div>
                        ) : (
                            <>
                                <img
                                    src={imgOne}
                                    alt="Profile"
                                    className="profile-img"
                                    onClick={() => showDescription(1)}
                                />
                                <div className="container text-container-profile">
                                    <h4 className="heading-text-profile">
                                        Gayan Gamage
                                    </h4>
                                    <p className="para-text">
                                        {t("card1_designation")}
                                    </p>
                                </div>
                            </>
                        )}
                    </div>

                    {/* CARD 2 */}
                    <div
                        className={`profile-card ${
                            activeCard === 2 ? "active" : ""
                        } ${fadeOut ? "fade-out" : "fade-in"}`}
                    >
                        {activeCard === 2 ? (
                            <div className="profile-card-back fade-in">
                                <div className="profile-img-container">
                                    <img
                                        src={imgTanel}
                                        alt="Profile"
                                        className="profile-img-back"
                                    />
                                    <span className="status-dot"></span>
                                </div>

                                <h2 className="profile-name">
                                    Tanel Wirilander
                                </h2>
                                <p className="profile-role">
                                    {" "}
                                    {t("card2_designation")}{" "}
                                </p>

                                <p className="profile-description">
                                    {t("card2_description")}
                                </p>

                                <div className="profile-socials">
                                    <div className="social-item">
                                        <img
                                            src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
                                            alt="LinkedIn"
                                            className="social-icon"
                                        />
                                        <span>Tanel Wirilander</span>
                                    </div>
                                </div>

                                <button onClick={goBack} className="mt-5">
                                    {" "}
                                    {t("btn-back")}{" "}
                                </button>
                            </div>
                        ) : (
                            <>
                                {" "}
                                <img
                                    src={imgTwo}
                                    alt="Profile"
                                    className="profile-img"
                                    onClick={() => showDescription(2)}
                                />
                                <div className="container text-container-profile">
                                    <h4 className="heading-text-profile">
                                        Tanel Wirilander
                                    </h4>
                                    <p className="para-text">
                                        {t("card2_designation")}
                                    </p>
                                </div>
                            </>
                        )}
                    </div>

                    {/* CARD 3 */}
                    <div
                        className={`profile-card ${
                            activeCard === 3 ? "active" : ""
                        } ${fadeOut ? "fade-out" : "fade-in"}`}
                    >
                        {activeCard === 3 ? (
                            <div className="profile-card-back fade-in">
                                <div className="profile-img-container">
                                    <img
                                        src={imgSam}
                                        alt="Profile"
                                        className="profile-img-back"
                                    />
                                    <span className="status-dot"></span>
                                </div>

                                <h2 className="profile-name">Sam Wije</h2>
                                <p className="profile-role">
                                    {t("card3_designation")}
                                </p>

                                <p className="profile-description">
                                    {t("card3_description")}
                                </p>

                                <div className="profile-socials">
                                    <div className="social-item">
                                        <img
                                            src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
                                            alt="LinkedIn"
                                            className="social-icon"
                                        />
                                        <span>Sam Wije</span>
                                    </div>
                                </div>

                                <button onClick={goBack} className="mt-5">
                                    {" "}
                                    {t("btn-back")}{" "}
                                </button>
                            </div>
                        ) : (
                            <>
                                <img
                                    src={imgThree}
                                    alt="Profile"
                                    className="profile-img"
                                    onClick={() => showDescription(3)}
                                />
                                <div className="container text-container-profile">
                                    <h4 className="heading-text-profile">
                                        Sam Wije
                                    </h4>
                                    <p className="para-text">
                                        {t("card3_designation")}
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Management;
