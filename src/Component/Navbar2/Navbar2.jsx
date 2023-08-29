import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Inputbox from "../Inputbox";
import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineHeart,
} from "react-icons/ai";
import Slider from "../../Pages/Home2/Slider/Slider";
import { FaUserPlus } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sst = window;
  const toggleIsOpen = () => {
    setIsOpen((value) => !value);
  };
  useEffect(() => {
    console.log(sst);
  }, [sst]);

  return (
    <div>
      <div className="flex justify-end px-5 md:px-10 py-1">
        <Link to="/login">
          <button
            className="font-bold text-sm bg-[#008000] hover:bg-yellow-600 hover:text-white transition duration-300 text-white py-1 px-2 rounded mr-3 flex justify-center items-center"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            {" "}
            <span className="text-sm mr-1 font-bold">
              <FiLogIn />
            </span>{" "}
            Login
          </button>
        </Link>
        <Link to="/register">
          <button
            className="font-bold text-sm bg-[#008000] hover:bg-yellow-600 hover:text-white transition duration-300 text-white py-1 px-2 rounded mr-3 flex justify-center items-center"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            {" "}
            <span className="text-sm mr-1 font-bold">
              <FaUserPlus />
            </span>{" "}
            Register
          </button>
        </Link>
      </div>
      <div className="h-[72px] w-full bg-primery flex justify-between items-center px-3 ">
        <div className="flex">
          <div className="hover:bg-white group duration-300 rounded-md p-2 m-2">
            <AiOutlineMenu
              onClick={toggleIsOpen}
              className=" text-white group-hover:text-yellow-500 text-xl md:text-3xl cursor-pointer"
            />
          </div>
          <div className="h-[60px] rounded mx-3 flex justify-center items-center">
            <AiOutlineShoppingCart className="text-yellow-300 text-3xl mx-2" />
            <h1 className="text-lg md:text-2xl font-semibold text-white">
              Grocer
            </h1>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="lg:w-[600px] flex justify-center  items-center  rounded-md bg-white">
            <Inputbox
              type="text"
              className="border focus:outline-none focus:border-green-500 w-full  py-2 px-5 rounded-md relative"
              placeholder="Search your product"
            />
            <AiOutlineSearch className="text-sm text-gray-300  w-8 h-8" />
          </div>
        </div>
        <div className="flex">
          <div className="border-2 rounded-full p-2 cursor-pointer mx-2 transition duration-300 hover:bg-white text-white hover:text-yellow-500">
            <AiOutlineUser className="md:text-xl" />
          </div>
          <Link to="/wishlist">
            <div className="border-2 rounded-full  transition duration-300 hover:bg-white text-white hover:text-yellow-500 p-2 cursor-pointer mx-2">
              <AiOutlineHeart className="md:text-xl " />
            </div>
          </Link>
          <Link to="/cart">
            <div className="border-2 rounded-full p-2 cursor-pointer mx-2 transition duration-300 hover:bg-white text-white hover:text-yellow-500">
              <AiOutlineShoppingCart className="md:text-xl" />
            </div>
          </Link>
        </div>
      </div>
      <div className="w-[200px] md:w-[250px] absolute top-15 left-0 rounded-b-md">
        {isOpen && <Slider />}
      </div>
    </div>
  );
};

export default Navbar2;
