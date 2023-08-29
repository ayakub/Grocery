import React from "react";
import Container from "./Container";
import Images from "./Images";

const OfferAdd = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row lg:flex-row gap-x-4 gap-y-6 items-center justify-between  cursor-pointer">
        <div className="relative group overflow-hidden">
          <Images imgsrc="./assets/add4-min.png" className="rounded-lg" />
          <div className=" ease-in duration-300  w-full h-full top-0 left-0  absolute bg-gray-900 bg-opacity-10  transition transform group-hover:translate-x-[0%]  translate-x-[100%] motion-reduce:transition-none motion-reduce:hover:transform-none"></div>
          <div className=" ease-in duration-300  w-full h-full  top-0 left-0   absolute bg-gray-900 bg-opacity-10  transition transform group-hover:translate-y-[0] translate-y-[-100%] motion-reduce:transition-none motion-reduce:hover:transform-none"></div>
        </div>
        <div className="relative group overflow-hidden">
          <Images
            imgsrc="./assets/add2-min.png"
            className="rounded-lg hover:bg-black  "
          />
          <div className=" ease-in duration-300  w-full h-full top-0 left-0  absolute bg-gray-900 bg-opacity-10  transition transform group-hover:translate-x-[0%]  translate-x-[100%] motion-reduce:transition-none motion-reduce:hover:transform-none"></div>
          <div className=" ease-in duration-300  w-full h-full  top-0 left-0   absolute bg-gray-900 bg-opacity-10  transition transform group-hover:translate-y-[0] translate-y-[-100%] motion-reduce:transition-none motion-reduce:hover:transform-none"></div>
        </div>
        <div className="relative group overflow-hidden">
          <Images imgsrc="./assets/add5-min.png" className="rounded-lg" />
          <div className=" ease-in duration-300  w-full h-full top-0 left-0  absolute bg-gray-900 bg-opacity-10  transition transform group-hover:translate-x-[0%]  translate-x-[100%] motion-reduce:transition-none motion-reduce:hover:transform-none"></div>
          <div className=" ease-in duration-300  w-full h-full  top-0 left-0   absolute bg-gray-900 bg-opacity-10  transition transform group-hover:translate-y-[0] translate-y-[-100%] motion-reduce:transition-none motion-reduce:hover:transform-none"></div>
        </div>
      </div>
    </Container>
  );
};

export default OfferAdd;
