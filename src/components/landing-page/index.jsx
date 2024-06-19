"use client";

import About from "./about";
import HeroSection from "./hero-section";
import Tables from "./tables";
import Faqs from "./faqs";

function LandingPage() {
  return (
    <div className="container">
      <HeroSection />
      <About />
      <Tables />
      <Faqs />
    </div>
  );
}

export default LandingPage;
