import React from "react";
import Hero from "../components/Hero";
import Service from "../components/Service";
import WhySection from "../components/WhySection";
import Management from "../components/Management";

const Home = () => {
    return (
        <div>
            <Hero />
            <Service />
            <WhySection />
            <Management />
        </div>
    );
};

export default Home;
