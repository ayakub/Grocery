import React from "react";
import Container from "./Container";
import Titel from "./Titel";
import Product from "./Product";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

import Slider from "react-slick";
const NewArrivals = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: true,
          centerPadding: "0 20px",
          centerMargin: " 20px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: true,
          centerPadding: "0 20px",
          centerMargin: " 20px",
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: true,
          centerPadding: "110px",
        },
      },
    ],
  };
  const slider = React.useRef(null);

  return (
    <>
      <Container>
        <div className="relative mt-4 lg:mt-10">
          <Titel titel="Featured Categories" />
          <button onClick={() => slider?.current?.slickNext()}>
            <BsArrowRightCircle className="  absolute top-[250%] right-[0] lg:right-[-25px]  z-10 h-[50px] w-[50px] rounded-full bg-[#f2f3f4] text-sm  text-[#7e7e7e] hover:bg-primery hover:text-white transition ease-in-out delay-150  " />
          </button>
          <button onClick={() => slider?.current?.slickPrev()}>
            <BsArrowLeftCircle className="absolute top-[250%] left-[0] lg:left-[-25px] z-20 h-[50px] w-[50px] rounded-full bg-[#f2f3f4] text-sm  text-[#7e7e7e] hover:bg-primery hover:text-white transition ease-in-out delay-150" />
          </button>
        </div>
        <Slider ref={slider} {...settings}>
          <div className="max-w-[370px] px-2 !flex flex-col mx-auto justify-center items-center">
            <Product
              imgsrc="./assets/cup-coffee-with-scattered-coffee-beans-around-cup-min.jpg"
              name="Hot-Coffee"
              batch={true}
            />
          </div>
          <div className="max-w-[370px] px-2 !flex flex-col mx-auto justify-center items-center">
            <Product
              imgsrc="./assets/homemade-brownie-served-with-chocolate-fudge-min.jpg"
              name="Chocolate-Cake"
            />
          </div>
          <div className="max-w-[370px] px-2 !flex flex-col mx-auto justify-center items-center">
            <Product
              imgsrc="./assets/milk-strawberry-cocktail-generative-ai-min.jpg"
              name="Strawberry-Icecream"
              batch={true}
            />
          </div>
          <div className="max-w-[370px] px-2 !flex flex-col mx-auto justify-center items-center">
            <Product
              imgsrc="./assets/chocolate-cookies-with-cinnamon-sticks-star-anise-isolated-white-background-min.jpg"
              name="Cookies"
            />
          </div>
          <div className="max-w-[370px] px-2 !flex flex-col mx-auto justify-center items-center">
            <Product
              imgsrc="./assets/homemade-brownie-served-with-chocolate-fudge-min.jpg"
              name="Chocolate-Cake"
            />
          </div>
        </Slider>
      </Container>
    </>
  );
};

export default NewArrivals;
