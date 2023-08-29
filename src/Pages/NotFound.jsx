import React from "react";
import { Link } from "react-router-dom";
import Container from "../Component/Container";
import BreadCump from "../Component/BreadCump";

const NotFound = () => {
  return (
    <Container>
      <BreadCump />
      <h1 className="text-[#808080c8] font-dm text-[280px] font-bold text-center leading-[285px]">
        404
      </h1>
      <h2 className="text-3xl font-dm font-bold text-center">
        Oops... It looks like you ‘re lost !
      </h2>
      <p className="text-gray-400 text-center my-7">
        Oops! The page you are looking for does not exist. It might have been
        moved or deleted.
      </p>
      <div className="flex justify-center">
        <Link to={"/"}>
          <button className="bg-[#FFB41B] transition ease-in-out delay-150 px-5 py-3 text-base text-white rounded-sm hover:bg-blue-500 hover:text-white  ">
            Go Back Home
          </button>
        </Link>
      </div>
    </Container>
  );
};

export default NotFound;
