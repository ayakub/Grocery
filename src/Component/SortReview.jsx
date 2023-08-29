import React from "react";

const SortReview = () => {
  return (
    <div className=" grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div className="flex justify-center items-center mt-10">
        <img
          className="w-16 h-16 rounded-full mr-4"
          src="./assets/young-bearded-man-with-striped-shirt-min.jpg"
          alt=""
        />
        <div>
          <h1 className="font-semibold text-xl">Due Jhonson</h1>
          <h1 className="text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ipsa
            consequatur perferendis quos exercitationem provident.
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <img
          className="w-16 h-16 rounded-full mr-4"
          src="./assets/young-bearded-man-with-striped-shirt-min.jpg"
          alt=""
        />
        <div>
          <h1 className="font-semibold text-xl">Ambuti Rayudu</h1>
          <h1 className="text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ipsa
            consequatur perferendis quos exercitationem provident.
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <img
          className="w-16 h-16 rounded-full mr-4"
          src="./assets/young-bearded-man-with-striped-shirt-min.jpg"
          alt=""
        />
        <div>
          <h1 className="font-semibold text-xl">Amir Hamza</h1>
          <h1 className="text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ipsa
            consequatur perferendis quos exercitationem provident.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SortReview;
