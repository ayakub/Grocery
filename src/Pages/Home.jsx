import React from "react";
import Banner from "../Component/Banner";
import OfferAdd from "../Component/OfferAdd";
import Service from "../Component/Service";
import NewArrivals from "../Component/NewArrivals";
import GroceryStaples from "../Component/GroceryStaples";
import SpacialOffer from "../Component/SpacialOffer";
import LimiteOffer from "../Component/LimiteOffer";

const Home = () => {
  return (
    <>
      <Banner />
      <OfferAdd />
      <Service />
      <NewArrivals />
      <GroceryStaples />
      <LimiteOffer />
      <SpacialOffer />
    </>
  );
};

export default Home;
