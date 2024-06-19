"use client";

import About from "./about";
import HeroSection from "./hero-section";
import Tables from "./tables";
import Faqs from "./faqs";
import styles from "./style.module.scss";

function LandingPage() {
  return (
    <div className="container">
      <div className={styles.left}></div>
      <HeroSection />
      <About />
      <Tables />
      <Faqs />
    </div>
  );
}

export default LandingPage;
