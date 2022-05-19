import React, { useState, useEffect } from 'react';
import { ProgressBar } from "./ScrollProgress.style";

function ScrollProgress() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight;
            const windowHeight = document.documentElement.clientHeight;

            const scrollProgress = scrollTop / (scrollHeight - windowHeight) * 100;

            setScrollProgress(scrollProgress);
        };


        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    return (
        <ProgressBar scrollProgress={scrollProgress} />
    );
}

export default ScrollProgress;