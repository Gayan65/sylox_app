import React, { useEffect, useState } from "react";
import slide1 from "../assets/images/hero/1.jpg";
import slide2 from "../assets/images/hero/2.jpg";
import slide3 from "../assets/images/hero/3.jpg";
import slide4 from "../assets/images/hero/4.jpg";
import slide5 from "../assets/images/hero/5.jpg";
import slide6 from "../assets/images/hero/6.jpg";
import slide7 from "../assets/images/hero/7.jpg";

const Hero = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setTimeout(() => setAnimate(true), 300); // trigger after short delay
    }, []);

    return (
        <div
            id="heroCarousel"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
            data-bs-interval="3000"
        >
            <div className="carousel-inner">
                {[slide1, slide2, slide3, slide4, slide5, slide6, slide7].map(
                    (slide, index) => (
                        <div
                            key={index}
                            className={`carousel-item ${
                                index === 0 ? "active" : ""
                            }`}
                        >
                            <img
                                src={slide}
                                className="d-block w-100"
                                alt={`Slide ${index + 1}`}
                                style={{ height: "100vh", objectFit: "cover" }}
                            />
                        </div>
                    )
                )}
            </div>
            <div className="carousel-caption d-flex flex-column justify-content-center hero-caption">
                <h5
                    style={{
                        fontWeight: "bold",
                    }}
                >
                    Agile software development that grows your business
                </h5>
                <h1 className={`mt-4 mb-4 fade-up ${animate ? "fade-up" : ""}`}>
                    Your Trusted Technology Partner in Finland
                </h1>
                <p
                    style={{ fontSize: "1rem" }}
                    className={animate ? "fade-up-delay" : ""}
                >
                    SYLOX provides professional software development for Finnish
                    SMEs and large enterprises. Our local team speaks Finnish
                    and understands your market.
                </p>
            </div>
        </div>
    );
};

export default Hero;
