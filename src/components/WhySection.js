import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const WhySection = () => {
    const { t } = useTranslation("global");

    return (
        <div className="container-fluid custom-color" id="why-section-scroll">
            <div className="container text-container">
                <h1 className="heading-text"> {t("heading_why")} </h1>
                <p className="para-text text-start">{t("para_why")}</p>
            </div>

            <div className="container my-5 custom-check-card">
                <ul className="custom-list">
                    <li>
                        <FaCheckCircle className="why-icon" />
                        <div className="list-text">
                            <strong>{t("l1_why_strong")}</strong>{" "}
                            {t("l1_why_normal")}
                        </div>
                    </li>

                    <li>
                        <FaCheckCircle className="why-icon" />
                        <div className="list-text">
                            <strong>{t("l2_why_strong")}</strong>{" "}
                            {t("l2_why_normal")}
                        </div>
                    </li>

                    <li>
                        <FaCheckCircle className="why-icon" />
                        <div className="list-text">
                            <strong>{t("l3_why_strong")}</strong> 12+ years’
                            {t("l3_why_normal")}
                        </div>
                    </li>

                    <li>
                        <FaCheckCircle className="why-icon" />
                        <div className="list-text">
                            <strong>{t("l4_why_strong")}</strong> Free
                            consultation,
                            {t("l4_why_normal")}
                        </div>
                    </li>

                    <li>
                        <FaCheckCircle className="why-icon" />
                        <div className="list-text">
                            <strong>{t("l5_why_strong")}</strong>{" "}
                            {t("l5_why_normal")}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default WhySection;
