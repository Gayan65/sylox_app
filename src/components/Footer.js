import React from "react";
import logo from "../assets/images/logo/Sylox Logo White text co.png";
import { useTranslation } from "react-i18next";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
    const { t } = useTranslation("global");
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section about">
                        <div className="logo">
                            <img src={logo} alt="Logo" />
                        </div>
                        <p> Sylox Solutions, {t("para_footer")} 3563729-8</p>
                        <div className="socials">
                            <a href="/">
                                <FaFacebook />
                            </a>
                            <a href="/">
                                <FaTwitter />
                            </a>
                            <a href="/">
                                <FaInstagram />
                            </a>
                            <a href="/">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h3 className="custom-footer-text"> {t("company")} </h3>
                        <ul>
                            <li>
                                <Link
                                    className="scroll-link"
                                    activeClass="active-link"
                                    to="heroCarousel"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={500}
                                >
                                    {t("home_nav")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="scroll-link"
                                    activeClass="active-link"
                                    to="why-section-scroll"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={500}
                                >
                                    {t("about_nav")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="scroll-link"
                                    activeClass="active-link"
                                    to="services-section-scroll"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={500}
                                >
                                    {t("services_nav")}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3 className="custom-footer-text">
                            {" "}
                            {t("business")}{" "}
                        </h3>
                        <ul>
                            <li>
                                <Link
                                    className="scroll-link"
                                    activeClass="active-link"
                                    to="portfolio-section-scroll"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={500}
                                >
                                    {t("portfolio_nav")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="scroll-link"
                                    activeClass="active-link"
                                    to="management-section-scroll"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={500}
                                >
                                    {t("management_nav")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="scroll-link"
                                    activeClass="active-link"
                                    to="contact-section-scroll"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={500}
                                >
                                    {t("contact_nav")}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-section contact">
                        <h3 className="custom-footer-text">
                            {" "}
                            {t("get_in_touch")}{" "}
                        </h3>
                        <p className="custom-footer-text">
                            {t("address_footer")}
                        </p>
                        <p className="custom-footer-text">info@sylox.fi</p>
                        <p className="custom-footer-text">+358 414 702 987 </p>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    {" "}
                    {t("copyright")} {new Date().getFullYear()} {t("powered")}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
