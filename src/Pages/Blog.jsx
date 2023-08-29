import React from "react";
import PaginateItam from "./PaginateItam";
import BreadCump from "../Component/BreadCump";

const Blog = () => {
  const data = [
    {
      img: "./assets/ice-cream-waffle-cone-with-melting-caramel-blue-background-min.jpg",
      heading: "News for Ice-cream",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias voluptatem quisquam voluptatibus natus perferendis quis...",
      btn: "Read more",
    },
    {
      img: "./assets/cup-coffee-with-scattered-coffee-beans-around-cup-min.jpg",
      heading: "News Of Coffee",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias voluptatem quisquam voluptatibus natus perferendis quis...",
      btn: "Read more",
    },
    {
      img: "./assets/different-herbs-gray-wooden-table-against-blue-background-min.jpg",
      heading: "News of Herbs",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias voluptatem quisquam voluptatibus natus perferendis quis...",
      btn: "Read more",
    },
    {
      img: "./assets/fresh-baked-pastries-close-up-bakery-showcase-min.jpg",
      heading: "News of Bekery",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias voluptatem quisquam voluptatibus natus perferendis quis...",
      btn: "Read more",
    },
    {
      img: "./assets/homemade-brownie-served-with-chocolate-fudge-min.jpg",
      heading: "News of Chocolate",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias voluptatem quisquam voluptatibus natus perferendis quis...",
      btn: "Read more",
    },
    {
      img: "./assets/ice-cream-waffle-cone-with-melting-caramel-blue-background-min.jpg",
      heading: "News of Icecream",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias voluptatem quisquam voluptatibus natus perferendis quis...",
      btn: "Read more",
    },
    {
      img: "./assets/milk-strawberry-cocktail-generative-ai-min.jpg",
      heading: "News of Strawberry",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias voluptatem quisquam voluptatibus natus perferendis quis...",
      btn: "Read more",
    },
    {
      img: "./assets/pile-sliced-orange-fruit-with-light-brown-rim-min.jpg",
      heading: "News of Potato",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias voluptatem quisquam voluptatibus natus perferendis quis...",
      btn: "Read more",
    },
    {
      img: "./assets/white-background-candy-milk-piece-snack-dark-brown-sweet-food-black-bitter-slice-cocoa-min.jpg",
      heading: "News of Chocolate",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias voluptatem quisquam voluptatibus natus perferendis quis...",
      btn: "Read more",
    },
    {
      img: "./assets/milk-splash-generative-aixa-min.jpg",
      heading: "News of Milk",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias voluptatem quisquam voluptatibus natus perferendis quis...",
      btn: "Read more",
    },
  ];
  return (
    <div>
      <BreadCump />
      <PaginateItam data={data} />
    </div>
  );
};

export default Blog;
