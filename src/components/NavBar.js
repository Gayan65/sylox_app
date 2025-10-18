import { useRef, useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import logoColour from "../assets/images/logo/Sylox Logo White text co.png";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

function NavBar() {
    const navRef = useRef();
    const overlayRef = useRef();
    const [isScrolled, setIsScrolled] = useState(false);
    const { t, i18n } = useTranslation("global");

    const changeLang = (lang) => {
        i18n.changeLanguage(lang);
    };

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
        overlayRef.current.classList.add("active");
    };

    const hideNavbar = () => {
        navRef.current.classList.remove("responsive_nav");
        overlayRef.current.classList.remove("active");
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={isScrolled ? "scrolled" : ""}>
            <Link
                className="scroll-link"
                activeClass="active-link"
                to="heroCarousel"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
            >
                <img
                    src={logoColour}
                    alt="Logo"
                    style={{ width: 150, paddingTop: 6, cursor: "pointer" }}
                />
            </Link>
            <div
                className="nav-overlay"
                ref={overlayRef}
                onClick={hideNavbar}
            ></div>{" "}
            {/* overlay */}
            <nav ref={navRef}>
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

                <div
                    className="btn-group language-custom-corner"
                    role="group"
                    aria-label="Language toggle"
                >
                    <button
                        type="button"
                        className={`btn btn-outline-light ${
                            i18n.language === "en" ? "active" : ""
                        }`}
                        onClick={() => changeLang("en")}
                    >
                        EN
                    </button>
                    <button
                        type="button"
                        className={`btn btn-outline-light ${
                            i18n.language === "fi" ? "active" : ""
                        }`}
                        onClick={() => changeLang("fi")}
                    >
                        FI
                    </button>
                </div>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default NavBar;
