import React from "react";
import slide1 from "../assets/images/hero/1.jpg";
import slide2 from "../assets/images/hero/2.jpg";
import slide3 from "../assets/images/hero/3.jpg";
import slide4 from "../assets/images/hero/4.jpg";
import slide5 from "../assets/images/hero/5.jpg";
import slide6 from "../assets/images/hero/6.jpg";
import slide7 from "../assets/images/hero/7.jpg";

const Hero = () => {
    return (
        <div
            id="heroCarousel"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
            data-bs-interval="3000"
        >
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img
                        src={slide1}
                        className="d-block w-100"
                        alt="Slide 1"
                        style={{ height: "100vh", objectFit: "cover" }}
                    />
                    <div className="carousel-caption">
                        <h3>First Slide</h3>
                        <p>Some description here</p>
                    </div>
                </div>

                <div className="carousel-item">
                    <img
                        src={slide2}
                        className="d-block w-100"
                        alt="Slide 2"
                        style={{ height: "100vh", objectFit: "cover" }}
                    />
                    <div className="carousel-caption">
                        <h3>Second Slide</h3>
                        <p>More text here</p>
                    </div>
                </div>

                <div className="carousel-item">
                    <img
                        src={slide3}
                        className="d-block w-100"
                        alt="Slide 3"
                        style={{ height: "100vh", objectFit: "cover" }}
                    />
                    <div className="carousel-caption">
                        <h3>Third Slide</h3>
                        <p>Final slide text</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src={slide4}
                        className="d-block w-100"
                        alt="Slide 3"
                        style={{ height: "100vh", objectFit: "cover" }}
                    />
                    <div className="carousel-caption">
                        <h3>Third Slide</h3>
                        <p>Final slide text</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src={slide5}
                        className="d-block w-100"
                        alt="Slide 3"
                        style={{ height: "100vh", objectFit: "cover" }}
                    />
                    <div className="carousel-caption">
                        <h3>Third Slide</h3>
                        <p>Final slide text</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src={slide6}
                        className="d-block w-100"
                        alt="Slide 3"
                        style={{ height: "100vh", objectFit: "cover" }}
                    />
                    <div className="carousel-caption">
                        <h3>Third Slide</h3>
                        <p>Final slide text</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src={slide7}
                        className="d-block w-100"
                        alt="Slide 3"
                        style={{ height: "100vh", objectFit: "cover" }}
                    />
                    <div className="carousel-caption">
                        <h3>Third Slide</h3>
                        <p>Final slide text</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
