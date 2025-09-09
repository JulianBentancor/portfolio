import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "projects", "contact"];
    const observers = [];

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              setActiveSection(sectionId);
            }
          },
          { threshold: 0.5 }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Home setActiveSection={setActiveSection} />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer setActiveSection={setActiveSection} />
    </div>
  );
};

export default App;