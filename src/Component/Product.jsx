import React from "react";
import Batch from "./Batch";
import Images from "./Images";
import Flex from "./Flex";
import { GiSelfLove } from "react-icons/gi";
import { SiConvertio } from "react-icons/si";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";

const Product = ({ imgsrc, batch, name }) => {
  return (
    <>
      <div className="w-full border border-[#f0f0f0] ">
        <div className=" group relative w-full h-full overflow-hidden ">
          <Images
            imgsrc={imgsrc}
            className="h-60 full w-full mx-auto rounded-t-lg "
          />
          {batch && (
            <Batch
              className="absolute top-5 left-5 bg-primery py-1 px-2 font-dm text-xs text-white"
              item="New"
            />
          )}
          <div className="absolute  bottom-[-70%] w-full  bg-primery bg-opacity-80 px-[30px] py-6 font-bold duration-500 group-hover:bottom-0 text-white">
            <Flex className="ltr flex items-center justify-end gap-4 font-dm text-base ">
              <div className="ltr cursor-pointer">Add to Wish List</div>
              <GiSelfLove />
            </Flex>
            <Flex className=" my-5 flex cursor-pointer items-center justify-end  gap-4">
              <div>Compare</div>
              <SiConvertio />
            </Flex>
            <Flex className="flex cursor-pointer items-center  justify-end  gap-4">
              <div>Add to Cart</div>
              <FiShoppingBag className="text-white" />
            </Flex>
          </div>
        </div>
      </div>

      <div className=" border-x border-b border-[#f0f0f0]   px-3    w-full bg-white py-5">
        <Link to="/product-details">
          <h2 className=" flex justify-between gap-x-2 items-center font-dm text-base font-bold text-[#262626]">
            {name}
            <span className="text-[#767676]">$44.00</span>
          </h2>
          <p className="mt-2 text-xs">Brand X</p>
        </Link>
      </div>
    </>
  );
};

export default Product;
