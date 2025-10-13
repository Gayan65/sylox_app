import { useRef, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logoColour from "../assets/images/logo/Sylox Logo White text co.png";
import { Link } from "react-scroll";

function NavBar() {
    const navRef = useRef();
    const [isScrolled, setIsScrolled] = useState(false);

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
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
            <img
                src={logoColour}
                alt="Logo"
                style={{ width: 150, paddingTop: 6 }}
            />
            <nav ref={navRef}>
                <Link
                    className="scroll-link"
                    to="heroCarousel"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >
                    Home
                </Link>
                <Link
                    className="scroll-link"
                    to="services-section-scroll"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                >
                    Our services
                </Link>
                <Link
                    className="scroll-link"
                    to="why-section-scroll"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                >
                    About us
                </Link>
                <Link
                    className="scroll-link"
                    to="management-section-scroll"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                >
                    Our management
                </Link>
                <Link
                    className="scroll-link"
                    to="portfolio-section-scroll"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                >
                    Portfolio
                </Link>
                <Link
                    className="scroll-link"
                    to="contact-section-scroll"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                >
                    Contact us
                </Link>
                <div
                    className="btn-group language-custom-corner"
                    role="group"
                    aria-label="Language toggle"
                >
                    <button
                        type="button"
                        className="btn btn-outline-light active"
                    >
                        EN
                    </button>
                    <button type="button" className="btn btn-outline-light">
                        FI
                    </button>
                </div>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default NavBar;
