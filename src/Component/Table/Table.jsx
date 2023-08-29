import React from "react";
import { useLocation } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Table = () => {
  const { pathname } = useLocation();

  console.log(location.pathname);
  return (
    <div className="overflow-auto">
      <table className="w-full max-w-7xl border mx-auto table-auto">
        <thead className="border-b">
          <tr>
            <th className="py-3">Image</th>
            <th className="py-3">Product</th>
            <th className="py-3">Price</th>

            {pathname.includes("cart") ? (
              <>
                <th className="py-3">Quantity</th>
                <th className="py-3">Pay</th>
                <th className="py-3">Action</th>
              </>
            ) : (
              <>
                <th className="py-3">Add</th>
                <th className="py-3">Pay</th>
                <th className="py-3">Action</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          <tr className="text-center border-b text-sm md:text-lg">
            <th>
              {" "}
              <img
                className="w-12 md:w-24 h-12 md:h-24 mx-auto"
                src="./assets/crispy-fried-chicken-meat-black-background-with-smoke-min.jpg"
                alt=""
              />{" "}
            </th>
            <td>Chicken-meat</td>
            <td>$28.00</td>

            {pathname.includes("cart") ? (
              <>
                <td>1</td>
                <td>
                  <button
                    className=" text-center transition duration-500 hover:bg-[#333533] bg-[#008000] text-white rounded font-semibold text-sm my-3 py-1 px-3"
                    type="submit"
                  >
                    Payment
                  </button>
                </td>
                <td>
                  <button
                    className=" text-center transition duration-500 hover:bg-[#333533] hover:text-white text-red-700 rounded font-semibold text-sm my-3 py-1 px-3"
                    type="submit"
                  >
                    {" "}
                    <ImCross />{" "}
                  </button>
                </td>
              </>
            ) : (
              <>
                <td>
                  <button
                    className=" text-center transition duration-500 hover:bg-[#333533] bg-[#008000] text-white rounded-2xl font-semibold  my-3 py-2 px-3"
                    type="submit"
                  >
                    {" "}
                    <AiOutlineShoppingCart />{" "}
                  </button>
                </td>
                <td>
                  <button
                    className=" text-center transition duration-500 hover:bg-[#333533] bg-[#008000] text-white rounded-2xl font-semibold text-xs my-3 py-2 px-4"
                    type="submit"
                  >
                    Checkout
                  </button>
                </td>
                <td>
                  <button
                    className=" text-center transition duration-500 hover:bg-[#333533] hover:text-white text-red-700 rounded font-semibold text-sm my-3 py-1 px-3"
                    type="submit"
                  >
                    {" "}
                    <ImCross />{" "}
                  </button>
                </td>
              </>
            )}
          </tr>
          <tr className="text-center border-b text-sm md:text-lg">
            <th>
              {" "}
              <img
                className="w-12 md:w-24 h-12 md:h-24 mx-auto"
                src="./assets/homemade-brownie-served-with-chocolate-fudge-min.jpg"
                alt=""
              />{" "}
            </th>
            <td>Chocolate-Cake</td>
            <td>$32.00</td>
            {pathname.includes("cart") ? (
              <>
                <td>1</td>
                <td>
                  <button
                    className=" text-center transition duration-500 hover:bg-[#333533] bg-[#008000] text-white rounded font-semibold text-sm my-3 py-1 px-3"
                    type="submit"
                  >
                    Payment
                  </button>
                </td>
                <td>
                  <button
                    className=" text-center transition duration-500 hover:bg-[#333533] hover:text-white text-red-700 rounded font-semibold text-sm my-3 py-1 px-3"
                    type="submit"
                  >
                    {" "}
                    <ImCross />{" "}
                  </button>
                </td>
              </>
            ) : (
              <>
                <td>
                  <button
                    className=" text-center transition duration-500 hover:bg-[#333533] bg-[#008000] text-white rounded-2xl font-semibold  my-3 py-2 px-3"
                    type="submit"
                  >
                    {" "}
                    <AiOutlineShoppingCart />{" "}
                  </button>
                </td>
                <td>
                  <button
                    className=" text-center transition duration-500 hover:bg-[#333533] bg-[#008000] text-white rounded-2xl font-semibold text-xs my-3 py-2 px-4"
                    type="submit"
                  >
                    Checkout
                  </button>
                </td>
                <td>
                  <button
                    className=" text-center transition duration-500 hover:bg-[#333533] hover:text-white text-red-700 rounded font-semibold text-sm my-3 py-1 px-3"
                    type="submit"
                  >
                    {" "}
                    <ImCross />{" "}
                  </button>
                </td>
              </>
            )}
          </tr>
          <tr className="text-center border-b text-sm md:text-lg">
            <th>
              {" "}
              <img
                className="w-12 md:w-24 h-12 md:h-24 mx-auto"
                src="./assets/ice-cream-waffle-cone-with-melting-caramel-blue-background-min.jpg"
                alt=""
              />{" "}
            </th>
            <td>Ice-Cream</td>
            <td>$12.00</td>
            {pathname.includes("cart") ? (
              <>
                <td>1</td>
                <td>
                  <button
                    className=" text-center transition duration-500 hover:bg-[#333533] bg-[#008000] text-white rounded font-semibold text-sm my-3 py-1 px-3"
                    type="submit"
                  >
                    Payment
                  </button>
                </td>
                <td>
                  <button
                    className=" text-center transition duration-500 hover:bg-[#333533] hover:text-white text-red-700 rounded font-semibold text-sm my-3 py-1 px-3"
                    type="submit"
                  >
                    {" "}
                    <ImCross />{" "}
                  </button>
                </td>
              </>
            ) : (
              <>
                <td>
                  <button
                    className=" text-center transition duration-500 hover:bg-[#333533] bg-[#008000] text-white rounded-2xl font-semibold my-3 py-2 px-3"
                    type="submit"
                  >
                    {" "}
                    <AiOutlineShoppingCart />{" "}
                  </button>
                </td>
                <td>
                  <button
                    className=" text-center transition duration-500 hover:bg-[#333533] bg-[#008000] text-white rounded-2xl font-semibold text-xs my-3 py-2 px-4"
                    type="submit"
                  >
                    Checkout
                  </button>
                </td>
                <td>
                  <button
                    className=" text-center transition duration-500 hover:bg-[#333533] hover:text-white text-red-700 rounded font-semibold text-sm my-3 py-1 px-3"
                    type="submit"
                  >
                    {" "}
                    <ImCross />{" "}
                  </button>
                </td>
              </>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
