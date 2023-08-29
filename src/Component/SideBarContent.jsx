import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Heading from "./Heading";
import LeftSideBarItem from "./LeftSideBarItem";

const LeftSideBarContent = ({ titel, mydropdown, className }) => {
  let [drop, setDrop] = useState(mydropdown);
  let [show, setShow] = useState(mydropdown);
  return (
    <>
      {drop ? (
        <div
          className="flex items-center hover:bg-primery justify-between py-3"
          onClick={() => setShow(!show)}
        >
          <h2 className={className}>{titel}</h2>
        </div>
      ) : (
        <>
          <h2 className={className}>{titel}</h2>
        </>
      )}
    </>
  );
};

export default LeftSideBarContent;
