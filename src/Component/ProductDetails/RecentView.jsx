import React from "react";

import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

import Slider from "react-slick";
import Container from "../Container";
import Titel from "../Titel";
import Product from "../Product";
const RecentView = () => {
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
          centerMode: true,
          dots: false,
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
        <div className="relative mt-8 lg:mt-32">
          <Titel titel="Recent View" />
          <button onClick={() => slider?.current?.slickNext()}>
            <BsArrowRightCircle className=" absolute top-[220%] right-0 z-10 h-[64px] w-[64px] rounded-full bg-[#f2f3f4] text-sm  text-[#7e7e7e] hover:bg-primery hover:text-white transition ease-in-out delay-150  " />
          </button>
          <button onClick={() => slider?.current?.slickPrev()}>
            <BsArrowLeftCircle className=" absolute top-[220%] left-[0] z-20 h-[64px] w-[64px] rounded-full bg-[#f2f3f4] text-sm  text-[#7e7e7e] hover:bg-primery hover:text-white transition ease-in-out delay-150" />
          </button>
        </div>
        <Slider ref={slider} {...settings}>
          <div className="max-w-[370px]  h-[400px] px-7">
            <Product
              imgsrc="./assets/ice-cream-waffle-cone-with-melting-caramel-blue-background-min.jpg"
              name="Ice-cream"
              batch={true}
            />
          </div>
          <div className="max-w-[370px] h-[400px] px-7">
            <Product
              imgsrc="./assets/homemade-brownie-served-with-chocolate-fudge-min.jpg"
              name="Chocolate"
            />
          </div>
          <div className="max-w-[370px] h-[400px] px-7">
            <Product
              imgsrc="./assets/milk-strawberry-cocktail-generative-ai-min.jpg"
              name="Strawberry"
              batch={true}
            />
          </div>
          <div className="max-w-[370px] h-[400px] px-7">
            <Product
              imgsrc="./assets/crispy-fried-chicken-meat-black-background-with-smoke-min.jpg"
              name="Chicken"
            />
          </div>
          <div className="max-w-[370px] h-[400px] px-7">
            <Product
              imgsrc="./assets/white-background-candy-milk-piece-snack-dark-brown-sweet-food-black-bitter-slice-cocoa-min.jpg"
              name="chocolate"
            />
          </div>
        </Slider>
      </Container>
    </>
  );
};

export default RecentView;
