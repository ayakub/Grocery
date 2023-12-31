import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "./Product";

// Example items, to simulate fetching from another resources.
const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 4, 5, 6, 7,
  8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 4, 5,
  6, 7, 8, 9, 10, 11, 12, 13, 14, 12,
];

function Items({ currentItems }) {
  return (
    <div className=" flex flex-wrap justify-between gap-y-12">
      {currentItems &&
        currentItems.map((item) => (
          <div className="w-[370px] mx-auto  ring-[1px] ring-[#f0f0f0] rounded-lg ">
            <Product
              imgsrc="./assets/crispy-fried-chicken-meat-black-background-with-smoke-min.jpg"
              name="Chocolate-Cake"
            />
          </div>
        ))}
    </div>
  );
}

function Mypagination({ itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <div className="lg:mt-28 mt-20  flex flex-col lg:flex-row my-3 gap-y-3 items-center justify-between">
        <ReactPaginate
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          breakLabel="..."
          breakClassName="px-[14px] py-[9px] font-basic font-dm border border-[#F0F0F0] text-[#767676]"
          breakLinkClassName="page-link"
          pageCount={pageCount}
          activeClassName="bg-primery !text-white"
          pageClassName="px-[14px] py-[9px] font-basic font-dm border border-[#F0F0F0] text-[#767676]"
          pageLinkClassName="page-link"
          previousClassName="hidden"
          previousLinkClassName="page-link"
          nextClassName="hidden"
          nextLinkClassName="page-link"
          containerClassName="flex gap-x-8"
          renderOnZeroPageCount={null}
        />
        <p className="flex flex-row lg:flex-row font-dm  text-[#767676]">
          Products from {itemOffset} to {endOffset} of {items.length}
        </p>
      </div>
    </>
  );
}
export default Mypagination;
