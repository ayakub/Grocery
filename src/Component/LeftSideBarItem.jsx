import React from "react";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Heading from "./Heading";
const LeftSideBarItem = (props) => {
  let [drop, setDrop] = useState(props.dropdown);
  let [show, setShow] = useState(false);
  return (
    <>
      {drop ? (
        <div
          className="flex items-center justify-between"
          onClick={() => setShow(!show)}
        >
          <h1>{props.titel}</h1>
          <IoIosArrowDown />
        </div>
      ) : (
        <h1>{props.titel}</h1>
      )}

      {show && <div>{props.children}</div>}
    </>
  );
};

export default LeftSideBarItem;
