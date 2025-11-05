import React from "react";
import Hero from "../components/Hero";
import Service from "../components/Service";
import WhySection from "../components/WhySection";
import Management from "../components/Management";
import FiBanner from "../components/FiBanner";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import AboutUs from "../components/AboutUs";
import AnimatedSection from "../components/AnimatedSection";

const Home = () => {
    return (
        <div>
            <AnimatedSection delay={0.1}>
                <Hero />
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
                <Service />
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
                <AboutUs />
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
                <WhySection />
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
                <Management />
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
                <FiBanner />
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
                <Portfolio />
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
                <Contact />
            </AnimatedSection>
        </div>
    );
};

export default Home;
