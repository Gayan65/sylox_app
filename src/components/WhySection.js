import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const WhySection = () => {
    return (
        <div className="container-fluid custom-color">
            <div className="container text-container">
                <h1 className="heading-text">Why Sylox ?</h1>
                <p className="para-text text-start">
                    Based in Finland, we combine Nordic design principles with
                    cutting-edge technology to deliver exceptional software
                    solutions. Our team of experienced developers is committed
                    to quality, innovation and client satisfaction.
                </p>
            </div>

            <div className="container mt-5 custom-check-card">
                <div className="feature-list">
                    <div className="feature-item">
                        <div className="feature-text">
                            <strong>
                                <FaCheckCircle className="why-icon me-3" />
                                Finnish Quality & Global Experience:
                            </strong>{" "}
                            Nordic standards, international project delivery,
                            Finnish language and culture expertise, local
                            meetings, General Data Protection Regulation (GDPR)
                            compliance, same time zone.
                        </div>
                    </div>
                    <div className="feature-item">
                        <div className="feature-text">
                            <strong>
                                {" "}
                                <FaCheckCircle className="why-icon me-3" />
                                Agile & Transparent Development:
                            </strong>{" "}
                            Uses Agile/Scrum for flexible management, regular
                            sprints/demos, fast response to changes, clear
                            timelines/budgets, transparent progress tracking.
                        </div>
                    </div>
                    <div className="feature-item">
                        <div className="feature-text">
                            <strong>
                                {" "}
                                <FaCheckCircle className="why-icon me-3" />
                                Technical Excellence:
                            </strong>{" "}
                            12+ years’ experience, certified experts (Scrum,
                            cloud), full-stack, DevOps/CI/CD, emphasis on
                            security and analytics, ongoing learning.
                        </div>
                    </div>
                    <div className="feature-item">
                        <div className="feature-text">
                            <strong>
                                {" "}
                                <FaCheckCircle className="why-icon me-3" />
                                Customer Focus:
                            </strong>{" "}
                            Free consultation, tailored solutions, Finnish
                            documentation, training/onboarding, long-term
                            support and maintenance.
                        </div>
                    </div>
                    <div className="feature-item">
                        <div className="feature-text">
                            <strong>
                                {" "}
                                <FaCheckCircle className="why-icon me-3" />
                                Cost-Effective & Flexible Models:
                            </strong>{" "}
                            Includes fixed-price, dedicated teams, staff
                            augmentation, retainer, and maintenance/support
                            contracts to meet diverse needs and budgets.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhySection;
