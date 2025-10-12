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

            <div className="container my-5 custom-check-card">
                <ul className="custom-list">
                    <li>
                        <FaCheckCircle className="why-icon" />
                        <div className="list-text">
                            <strong>
                                Finnish Quality & Global Experience:
                            </strong>{" "}
                            Nordic standards, international project delivery,
                            Finnish language and culture expertise, local
                            meetings, General Data Protection Regulation (GDPR)
                            compliance, same time zone.
                        </div>
                    </li>

                    <li>
                        <FaCheckCircle className="why-icon" />
                        <div className="list-text">
                            <strong>Agile & Transparent Development:</strong>{" "}
                            Uses Agile/Scrum for flexible management, regular
                            sprints/demos, fast response to changes, clear
                            timelines/budgets, transparent progress tracking.
                        </div>
                    </li>

                    <li>
                        <FaCheckCircle className="why-icon" />
                        <div className="list-text">
                            <strong>Technical Excellence:</strong> 12+ years’
                            experience, certified experts (Scrum, cloud),
                            full-stack, DevOps/CI/CD, emphasis on security and
                            analytics, ongoing learning.
                        </div>
                    </li>

                    <li>
                        <FaCheckCircle className="why-icon" />
                        <div className="list-text">
                            <strong>Customer Focus:</strong> Free consultation,
                            tailored solutions, Finnish documentation,
                            training/onboarding, long-term support and
                            maintenance.
                        </div>
                    </li>

                    <li>
                        <FaCheckCircle className="why-icon" />
                        <div className="list-text">
                            <strong>Cost-Effective & Flexible Models:</strong>{" "}
                            Includes fixed-price, dedicated teams, staff
                            augmentation, retainer, and maintenance/support
                            contracts to meet diverse needs and budgets.
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default WhySection;
