import React from "react";
import Images from "./Images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typewriter from "typewriter-effect";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  new Typewriter("#typewriter", {
    strings: ["Hello", "World"],
    autoStart: true,
  });
  return (
    <>
      <div className="relative App"></div>
      <Slider {...settings}>
        
        <div className="relative">
        
          <Images imgsrc="./assets/18056180_06-min.png" className="w-full" />
        </div>
        <div className="relative">
          <Images imgsrc="./assets/bannar2-min.png" className="w-full " />
        </div>
        <div className="relative">
          <Images imgsrc="./assets/bannar3-min.png" className="w-full " />
        </div>
      </Slider>
    </>
  );
};

export default Banner;
