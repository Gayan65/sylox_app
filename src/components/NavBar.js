import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header>
            <h3>LOGO</h3>
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">About us</a>
                <a href="/#">Blog</a>
                <a href="/#">About me</a>
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
