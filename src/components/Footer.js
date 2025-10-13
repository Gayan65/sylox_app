import React from "react";

const Footer = () => {
    return (
        <footer class="footer">
            <div class="container">
                <div class="footer-content">
                    <div class="footer-section about">
                        <div class="logo">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                                alt="Logo"
                            />
                            <h2>Digital Agency</h2>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut elit tellus, luctus nec ullamcorper mattis,
                            pulvinar dapibus leo.
                        </p>
                        <div class="socials">
                            <a href="#">
                                <i class="bi bi-facebook"></i>
                            </a>
                            <a href="#">
                                <i class="bi bi-twitter"></i>
                            </a>
                            <a href="#">
                                <i class="bi bi-google"></i>
                            </a>
                            <a href="#">
                                <i class="bi bi-instagram"></i>
                            </a>
                            <a href="#">
                                <i class="bi bi-linkedin"></i>
                            </a>
                        </div>
                    </div>

                    <div class="footer-section">
                        <h3>Company</h3>
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

                    <div class="footer-section">
                        <h3>Business</h3>
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

                    <div class="footer-section contact">
                        <h3>Get In Touch</h3>
                        <p>Rt. 66, Downtown, Washington, DC</p>
                        <p>info@example.com</p>
                        <p>1-800-1234-567</p>
                        <p>+001 987-654-3210</p>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <p>Copyright © 2025 My Blog | Powered by My Blog</p>
            </div>
        </footer>
    );
};

export default Footer;
