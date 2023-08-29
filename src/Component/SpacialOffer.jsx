import React from "react";
import Container from "./Container";
import Titel from "./Titel";
import Product from "./Product";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

import Slider from "react-slick";
const SpacialOffer = () => {
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
        <div className="relative mt-4 lg:mt-10 ">
          <Titel titel="Special Offer" />
          <button onClick={() => slider?.current?.slickNext()}>
            <BsArrowRightCircle className=" absolute top-[250%] right-[0] lg:right-[-25px]  z-10 h-[50px] w-[50px] rounded-full bg-[#f2f3f4] text-sm  text-[#7e7e7e] hover:bg-primery hover:text-white transition ease-in-out delay-150  " />
          </button>
          <button onClick={() => slider?.current?.slickPrev()}>
            <BsArrowLeftCircle className=" absolute top-[250%] left-[0] lg:left-[-25px] z-20 h-[50px] w-[50px] rounded-full bg-[#f2f3f4] text-sm  text-[#7e7e7e] hover:bg-primery hover:text-white transition ease-in-out delay-150" />
          </button>
        </div>
        <Slider ref={slider} {...settings}>
          <div className="max-w-[370px] px-2 !flex flex-col mx-auto justify-center items-center  ">
            {" "}
            <Product
              imgsrc="./assets/crispy-fried-chicken-meat-black-background-with-smoke-min.jpg"
              name="Chicken-meat"
              batch={true}
            />
          </div>
          <div className="max-w-[370px] px-2 !flex flex-col mx-auto justify-center items-center  ">
            <Product
              imgsrc="./assets/pile-sliced-orange-fruit-with-light-brown-rim-min.jpg"
              name="Potato-creackers"
            />
          </div>
          <div className="max-w-[370px] px-2 !flex flex-col mx-auto justify-center items-center  ">
            <Product
              imgsrc="./assets/different-herbs-gray-wooden-table-against-blue-background-min.jpg"
              name="Herbs"
              batch={true}
            />
          </div>
          <div className="max-w-[370px] px-2 !flex flex-col mx-auto  justify-center items-center ">
            <Product
              imgsrc="./assets/ice-cream-waffle-cone-with-melting-caramel-blue-background-min.jpg"
              name="Ice-cream"
            />
          </div>
          <div className="max-w-[370px] px2  flex flex-col mx-auto justify-center items-center  ">
            <Product
              imgsrc="./assets/mix-pizza-chicken-tomato-bell-pepper-olives-mushroom-side-view-min.jpg"
              name="Pizza"
            />
          </div>
        </Slider>
      </Container>
    </>
  );
};

export default SpacialOffer;
