import React from "react";
import Container from "./Container";
import Titel from "./Titel";
import Product from "./Product";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

import Slider from "react-slick";
const GroceryStaples = () => {
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
        },
      },
    ],
  };
  const slider = React.useRef(null);

  return (
    <>
      <Container>
        <div className="relative mt-4 lg:mt-10">
          <Titel titel="Grocery Staples" />
          <button onClick={() => slider?.current?.slickNext()}>
            <BsArrowRightCircle className="  absolute top-[250%] right-[0] lg:right-[-25px] z-10 h-[50px] w-[50px] rounded-full bg-[#f2f3f4] text-sm  text-[#7e7e7e] hover:bg-primery hover:text-white transition ease-in-out delay-150  " />
          </button>
          <button onClick={() => slider?.current?.slickPrev()}>
            <BsArrowLeftCircle className=" absolute top-[250%] left-[0] lg:left-[-25px] z-20 h-[50px] w-[50px] rounded-full bg-[#f2f3f4] text-sm  text-[#7e7e7e] hover:bg-primery hover:text-white transition ease-in-out delay-150" />
          </button>
        </div>
        <Slider ref={slider} {...settings}>
          <div className="max-w-[370px] px-2 !flex flex-col mx-auto justify-center items-center">
            <Product
              imgsrc="./assets/fresh-baked-pastries-close-up-bakery-showcase-min.jpg"
              name="Bekery"
              batch={true}
            />
          </div>
          <div className="max-w-[370px] px-2 !flex flex-col mx-auto justify-center items-center">
            <Product
              imgsrc="./assets/milk-splash-generative-aixa-min.jpg"
              name="Milk"
            />
          </div>
          <div className="max-w-[370px] px-2 !flex flex-col mx-auto justify-center items-center">
            <Product
              imgsrc="./assets/white-background-candy-milk-piece-snack-dark-brown-sweet-food-black-bitter-slice-cocoa-min.jpg"
              name="Chocolate"
              batch={true}
            />
          </div>
          <div className="max-w-[370px] px-2 !flex flex-col mx-auto justify-center items-center">
            <Product
              imgsrc="./assets/cup-coffee-with-scattered-coffee-beans-around-cup-min.jpg"
              name="Hot-Coffee"
            />
          </div>
          <div className="max-w-[370px] px-2 !flex flex-col mx-auto justify-center items-center">
            <Product
              imgsrc="./assets/milk-splash-generative-aixa-min.jpg"
              name="Milk"
            />
          </div>
        </Slider>
      </Container>
    </>
  );
};

export default GroceryStaples;
