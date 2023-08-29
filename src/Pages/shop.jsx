import React, { useState } from "react";
import BreadCump from "../Component//BreadCump";
import Container from "../Component/Container";
import Leftsidebar from "../Component/Leftsidebar";
import ProductFilter from "../Component/ProductFilter";
import Mypagination from "../Component/Mypagination";
import ReactSlider from "react-slider";
import Images from "../Component/Images";
import { Link } from "react-router-dom";

const shop = () => {
  let [show, setShow] = useState(12);
  let handelShowNubmer = (e) => {
    console.log(+e.target.value);
    setShow(+e.target.value);
  };
  return (
    <Container>
      <BreadCump />
      <Container />
      <div className=" mt-12 flex flex-col-reverse  lg:flex-row gap-x-12">
        <div className="lg:w-[25%] w-full h-[full] bg-white border px-2">
          <Leftsidebar />
          <h1 className="font-dm text-xl font-medium my-2 mb-2">
            Filter By Price
          </h1>
          <ReactSlider
            className="horizontal-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"
            defaultValue={[0, 100]}
            ariaLabel={["Lower thumb", "Upper thumb"]}
            ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
            renderThumb={(props, state) => (
              <>
                <div {...props}>{state.valueNow}</div>
              </>
            )}
            pearling
            minDistance={10}
          />
          <div className="flex mt-4 justify-between mb-3">
            <div className="px-6 py-2 border hover:bg-primery hover:text-white cursor-pointer duration-300 rounded">
              Filter
            </div>
            <div className="px-6 py-2 border hover:bg-primery hover:text-white cursor-pointer duration-300 rounded">
              Price: $0 — $120
            </div>
          </div>
          <Link to="#">
            <Images
              className="mt-5 lg:mt-20"
              imgsrc="./assets/sideaddproudct-min.png"
            />
          </Link>
          <Link to="#">
            <Images
              className="mt-5 lg:mt-20"
              imgsrc="./assets/12376247_59-min.png"
            />
          </Link>

          <div></div>
        </div>
        <div className="lg:w-[75%] w-full">
          <div className="mb-16 border py-2 flex items-center justify-between p-2 gap-3 ">
            <ProductFilter titel="Sort by:">
              <option selected>Featured</option>
              <option value="US">Best Product</option>
              <option value="US">Good Product</option>
            </ProductFilter>
            <ProductFilter onChange={handelShowNubmer} titel="Show:">
              <option selected>12</option>
              <option>24</option>
              <option>48</option>
            </ProductFilter>
          </div>

          <div>
            <Mypagination itemsPerPage={show} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default shop;
