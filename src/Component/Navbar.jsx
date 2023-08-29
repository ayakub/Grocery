import React, { useRef, useState, useEffect } from "react";
import Images from "./Images";
import Container from "./Container";
import List from "./List";
import ListItem from "./ListItem";
import { MdAccountCircle, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BsFillHeartFill } from "react-icons/bs";
import { FaShoppingBasket } from "react-icons/fa";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { BsChevronCompactDown } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoThreeBars } from "react-icons/go";
import { HiMail } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";
import Inputbox from "./Inputbox";
import { Link } from "react-router-dom";
import Dropdown from "./DropDown";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const Navbar = () => {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  let ref = useRef();
  let userRef = useRef();
  let shopRef = useRef();
  let homeDropRef = useRef();
  let conatctDropRef = useRef();
  let [show, setShow] = useState(false);
  let [userDown, setUserDown] = useState(false);
  let [homeDrop, setHomeDrop] = useState(false);
  let [contactDrop, setContactDrop] = useState(false);
  let [shopDropDown, setShopDropDown] = useState(false);

  const [sideNave, setSideNave] = useState(false);
  useEffect(() => {
    myresize();
    function myresize() {
      if (window.innerWidth < 1024) {
        setSideNave(false);
      } else {
        setSideNave(true);
      }
    }
    window.addEventListener("resize", myresize);
  }, []);
  const erRef = ref?.value || "";
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (ref.current.contains(e.target)) {
        setShow(true);
      } else {
        setShow(false);
      }

      if (userRef.current.contains(e.target)) {
        setUserDown(true);
      } else {
        setUserDown(false);
      }
      if (shopRef.current.contains(e.target)) {
        setShopDropDown(true);
      } else {
        setShopDropDown(false);
      }
      if (homeDropRef.current.contains(e.target)) {
        setHomeDrop(true);
      } else {
        setHomeDrop(false);
      }
      if (conatctDropRef.current.contains(e.target)) {
        setContactDrop(true);
      } else {
        setContactDrop(false);
      }
    });
  }, []);
  let [my, setMy] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 150) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  return (
    <>
      <div className="flex md:justify-between justify-end  bg-primery text-white  px-3 py-2 font-dm">
        <div className="md:flex gap-x-3  hidden">
          <p>Buy one get one free for frist order</p>
          <span>|</span>
          <Link to="/trackOrder">
            <p className="hover:bg-white hover:text-green-600 rounded duration-300 px-2 py-0.5">
              Track your Order{" "}
            </p>
          </Link>
        </div>
        <div className="flex gap-x-3">
          <Link to="/wishlist">
            <p className="hover:bg-white hover:text-green-600 rounded duration-300 px-2 py-0.5">
              Wish List
            </p>
          </Link>
          <Link to="/cheakOut">
            <p className="hover:bg-white hover:text-green-600 rounded duration-300 px-2 py-0.5">
              Checkout
            </p>
          </Link>
        </div>
      </div>
      <Container>
        <div
          className={
            scrolled
              ? "fixed w-full transition ease-linear duration-300 delay-200 translate-y-[-45px] opacity-100 left-0  z-50 justify-between items-center py-0 px-6 drop-shadow-lg	 bg-white flex"
              : "flex justify-between translate-y-[0 ] opacity-100 left-0 items-center py-4 "
          }
        >
          <div
            className={
              scrolled
                ? "opacity-100  ease-linear duration-300 delay-200 transition-opacity	"
                : "opacity-100  transition-opacity	  ease-linear duration-300 delay-200"
            }
          >
            <Link to="/">
              <Images imgsrc="./assets/Logo.png" />
            </Link>
          </div>
          {scrolled ? (
            <div
              className={
                scrolled
                  ? "flex opacity-100  ease-linear duration-300 transition-opacity	 delay-200 gap-x-10"
                  : "opacity-0 transition-opacity	 ease-linear duration-300 delay-200"
              }
            >
              <List className="  lg:flex gap-x-3 hidden">
                <ListItem className="hover:text-green-600 lg:flex block  lg:items-center">
                  <Dropdown
                    togolref={userRef}
                    className="relative flex items-center"
                  >
                    <ListItem className="cursor-pointer">Home </ListItem>
                    <MdKeyboardArrowDown />
                    {userDown && (
                      <List className="absolute  bottom-[-100px] bg-white z-10 p-4 w-[150px]">
                        <Link to="/">
                          <ListItem className="border-b pb-2 cursor-pointer ">
                            Home1
                          </ListItem>
                        </Link>
                        <Link to="/home-2">
                          <ListItem className=" mb-2 pt-2 cursor-pointer">
                            Home2
                          </ListItem>
                        </Link>
                      </List>
                    )}
                  </Dropdown>
                </ListItem>
                <ListItem className="hover:text-green-600 flex items-center">
                  <Link to="/about">About</Link>
                </ListItem>
                <ListItem className="hover:text-green-600 flex items-center cursor-pointer">
                  <Link to="/shop">Shop</Link>
                </ListItem>
                <ListItem className="hover:text-green-600 flex items-center cursor-pointer">
                  <Link to="/blog">Blog</Link>
                </ListItem>
                <ListItem className="hover:text-green-600 flex items-center cursor-pointer">
                  <Dropdown
                    togolref={shopRef}
                    className="relative flex items-center"
                  >
                    <ListItem className="cursor-pointer">Contact</ListItem>
                    <MdKeyboardArrowDown />
                    {shopDropDown && (
                      <List className="absolute  bottom-[-100px] bg-white z-10 p-4 w-[150px]">
                        <Link to="/Contact">
                          <ListItem className="border-b pb-2">
                            Contact1
                          </ListItem>
                        </Link>
                        <Link to="/contact2">
                          <ListItem className=" mb-2 pt-2">contact2</ListItem>
                        </Link>
                      </List>
                    )}
                  </Dropdown>
                </ListItem>
                <ListItem className="hover:text-green-600 flex items-center">
                  <Link to="/faq">FAQ</Link>
                </ListItem>
              </List>
              <div className="lg:flex items-center gap-x-4 hidden">
                <HiMail className="w-8 h-8 text-green-600" />
                <a
                  href="mailto: abc@example.com"
                  className="hover:text-green-600"
                >
                  yourdomin@gmailcom
                </a>
              </div>
            </div>
          ) : (
            <div className="flex items-center max-w-[400px] lg:w-[400px] relative">
              <Inputbox
                type="text"
                className="focus:outline-none focus:border-green-500 border w-full text-xs  py-2 px-2 md:px-5 rounded-2xl relative"
                placeholder="Search"
              />
              <AiOutlineSearch className="md:text-sm text-gray-300 rounded-2xl w-4 h-4 md:w-7 md:h-7 absolute md:top-[2px] md:right-1 right-1" />
            </div>
          )}

          <div>
            <div className="flex">
              <div className="border-2 rounded-full p-2 cursor-pointer mx-2 transition duration-300 hover:bg-[#26901b] text-black hover:text-white">
                <AiOutlineUser className="md:text-xl" />
              </div>
              <Link to="/wishlist">
                <div className="border-2 rounded-full  transition duration-300 hover:bg-[#26901b] text-black hover:text-white p-2 cursor-pointer mx-2">
                  <AiOutlineHeart className="md:text-xl " />
                </div>
              </Link>
              <Link to="/cart">
                <div className="border-2 rounded-full p-2 cursor-pointer mx-2 transition duration-300 hover:bg-[#26901b] text-black hover:text-white">
                  <AiOutlineShoppingCart className="md:text-xl" />
                </div>
              </Link>
            </div>
          </div>
          {scrolled ? (
            <GoThreeBars
              onClick={() => setMy(!my)}
              className="w-6 h-6 cursor-pointer	 blcok ml-auto lg:hidden "
            />
          ) : (
            ""
          )}
        </div>

        <div className="flex items-center cursor-pointer justify-center gap-x-10  font-dm border-t-2">
          <Dropdown togolref={ref} className="z-50 relative">
            <div className="flex justify-center gap-x-4 items-center bg-primery text-white my-3   p-3 rounded-lg">
              <AiOutlineMenu />
              <h1 className="tape:text-xs ">Browse for All Categories</h1>
              <BsChevronCompactDown />
            </div>
            {show && (
              <List className="absolute bg-white w-[100%] ">
                <div className="flex group justify-between pb-2  border-b pl-4 transition-all ease-linear   hover:bg-[#f0f0f09e] hover:text-green-600 font-dm font-medium items-center relative">
                  <ListItem className="">Bekery</ListItem>
                  <IoIosArrowForward className="group-hover:hidden block" />
                  <IoIosArrowDown className="group-hover:block hidden" />
                  <List className="bg-white  px-3 group-hover:right-[-68%] md:group-hover:right-[-74%] group-hover:visible  invisible absolute top-0 text-green-600">
                    <ListItem className="pb-2 text-black hover:text-green-500  border-b md:pl-4 mt-2">
                      Muffins & Donust
                    </ListItem>
                    <ListItem className="pb-2 text-black hover:text-green-500text-black hover:text-green-500  pl-4 mt-2">
                      Rolls & Buns
                    </ListItem>
                  </List>
                </div>

                <div className="flex group justify-between pb-2  border-b pl-4 transition-all ease-linear   hover:bg-[#f0f0f09e] hover:text-green-600 font-dm font-medium items-center relative">
                  <ListItem className="">Bread</ListItem>
                  <IoIosArrowForward className="group-hover:hidden block" />
                  <IoIosArrowDown className="group-hover:block hidden" />
                  <List className="bg-white px-3 group-hover:right-[0%] translate-x-[100%] group-hover:visible  invisible absolute top-0 group-hover:transition-all text-green-600">
                    <ListItem className="pb-2 text-black hover:text-green-500 border-b pl-4 mt-2">
                      Pies
                    </ListItem>
                    <ListItem className="pb-2 text-black hover:text-green-500 border-b  pl-4 mt-2">
                      Snack
                    </ListItem>
                    <ListItem className="pb-2 text-black hover:text-green-500 border-b pl-4 mt-2">
                      Cakes
                    </ListItem>
                    <ListItem className="pb-2 text-black hover:text-green-500 border-b pl-4 mt-2">
                      Custom
                    </ListItem>
                  </List>
                </div>

                <div className="flex group justify-between pb-2  border-b pl-4 transition-all ease-linear   hover:bg-[#f0f0f09e] hover:text-green-600 font-dm font-medium items-center relative">
                  <ListItem className="">Custom cakes</ListItem>
                </div>

                <div className="flex group justify-between pb-2  border-b pl-4 transition-all ease-linear   hover:bg-[#f0f0f09e] hover:text-green-600 font-dm font-medium items-center relative">
                  <ListItem className="">Candy</ListItem>
                  <IoIosArrowForward className="group-hover:hidden block" />
                  <IoIosArrowDown className="group-hover:block hidden" />
                  <List className="bg-white px-3 group-hover:right-[0%] translate-x-[100%] group-hover:visible  invisible absolute top-0 text-green-600 group-hover:transition-all ">
                    <ListItem className="pb-2 text-black hover:text-green-500text-black hover:text-green-500 border-b pl-4 mt-2">
                      Gum
                    </ListItem>
                    <ListItem className="pb-2 text-black hover:text-green-500text-black hover:text-green-500 border-b  pl-4 mt-2">
                      Baby
                    </ListItem>
                    <ListItem className="pb-2 text-black hover:text-green-500text-black hover:text-green-500 border-b pl-4 mt-2">
                      Candy
                    </ListItem>
                  </List>
                </div>
                <div className="flex group justify-between pb-2  border-b pl-4 transition-all ease-linear   hover:bg-[#f0f0f09e] hover:text-green-600 font-dm font-medium items-center relative">
                  <ListItem className="">Coffee</ListItem>

                  <IoIosArrowForward className="group-hover:hidden block" />
                  <IoIosArrowDown className="group-hover:block hidden" />
                  <List className="bg-white px-3 group-hover:right-[0%] translate-x-[100%] group-hover:visible  invisible absolute text-green-600 top-0 group-hover:transition-all ">
                    <ListItem className="pb-2 text-black hover:text-green-500 border-b pl-4 mt-2">
                      Instant Coffee
                    </ListItem>
                    <ListItem className="pb-2 text-black hover:text-green-500 border-b  pl-4 mt-2">
                      Cold Coffee
                    </ListItem>
                    <ListItem className="pb-2 text-black hover:text-green-500 border-b pl-4 mt-2">
                      Coffe Pods
                    </ListItem>
                  </List>
                </div>

                <div className="flex group justify-between pb-2  border-b pl-4 transition-all ease-linear   hover:bg-[#f0f0f09e] hover:text-green-600 font-dm font-medium items-center relative">
                  <ListItem className="">Dairy & Eggs</ListItem>
                  <IoIosArrowForward className="group-hover:hidden block" />
                  <IoIosArrowDown className="group-hover:block hidden" />
                  <List className="bg-white px-3 group-hover:right-[0%] translate-x-[100%] group-hover:visible  invisible absolute text-green-600 top-0 group-hover:transition-all ">
                    <ListItem className="pb-2 text-black hover:text-green-500 border-b pl-4 mt-2">
                      Cheese
                    </ListItem>
                    <ListItem className="pb-2 text-black hover:text-green-500 border-b  pl-4 mt-2">
                      chocolate
                    </ListItem>
                    <ListItem className="pb-2 text-black hover:text-green-500 border-b pl-4 mt-2">
                      eggs
                    </ListItem>
                    <ListItem className="pb-2 text-black hover:text-green-500 border-b pl-4 mt-2">
                      milk
                    </ListItem>
                    <ListItem className="pb-2 text-black hover:text-green-500 border-b pl-4 mt-2">
                      yogurt
                    </ListItem>
                  </List>
                </div>

                <div className="flex group justify-between pb-2  border-b pl-4 transition-all ease-linear   hover:bg-[#f0f0f09e] hover:text-green-600 font-dm font-medium items-center relative">
                  <ListItem className="">Fresh produce</ListItem>
                  <IoIosArrowForward className="group-hover:hidden block" />
                  <IoIosArrowDown className="group-hover:block hidden" />
                  <List className="bg-white px-3 group-hover:right-[0%] translate-x-[100%] group-hover:visible  invisible text-green-600 absolute top-0 group-hover:transition-all ">
                    <ListItem className="pb-2 text-black hover:text-green-500 border-b pl-4 mt-2">
                      Fresh Herbs
                    </ListItem>
                    <ListItem className="pb-2 text-black hover:text-green-500 border-b  pl-4 mt-2">
                      Fresh
                    </ListItem>
                    <ListItem className="pb-2 text-black hover:text-green-500 border-b pl-4 mt-2">
                      Vegetables
                    </ListItem>
                  </List>
                </div>

                <div className="flex group justify-between pb-2  border-b pl-4 transition-all ease-linear   hover:bg-[#f0f0f09e] hover:text-green-600 font-dm font-medium items-center relative">
                  <ListItem className="">Frozen</ListItem>
                  <IoIosArrowForward className="group-hover:hidden block" />
                  <IoIosArrowDown className="group-hover:block hidden" />
                  <List className="bg-white px-3 group-hover:right-[0%] translate-x-[100%] group-hover:visible  invisible absolute text-green-600 top-0 group-hover:transition-all ">
                    <ListItem className="pb-2 text-black hover:text-green-500 border-b pl-4 mt-2">
                      Frozen breakfast
                    </ListItem>
                    <ListItem className="pb-2 text-black hover:text-green-500 border-b  pl-4 mt-2">
                      Snacks
                    </ListItem>
                    <ListItem className="pb-2 text-black hover:text-green-500 border-b pl-4 mt-2">
                      ice cream
                    </ListItem>
                    <ListItem className="pb-2 text-black hover:text-green-500 border-b pl-4 mt-2">
                      pizza & pasta
                    </ListItem>
                  </List>
                </div>

                <ListItem className="flex group justify-between pb-2  border-b pl-4 transition-all ease-linear   hover:bg-[#f0f0f09e] hover:text-green-600 font-dm font-medium items-center">
                  Meat & Fish
                </ListItem>

                <ListItem className="flex group justify-between pb-2  border-b pl-4 transition-all ease-linear   hover:bg-[#f0f0f09e] hover:text-green-600 font-dm font-medium items-center ">
                  Organic Foods
                </ListItem>

                <div className="flex group justify-between pb-2  border-b pl-4 transition-all ease-linear   hover:bg-[#f0f0f09e] hover:text-green-600 font-dm font-medium items-center relative">
                  <ListItem className="">Snacks</ListItem>
                  <IoIosArrowForward className="group-hover:hidden block" />
                  <IoIosArrowDown className="group-hover:block hidden" />
                  <List className="bg-white px-3 group-hover:right-[0%] translate-x-[100%] group-hover:visible  invisible text-green-600 absolute top-0 group-hover:transition-all ">
                    <ListItem className="pb-2 text-black hover:text-green-500 border-b pl-4 mt-2">
                      chips
                    </ListItem>
                    <ListItem className="pb-2 text-black hover:text-green-500 border-b  pl-4 mt-2">
                      cokies
                    </ListItem>
                    <ListItem className="pb-2 text-black hover:text-green-500 border-b pl-4 mt-2">
                      creackers
                    </ListItem>
                  </List>
                </div>
              </List>
            )}
          </Dropdown>
          <GoThreeBars
            onClick={() => setMy(!my)}
            className="	 blcok ml-auto lg:hidden "
          />

          <div className="relative">
            {my && (
              <>
                <div
                  className={
                    my
                      ? "fixed bg-white text-black  h-full w-[250px] top-0 right-[0] z-[99999] transition-all	"
                      : ""
                  }
                >
                  <GrFormClose className="w-7 h-7" onClick={() => setMy(!my)} />
                  <List className="flex flex-col justify-center items-center m-5">
                    <ListItem className=" py-2 lg:flex block lg:items-center">
                      <Dropdown
                        togolref={userRef}
                        className="relative flex items-center"
                      >
                        Home
                        <MdKeyboardArrowDown />
                        {userDown && (
                          <List className="absolute  bottom-[-100px] bg-white z-10 p-4 w-[150px]">
                            <Link to="/" onClick={() => setMy(!my)}>
                              <ListItem className="border-b pb-2">
                                Home1
                              </ListItem>
                            </Link>
                            <Link onClick={() => setMy(!my)} to="/home-2">
                              <ListItem className=" mb-2 pt-2">Home2</ListItem>
                            </Link>
                          </List>
                        )}
                      </Dropdown>
                    </ListItem>
                    <ListItem className=" py-2 flex items-center">
                      <Link onClick={() => setMy(!my)} to="/about">
                        About
                      </Link>{" "}
                    </ListItem>
                    <ListItem className="flex py-2 items-center">
                      <Link onClick={() => setMy(!my)} to="/shop">
                        Shop
                      </Link>{" "}
                    </ListItem>
                    <ListItem className="flex py-2 items-center">
                      <Link onClick={() => setMy(!my)} to="/blog">
                        Blog
                      </Link>{" "}
                    </ListItem>
                    <ListItem className="flex py-2 items-center">
                      <Link onClick={() => setMy(!my)} to="/contact">
                        Contact
                      </Link>{" "}
                    </ListItem>
                  </List>
                  <div className="flex items-center justify-center gap-x-4">
                    <HiMail className="w-8 h-8 text-green-600" />
                    <p className="font-dm font-bold hover:text-green-600">
                      yourdomain@gmail.com
                    </p>
                  </div>
                </div>
              </>
            )}
            <div className="lg:flex hidden gap-x-10">
              <List className="  lg:flex gap-x-3 hidden">
                <ListItem className="hover:text-green-600 lg:flex block lg:items-center group relative cursor-pointer">
                  Home
                  <MdKeyboardArrowDown />
                  <List className="absolute top-[-50px] invisible opacity-0 group-hover:visible   group-hover:top-[35px] group-hover:opacity-100 bottom-[-100px] bg-white z-50  ease-in duration-300 h-[80px]  ">
                    <Link to="/">
                      <ListItem className="border-b  hover:text-green-600 py-2 px-4 text-black transition-all ">
                        Home1
                      </ListItem>
                    </Link>
                    <Link to="/home-2">
                      <ListItem className=" hover:text-green-600 text-black transition-all py-2 px-4">
                        Home2
                      </ListItem>
                    </Link>
                  </List>
                </ListItem>

                <ListItem className="hover:text-green-600 flex items-center">
                  <Link to="/about">About</Link>
                </ListItem>
                <ListItem className="hover:text-green-600 flex items-center">
                  <Link to="/shop">Shop</Link>
                </ListItem>
                <ListItem className="hover:text-green-600 flex items-center">
                  <Link to="/blog">Blog</Link>
                </ListItem>

                <ListItem className="hover:text-green-600 lg:flex block lg:items-center group relative cursor-pointer">
                  Contact
                  <MdKeyboardArrowDown />
                  <List className="absolute top-[-50px] invisible opacity-0 group-hover:visible   group-hover:top-[35px] group-hover:opacity-100 bottom-[-100px] bg-white z-50  ease-in duration-300 h-[80px]  ">
                    <Link to="/Contact">
                      <ListItem className="border-b  hover:text-green-600 py-2 px-4 text-black transition-all ">
                        Contact1
                      </ListItem>
                    </Link>
                    <Link to="/contact2">
                      <ListItem className=" hover:text-green-600 text-black transition-all py-2 px-4">
                        Contact2
                      </ListItem>
                    </Link>
                  </List>
                </ListItem>

                <ListItem className="hover:text-green-600 flex items-center">
                  <Link to="/faq">FAQ</Link>
                </ListItem>
              </List>
              <div className="lg:flex items-center cursor-pointer gap-x-4 hidden">
                <HiMail className="w-8 h-8 text-green-600" />
                <p className="hover:text-green-600">yourdomain@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Navbar;
