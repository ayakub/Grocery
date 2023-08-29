import Container from "./Container";
import React from "react";
import ListItem from "./ListItem";
import Images from "./Images";
import Footerlistitem from "./Footerlistitem";
import Footerinfo from "./Footerinfo";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const Fotter = () => {
  return (
    <div className="mt-5 bg-[#191312] py-14 w-full h-full bg-[url('./assets/footer-bg-min.png')]">
      <Container>
        <div className="flex flex-wrap">
          <div className="w-1/2 lg:w-[10%]">
            <Footerlistitem
              className="mb-4 font-dm text-base font-bold text-white"
              MenuTitel="MENU"
            >
              <ListItem className="text-[#5F6871]">Home</ListItem>
              <ListItem className="text-[#5F6871]">About</ListItem>
              <ListItem className="text-[#5F6871]">Shop</ListItem>
              <ListItem className="text-[#5F6871]">Contact</ListItem>
              <ListItem className="text-[#5F6871]">Jurnal</ListItem>
            </Footerlistitem>
          </div>
          <div className="w1/2 lg:w-[10%]">
            <Footerlistitem
              className="mb-4 font-dm text-base font-bold text-white"
              MenuTitel="Shop"
            >
              <ListItem className="text-[#5F6871]">Fresh produce</ListItem>
              <ListItem className="text-[#5F6871]">Frozen</ListItem>
              <ListItem className="text-[#5F6871]">Meat & Fish</ListItem>
              <ListItem className="text-[#5F6871]">Organic Foods</ListItem>
              <ListItem className="text-[#5F6871]">Snacks</ListItem>
            </Footerlistitem>
          </div>
          <div className="mt-4 w-1/2 lg:mt-0 lg:w-[10%]">
            <Footerlistitem
              className="mb-4 font-dm text-base font-bold text-white"
              MenuTitel="Our tream"
            >
              <ListItem className="text-[#5F6871]">Privacy Policy</ListItem>
              <ListItem className="text-[#5F6871]">Terms & Conditions</ListItem>
              <ListItem className="text-[#5F6871]">Special E-shop</ListItem>
              <ListItem className="text-[#5F6871]">Shipping</ListItem>
              <ListItem className="text-[#5F6871]">Secure Payments</ListItem>
            </Footerlistitem>
          </div>
          <div className="mt-4 flex w-1/2 justify-center lg:mt-0 lg:w-[30%]">
            <Footerinfo>
              <ListItem
                className="font-dm text-base font-bold text-[#262626]"
                item="(052) 611-5711"
              />
              <ListItem
                className="font-dm text-base font-bold text-[#262626]"
                item="company@domain.com"
              />
              <ListItem
                className="mt-4 font-dm text-sm text-[#6D6D6D]"
                item="575 Crescent Ave. Quakertown, PA 18951"
              />
            </Footerinfo>
          </div>
          <div className="flex w-full mt-4  justify-center lg:inline-block lg:w-[40%]">
            <Images imgsrc="./assets/Logo-fotter.png" />
          </div>
        </div>
        <div className="mt-4 flex  flex-wrap items-center  justify-between lg:mt-16">
          <div className=" flex w-full justify-center gap-6  text-center text-xl lg:w-auto">
            <Link to="#">
              <FaFacebookF className="text-[#6D6D6D]" />
            </Link>
            <Link to="#">
              <AiFillInstagram className="text-[#6D6D6D]" />
            </Link>
            <Link to="#">
              <AiFillLinkedin className="text-[#6D6D6D]" />
            </Link>
          </div>
          <p className=" mt-4 w-full text-center font-dm text-sm text-[#6D6D6D] lg:mt-0 lg:w-auto">
            2023 Gorcery Minimal eCommerce Figma Template by Adveits
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Fotter;
