import React, { useLayoutEffect, useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lenis from "@studio-freight/lenis";
import Faq from "../faqs/faq.jsx";
import Sponsors from "../Sponsors/sponsors.jsx";
import Roadmap from "../timeline/Roadmap.jsx";
import Navbar from "../navbar/navbar1.jsx";
import Footer from "../footer/footer.jsx";
import Glimpses from "../glimpses/glimpses.jsx";
import About from "../about/about.jsx";
import AboutGlitch from "../aboutglitch/aboutglitch.jsx";
import "./HomePage.css";
import LeadOrganizers from "../LeadOrganizers/LeadOrganizers.jsx";
import ContactUs from "../ContactUs/ContactUs.jsx";
import VenueSection from "../VenueSection/VenueSection.jsx";
import Loader from "../Loader/Loader.jsx"; // Import the Loader component

function Homepage() {
  const lenis = new Lenis({ duration: 2 });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  useLayoutEffect(() => {
    AOS.init();
  }, []);

  const [belowNavVisible, setBelowNavVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setBelowNavVisible(currentScrollPos < 10);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Simulate loading completion after 3-5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000 + Math.random() * 2000); // Random time between 3-5 seconds

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          {/* <div className={`below-nav-content ${belowNavVisible ? "visible" : "hidden"}`}>
            <button className="nav-register">Register Now</button>
            <span className="nav-time">48:00:00</span>
          </div> */}
          <About />
          <AboutGlitch />
          <Glimpses />
          <Sponsors />
          <Roadmap />
          <LeadOrganizers/>
          <VenueSection/>
          <ContactUs/>
          <Faq />
          <Footer />
        </>
      )}
    </>
  );
}

export default Homepage;