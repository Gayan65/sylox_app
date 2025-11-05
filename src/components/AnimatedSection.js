import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedSection = ({ children, delay = 0.2 }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.15,
    });

    const variants = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
    };

    return (
        <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;
