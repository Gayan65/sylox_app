import React from "react";
import imgOne from "../assets/images/management/Gayan.jpg";
import imgTwo from "../assets/images/management/Tanel.jpg";
import imgThree from "../assets/images/management/Sam.jpg";
import { useTranslation } from "react-i18next";

const Management = () => {
    const { t } = useTranslation("global");
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
                    <div className="profile-card">
                        <img
                            src={imgOne}
                            alt="Profile"
                            className="profile-img"
                        />
                        <div className="container text-container-profile">
                            <h4 className="heading-text-profile">
                                Gayan Gamage
                            </h4>
                            <p className="para-text">
                                {t("card1_designation")}
                            </p>
                        </div>
                    </div>
                    <div className="profile-card">
                        <img
                            src={imgTwo}
                            alt="Profile"
                            className="profile-img"
                        />
                        <div className="container text-container-profile">
                            <h4 className="heading-text-profile">
                                Tanel Wirilander
                            </h4>
                            <p className="para-text">
                                {t("card2_designation")}
                            </p>
                        </div>
                    </div>
                    <div className="profile-card">
                        <img
                            src={imgThree}
                            alt="Profile"
                            className="profile-img"
                        />
                        <div className="container text-container-profile">
                            <h4 className="heading-text-profile">Sam Wije</h4>
                            <p className="para-text">
                                {t("card3_designation")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Management;
