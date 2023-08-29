import React, { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import {
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  AiFillStar,
} from "react-icons/ai";
import PopupVideo from "./PopupVideo";
import PhotoViewer from "../PhotoView/PhotoViewer";

const DetailsSection = () => {
  const [quantity, setQuantity] = useState(1);
  let price = 44;
  const totalPrice = price * quantity;

  const quantityPlus = () => {
    setQuantity(quantity + 1);
  };
  const quantityMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setPrice(price * quantity);
    }
  };

  let proudctData = [
    {
      typeVideo: "video",
      typeImage: "img",
      videosrc: "./assets/kute.mp4",
    },
    {
      typeImage: "img",
      imgaSrc: "./assets/homemade-brownie-served-with-chocolate-fudge-min.jpg",
    },
    {
      typeVideo: "video",
      typeImage: "img",
      videosrc: "./assets/kute.mp4",
    },
  ];
  return (
    <div className="flex justify-center items-center flex-col md:flex-row max-w-6xl mx-auto p-3 border-2">
      <div className="md:w-1/2 flex flex-col md:flex-row-reverse">
        <PhotoViewer
          imgSrc="./assets/homemade-brownie-served-with-chocolate-fudge-min.jpg"
          className="lg:w-[400px]"
        />
        <div className=" flex flex-row md:flex-col">
          {proudctData.map((item, index) => (
            <PopupVideo
              key={index}
              type={item.typeVideo || item.typeImage}
              src={item.videosrc || item.imgaSrc}
            />
          ))}
        </div>
      </div>
      <div className="md:w-1/2 p-5">
        <h1 className="text-3xl font-semibold my-5 text-[#26901b]">
          Doritos nacho cheese party size
        </h1>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          veritatis iusto quasi? Doloribus ab dolore nihil odio? Voluptatum
          veniam, quae accusantium ea, doloribus temporibus quos sapiente
          architecto alias, suscipit minima!
        </h1>
        <p className="font-semibold my-5 flex justify-between">
          Price: <span>$ {totalPrice}</span>
        </p>

        <div className="flex justify-between">
          <p className="mr-4 font-semibold">Quantity :</p>
          <div className="flex justify-between">
            <button
              className="text-3xl font-semibold mr-4 text-red-500"
              onClick={quantityMinus}
            >
              <AiOutlineMinusCircle />
            </button>
            <p className="font-semibold text-xl mx-2">{quantity}</p>
            <button
              className="text-3xl font-semibold ml-4 text-[#26901b]"
              onClick={quantityPlus}
            >
              <AiOutlinePlusCircle />
            </button>
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <button className="px-5 py-2 border bg-gray-800 text-white rounded">
            Add to card
          </button>
          <button className="px-5 py-2 border bg-[#26901b] text-white rounded">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
