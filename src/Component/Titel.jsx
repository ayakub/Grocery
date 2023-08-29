import React from "react";

const Titel = ({ titel }) => {
  return (
    <>
      <h2 className="mb-2 font-dm lg:text-[39px] text-lg font-bold text-green-600 lg:mb-5">
        {titel}
      </h2>
    </>
  );
};

export default Titel;
