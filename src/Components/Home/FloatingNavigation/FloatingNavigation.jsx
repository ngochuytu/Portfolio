import React, { useState, useEffect } from "react";
import {
  NavigationBar,
  NavigationList,
  NavigationListItem,
  NavigationLink,
} from "./FloatingNavigation.style";

function FloatingNavigation() {
  const [sectionOnScroll, setSectionOnScroll] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const aboutTopFromViewPort = document
        .getElementById("about")
        .getBoundingClientRect().top;
      const projectsTopFromViewPort = document
        .getElementById("projects")
        .getBoundingClientRect().top;
      const experienceTopFromViewPort = document
        .getElementById("experience")
        .getBoundingClientRect().top;
      const skillsTopFromViewPort = document
        .getElementById("skills")
        .getBoundingClientRect().top;
      const contactTopFromViewPort = document
        .getElementById("contact")
        .getBoundingClientRect().top;

      const sectionsTopFromViewPort = [
        aboutTopFromViewPort,
        projectsTopFromViewPort,
        experienceTopFromViewPort,
        skillsTopFromViewPort,
        contactTopFromViewPort,
      ];

      let sectionOnScrollIndex = null;

      for (let i = sectionsTopFromViewPort.length - 1; i >= 0; i--) {
        if (sectionsTopFromViewPort[i] <= 50) {
          sectionOnScrollIndex = i;
          break;
        }
      }

      if (sectionOnScrollIndex !== sectionOnScroll) {
        setSectionOnScroll(sectionOnScrollIndex);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionOnScroll]);

  return (
    <NavigationBar>
      <NavigationList sectionOnScroll={sectionOnScroll}>
        <NavigationListItem>
          <NavigationLink href="#about">
            <i className="fa-regular fa-circle-user" tabIndex={0}></i>
          </NavigationLink>
        </NavigationListItem>
        <NavigationListItem>
          <NavigationLink href="#projects">
            <i className="fa-solid fa-list-check" tabIndex={0}></i>
          </NavigationLink>
        </NavigationListItem>
        <NavigationListItem>
          <NavigationLink href="#experience">
            <i className="fa-solid fa-road" tabIndex={0}></i>
          </NavigationLink>
        </NavigationListItem>
        <NavigationListItem>
          <NavigationLink href="#skills">
            <i className="fa-solid fa-book-open" tabIndex={0}></i>
          </NavigationLink>
        </NavigationListItem>
        <NavigationListItem>
          <NavigationLink href="#contact">
            <i className="fa-solid fa-envelope" tabIndex={0}></i>
          </NavigationLink>
        </NavigationListItem>
      </NavigationList>
    </NavigationBar>
  );
}

export default FloatingNavigation;
