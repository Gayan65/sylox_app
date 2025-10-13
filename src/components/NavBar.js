import { useRef, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/logo/Sylox white transparent.png";

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
            <img src={logo} alt="Logo" style={{ width: 150, paddingTop: 6 }} />
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">About us</a>
                <a href="/#">Blog</a>
                <a href="/#">About me</a>
                <a href="/#">Contact us</a>
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
