import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Images from "./Images";
const BreadCump = () => {
  return (
    <>
      <Container>
        <div className="flex items-center mb-4">
          <Link to="/">Home</Link>{" "}
          <MdOutlineArrowForwardIos className="text-xs mr-2 ml-1 " />
          <div className="text-yellow-400">
            {window.location.pathname.split("/")[1].toUpperCase()}
          </div>
        </div>
      </Container>
    </>
  );
};

export default BreadCump;
