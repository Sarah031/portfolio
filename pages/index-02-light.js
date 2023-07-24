import React, { useEffect, useState } from "react";
import Image from "next/image";
import Layout2 from "../src/layout/Layout2";
import HomeTwo from "../src/components/homeTwo";
import AboutOne from "../src/components/aboutOne";
import ServiceOne from "../src/components/serviceOne";
import PortfolioOne from "../src/components/portfolioOne";
import TestimonialOne from "../src/components/testimonialOne";
import ContactOne from "../src/components/contactOne";

export default function Home() {
  // useEffect(() => {
  //   document.querySelector("html").setAttribute("data-bs-theme", "light");
  // }, []);
  return (
    <Layout2 style={"light"}>
      {/* Home */}
      <section
        id="home"
        data-scroll-index={0}
        className="section home-section-02"
      >
        <HomeTwo />
      </section>
      {/* End Home */}
      {/* About */}
      <section
        id="about"
        data-scroll-index={1}
        className="section about-section gray-bg-1"
      >
        <AboutOne />
      </section>
      {/* End About */}

      {/* portfolio */}
      <section
        id="portfolio"
        data-scroll-index={3}
        className="section portfolio-section gray-bg-1"
      >
        <PortfolioOne />
      </section>

      {/* contactus */}
      <section
        id="contactus"
        data-scroll-index={4}
        className="section contactus-section gray-bg-1"
      >
        <ContactOne />
      </section>
      {/* End contactus */}
    </Layout2>
  );
}
