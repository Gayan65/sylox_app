import { useRef, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logoColour from "../assets/images/logo/Sylox Logo White text co.png";
import { Link } from "react-scroll";

function NavBar() {
    const navRef = useRef();
    const overlayRef = useRef();
    const [isScrolled, setIsScrolled] = useState(false);

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
            <img
                src={logoColour}
                alt="Logo"
                style={{ width: 150, paddingTop: 6 }}
            />
            <div
                className="nav-overlay"
                ref={overlayRef}
                onClick={hideNavbar}
            ></div>{" "}
            {/* overlay */}
            <nav ref={navRef}>
                <a href="/">Home</a>
                <Link
                    className="scroll-link"
                    activeClass="active-link"
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
                    activeClass="active-link"
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
                    activeClass="active-link"
                    to="management-section-scroll"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                >
                    Management
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
                    Portfolio
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
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default NavBar;
