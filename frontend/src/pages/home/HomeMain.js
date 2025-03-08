import React from "react";
import About from "./AboutSection";
import Blog from "./BlogSection";
import CTA from "../../components/CTA";
import Feature from "./FeatureSection";
//import Feature from "../about/FeatureSection"
import Banner from "./HomeBanner";
import Service from "./ServiceSection";

const HomeMain = () => {
  return (
    <main>
      <Banner />

      {/* <Brand /> */}

      <Feature />

      <About />

      {/* <Counter /> */}

      <Service />

      {/* <Project /> */}

      {/* <Social /> */}

      {/* <Company /> */}

      {/* <Testimonial /> */}

      <Blog />

      <CTA />
    </main>
  );
};

export default HomeMain;
