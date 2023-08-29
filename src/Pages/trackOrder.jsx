import React from "react";
import Container from "../Component/Container";
import BreadCump from "../Component/BreadCump";
import Inputbox from "../Component/Inputbox";

const trackOrder = () => {
  return (
    <>
      <Container>
        <BreadCump />
        <p className="text-base font-dm text-[#5F6871] my-5 md:max-w-[87%] mx-auto">
          To track your order please enter your Order ID in the box below and
          press the "Track" button. This was given to you on your receipt and in
          the confirmation email you should have received.
        </p>
        <div className="flex flex-col md:flex-row justify-evenly">
          <div className="flex flex-col md:w-[40%] my-2">
            <label className="text-[#5F6871]">Order ID</label>
            <Inputbox
              className=" mt-2 border px-8 py-3 w-full rounded-lg "
              placeholder="Find your Order Confirme your email"
            />
          </div>
          <div className="flex flex-col md:w-[40%] my-2">
            <label className="text-[#5F6871]">Billing email</label>
            <Inputbox
              className="mt-2 border px-8 py-3 w-full rounded-lg "
              placeholder="Email you used during checkout"
            />
          </div>
        </div>
        <button className="md:ml-[80px] mt-5 bg-green-100 px-5 py-2 rounded-3xl text-green-600 hover:bg-yellow-400 hover:text-white transition ease-in-out delay-150">
          Track
        </button>
      </Container>
    </>
  );
};

export default trackOrder;
