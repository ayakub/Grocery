import React from "react";

const ProductFilter = ({ titel, children, onChange }) => {
  return (
    <>
      <span className=" px-2 lg:px-0">{titel}</span>
      <select
        onChange={onChange}
        id="countries"
        className=" focus:ring-black-500 focus:border-[#26901b] focus:outline-none  block lg:w-[240px] w-auto mx-auto lg:mx-0   border border-[#F0F0F] p-2.5 text-base text-[#767676]  "
      >
        {children}
      </select>
    </>
  );
};

export default ProductFilter;
