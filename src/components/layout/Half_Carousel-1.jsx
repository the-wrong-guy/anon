import React, { useState } from "react";
import Swiper from "react-id-swiper";

import "swiper/swiper-bundle.min.css";
import "./Carousel.css";

const config = {
  containerClass: "swiper-container hero-slider",
  parallax: true,
  centeredSlides: true,
  speed: 500,
  spaceBetween: 0,
  effect: "slide",
};

const array = [1, 2, 3, 4, 5];

function Carousel() {
  const [parallaxSwiper, setParallaxSwiper] = useState(null);
  const parallaxAmout = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
  const parallaxOpacity = 0.5;
  return (
    <div className="carousel__container">
      <div className="carousel__leftBox">
        <h1>
          Digitial Education
          <br />
          from best <br />
          in class
        </h1>
        <div className="leftBox__buttons">
          <button className="carousel__buttonPrimary shadow">
            Get Started
          </button>
          <button className="carousel__buttonSecondary shadow">
            Learn More
          </button>
        </div>
      </div>
      <div className="carousel__rightBox">
        <Swiper {...config} getSwiper={setParallaxSwiper}>
          {array.map((item, index) => {
            return (
              <div className="hero-slide">
                <div
                  className="slide-image"
                  data-swiper-parallax={parallaxAmout}
                  data-swiper-parallax-opacity={parallaxOpacity}
                >
                  <img
                    src={`https://picsum.photos/id/${index}/800/900`}
                    alt=""
                  />
                </div>
                <div className="content">
                  <h1>Slide {index + 1}</h1>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Odit obcaecati numquam deleniti enim amet nobis pariatur
                    facilis exercitationem maiores voluptatem incidunt animi
                    esse, totam quo cupiditate asperiores neque laboriosam
                    nostrum!
                  </p>
                </div>
              </div>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Carousel;
