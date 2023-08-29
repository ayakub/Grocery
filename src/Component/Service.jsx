import React from "react";
import Container from "./Container";
import Images from "./Images";

const Service = () => {
  return (
    <Container>
      <div className="flex flex-wrap gap-y-6 items-center lg:justify-between justify-center gap-x-8 mt-16">
        <div className="flex items-center gap-3 group p-3 rounded-md  hover:bg-primery duration-300 cursor-pointer">
          <div>
            <Images
              imgsrc="./assets/bag (1)-min.png"
              className="h-[40px] animate-bounce	"
            />
          </div>
          <div>
            <h1 className="text-[#2a4352] group-hover:text-white text-2xl font-dm font-bold">
              Feature
            </h1>
            <p className="text-[#959595] group-hover:text-white">
              Fresh Grocery Delivered
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3  group p-3 rounded-md  hover:bg-primery duration-300 cursor-pointer">
          <div>
            <Images
              imgsrc="./assets/bag2-min.png"
              className="h-[40px] animate-bounce"
            />
          </div>
          <div>
            <h1 className="text-[#2a4352] text-2xl font-dm font-bold group-hover:text-white">
              Quialty
            </h1>
            <p className="text-[#959595] group-hover:text-white">
              Fresh Grocery Delivered
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3  group p-3 rounded-md  hover:bg-primery duration-300 cursor-pointer">
          <div>
            <Images
              imgsrc="./assets/Untitled-1-min.png"
              className="h-[40px] animate-bounce"
            />
          </div>
          <div>
            <h1 className="text-[#2a4352] text-2xl font-dm font-bold group-hover:text-white">
              Best Price
            </h1>
            <p className="text-[#959595] group-hover:text-white">
              Fresh Grocery Delivered
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3  group p-3 rounded-md  hover:bg-primery duration-300 cursor-pointer">
          <div>
            <Images
              imgsrc="./assets/Untitlehsdhg-1-min.png"
              className="h-[40px] animate-bounce"
            />
          </div>
          <div>
            <h1 className="text-[#2a4352] text-2xl font-dm font-bold group-hover:text-white">
              Organic
            </h1>
            <p className="text-[#959595] group-hover:text-white">
              Fresh Grocery Delivered
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Service;
