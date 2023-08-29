import React, { useState } from "react";
import Container from "./Container";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";

const Accordion = ({ title, content }) => {
  const [active, setActive] = useState(false);
  return (
    <Container>
      <div
        className={`border-b-2 my-2 p-3 border-gray-500 cursor-pointer duration-300 md:w-[60%] mx-auto py-3 ${
          active && "bg-primery border-none text-white rounded-md"
        }`}
      >
        <div
          className="flex justify-between"
          onClick={() => setActive(!active)}
        >
          <div className="text-xl font-semibold my-3">{title}</div>
          <div className="flex items-center">
            {active ? (
              <CgMathMinus className="text-2xl font-bold bg-white text-[#26901b]" />
            ) : (
              <CgMathPlus className="text-2xl font-bold bg-[#26901b] text-white" />
            )}
          </div>
        </div>
        {active && <div className="left-7">{content}</div>}
      </div>
    </Container>
  );
};

export default Accordion;
