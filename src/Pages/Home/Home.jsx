import React from 'react';
import Hero from "../../Components/Home/Hero/Hero";
import About from "../../Components/Home/About/About";
import PageContainer from "../../Components/Home/PageContainer/PageContainer";
import Projects from "../../Components/Home/Projects/Projects";
import Experience from "../../Components/Home/Experience/Experience";
import Skills from "../../Components/Home/Skills/Skills";
import Contact from "../../Components/Home/Contact/Contact";
import Footer from "../../Components/Home/Footer/Footer";
import FloatingNavigation from "../../Components/Home/FloatingNavigation/FloatingNavigation";
import FloatingSettings from "../../Components/Home/FloatingSettings/FloatingSettings";
import ScrollProgress from "../../Components/Home/ScrollProgress/ScrollProgress";
import Notifications from "../../Components/Home/Notifications/Notifications";

function Home() {
    return (
        <>
            <FloatingSettings />
            <Hero />
            <PageContainer id="about" component={<About />} tagName="header" />
            <PageContainer id="projects" component={<Projects />} tagName="section" />
            <PageContainer id="experience" component={<Experience />} tagName="section" />
            <PageContainer id="skills" component={<Skills />} tagName="section" />
            <PageContainer id="contact" component={<Contact />} tagName="section" />
            <Footer />
            <FloatingNavigation />
            <ScrollProgress />
            <Notifications />
        </>
    );
}

export default Home;