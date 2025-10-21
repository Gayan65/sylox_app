import React from "react";

const NotFound = () => {
    return (
        <div className="notfound-container">
            <div className="notfound-content text-center">
                <h1 className="error-code">404</h1>
                <h2 className="error-title">
                    Sivua ei löydy / Page Not Found{" "}
                </h2>
                <p className="error-message">
                    Hups! Etsimääsi sivua ei ole olemassa tai se on siirretty. /
                    Oops! The page you’re looking for doesn’t exist or has been
                    moved.
                </p>
                <a href="/" className="btn btn-primary error-btn">
                    Go Back Home/ Palaa etusivulle
                </a>
            </div>
        </div>
    );
};

export default NotFound;
