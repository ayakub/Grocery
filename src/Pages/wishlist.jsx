import React from "react";
import { useLocation } from 'react-router-dom'
import Product from "../Component/Product";
import Table from "../Component/Table/Table";

const wishlist = () => {
  const { pathname } = useLocation()
  return (
    <div className="mt-10">
      <Table />
      <div className="flex justify-end max-w-7xl mt-5">
        <button className=' transition duration-500 hover:bg-[#333533] bg-[#008000] text-white rounded-2xl font-semibold text-xs my-3 py-2 px-4' type='submit'>Proceed To Checkout</button>
      </div>
    </div>
  );
};

export default wishlist;
