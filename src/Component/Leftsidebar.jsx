import React from "react";
import LeftSideBarContent from "./SideBarContent";

const Leftsidebar = () => {
  return (
    <>
      <LeftSideBarContent
        className=" mb-3 font-dm text-2xl py-5  border-b"
        titel="Product Categories"
        mydropdown={false}
      />
      <LeftSideBarContent
        className="p-2 border-b hover:bg-primery hover:text-white duration-300 hover:translate-x-1 cursor-pointer rounded font-dm text-base"
        titel="Baby Food Corner"
        mydropdown={false}
      />

      <LeftSideBarContent
        className="p-2 border-b hover:bg-primery hover:text-white duration-300 hover:translate-x-1 cursor-pointer rounded font-dm text-base"
        titel=" Beverage & Drinks"
        mydropdown={false}
      />
      <LeftSideBarContent
        className="p-2 border-b hover:bg-primery hover:text-white duration-300 hover:translate-x-1 cursor-pointer rounded font-dm text-base"
        titel=" Cocolate Box"
        mydropdown={false}
      />
      <LeftSideBarContent
        className="p-2 border-b hover:bg-primery hover:text-white duration-300 hover:translate-x-1 cursor-pointer rounded font-dm text-base"
        titel=" Dried Food Corner"
        mydropdown={false}
      />
      <LeftSideBarContent
        className="p-2 border-b hover:bg-primery hover:text-white duration-300 hover:translate-x-1 cursor-pointer rounded font-dm text-base"
        titel=" Frozen Foods"
        mydropdown={false}
      />
      <LeftSideBarContent
        className="p-2 border-b hover:bg-primery hover:text-white duration-300 hover:translate-x-1 cursor-pointer rounded font-dm text-base"
        titel=" Fruits & Vegetables" 
        mydropdown={false}
      />
      <LeftSideBarContent
        className="p-2 border-b hover:bg-primery hover:text-white duration-300 hover:translate-x-1 cursor-pointer rounded font-dm text-base"
        titel=" Meats & Grocery"
        mydropdown={false}
      />
      <LeftSideBarContent
        className="p-2 border-b hover:bg-primery hover:text-white duration-300 hover:translate-x-1 cursor-pointer rounded font-dm text-base"
        titel=" Milk & Juices"
        mydropdown={false}
      />
      <LeftSideBarContent
        className="p-2 border-b hover:bg-primery hover:text-white duration-300 hover:translate-x-1 cursor-pointer rounded font-dm text-base"
        titel=" Organic & Snacks"
        mydropdown={false}
      />
    </>
  );
};

export default Leftsidebar;
