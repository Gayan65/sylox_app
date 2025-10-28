import React from "react";
import { FaDesktop } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Service = () => {
    const { t } = useTranslation("global");
    return (
        <div
            className="container-fluid custom-color"
            id="services-section-scroll"
        >
            <div className="container text-container">
                <h1 className="heading-text"> {t("heading_services")} </h1>
                <p className="para-text">{t("para_services")}</p>
            </div>

            <div className="container mt-5">
                <div className="d-flex flex-wrap justify-content-center gap-4">
                    <div className="service-card">
                        <div className="service-icon">
                            <FaDesktop />
                        </div>

                        <h4 className="service-title">
                            {t("heading_card1_services")}
                        </h4>

                        <ul className="service-list">
                            <li> {t("l1_card1")} </li>
                            <li>{t("l2_card1")}</li>
                            <li>{t("l3_card1")}</li>
                            <li>{t("l4_card1")}</li>
                            <li>{t("l5_card1")}</li>
                            <li>{t("l6_card1")}</li>
                            <li>{t("l7_card1")}</li>
                        </ul>

                        <div className="service-tags">
                            <span>React</span>
                            <span>Vue.js</span>
                            <span>Angular</span>
                            <span>Node.js</span>
                            <span>PHP</span>
                            <span>Python</span>
                            <span>Laravel</span>
                            <span>.NET</span>
                        </div>
                    </div>

                    <div className="service-card">
                        <div className="service-icon">
                            <FaNetworkWired />
                        </div>

                        <h4 className="service-title">
                            {t("heading_card2_services")}
                        </h4>

                        <ul className="service-list">
                            <li> {t("l1_card2")} </li>
                            <li>{t("l2_card2")}</li>
                            <li>{t("l3_card2")}</li>
                            <li>{t("l4_card2")}</li>
                            <li>{t("l5_card2")}</li>
                            <li>{t("l6_card2")}</li>
                            <li>{t("l7_card2")}</li>
                        </ul>

                        <div className="service-tags">
                            <span>Azure</span>
                            <span>AWS</span>
                            <span>Google Cloud</span>
                            <span>Kubernetes</span>
                            <span>Docker</span>
                            <span>PostgreSQL</span>
                            <span>MongoDB</span>
                            <span>Power BI</span>
                        </div>
                    </div>

                    <div className="service-card">
                        <div className="service-icon">
                            <FaMobileAlt />
                        </div>

                        <h4 className="service-title">
                            {t("heading_card3_services")}
                        </h4>

                        <ul className="service-list">
                            <li> {t("l1_card3")} </li>
                            <li>{t("l2_card3")}</li>
                            <li>{t("l3_card3")}</li>
                            <li>{t("l4_card3")}</li>
                            <li>{t("l5_card3")}</li>
                            <li>{t("l6_card3")}</li>
                            <li>{t("l7_card3")}</li>
                            <li>{t("l8_card3")}</li>
                        </ul>

                        <div className="service-tags">
                            <span>Swift</span>
                            <span>Kotlin</span>
                            <span>React Native</span>
                            <span>Flutter</span>
                            <span>Firebase</span>
                            <span>CleverTap</span>
                            <span>Adjust</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
