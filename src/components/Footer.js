import React from "react";
import logo from "../assets/images/logo/Sylox Logo White text co.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section about">
                        <div className="logo">
                            <img src={logo} alt="Logo" />
                        </div>
                        <p>
                            SYLOX provides professional software development for
                            Finnish SMEs and large enterprises.
                        </p>
                        <div className="socials">
                            <a href="#">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="#">
                                <i className="bi bi-twitter"></i>
                            </a>
                            <a href="#">
                                <i className="bi bi-google"></i>
                            </a>
                            <a href="#">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="#">
                                <i className="bi bi-linkedin"></i>
                            </a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h3 className="custom-footer-text">Company</h3>
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Services</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3 className="custom-footer-text">Business</h3>
                        <ul>
                            <li>
                                <a href="#">Project</a>
                            </li>
                            <li>
                                <a href="#">Our Team</a>
                            </li>
                            <li>
                                <a href="#">Facts</a>
                            </li>
                            <li>
                                <a href="#">Customers</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-section contact">
                        <h3 className="custom-footer-text">Get In Touch</h3>
                        <p className="custom-footer-text">
                            Raviradantie 7, Mikkeli 50100, Finland
                        </p>
                        <p className="custom-footer-text">info@sylox.fi</p>
                        <p className="custom-footer-text">041 470 2987 </p>
                        <p className="custom-footer-text">+358 414 702 987</p>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>Copyright © 2025 SYLOX | Powered by Sylox</p>
            </div>
        </footer>
    );
};

export default Footer;
