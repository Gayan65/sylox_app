import React from "react";
import Hero from "../components/Hero";
import Service from "../components/Service";
import WhySection from "../components/WhySection";
import Management from "../components/Management";
import FiBanner from "../components/FiBanner";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import AboutUs from "../components/AboutUs";

const Home = () => {
    return (
        <div>
            <Hero />
            <Service />
            <AboutUs />
            <WhySection />
            <Management />
            <FiBanner />
            <Portfolio />
            <Contact />
        </div>
    );
};

export default Home;
