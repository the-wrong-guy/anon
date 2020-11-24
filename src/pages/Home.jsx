import React from "react";
import AutoCarousel from "../components/layout/Carousel";
import AboutCenter from "../components/layout/AboutCenter";
import OurPrograms from "../components/layout/OurPrograms";
import Testimonials from "../components/layout/Testimonials";
import SubscribeToUs from "../components/layout/SubscribeToUs";
import Community from "../components/layout/Community";

function Home(props) {
  return (
    <React.Fragment className = {props.className}>
      <AutoCarousel /> 
      <AboutCenter />
      <OurPrograms />
      <Testimonials />
      <Community />
      <SubscribeToUs />
      </React.Fragment>
  );
}

export default Home;
