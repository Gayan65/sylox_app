import React from "react";
import Hero from "../components/Hero";
import Service from "../components/Service";
import WhySection from "../components/WhySection";
import Management from "../components/Management";
import FiBanner from "../components/FiBanner";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

const Home = () => {
    return (
        <div>
            <Hero />
            <Service />
            <WhySection />
            <Management />
            <FiBanner />
            <Portfolio />
            <Contact />
        </div>
    );
};

export default Home;
