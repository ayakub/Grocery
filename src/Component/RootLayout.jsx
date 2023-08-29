import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Fotter from "./Fotter";
import Navbar from "./Navbar";

const RootLayout = () => {
  const location = useLocation();
  useEffect(()=>{
    window.scrollTo(0,0)
  },[location])
  return (
    <>
      <Navbar />
      <Outlet />
      <Fotter />
    </>
  );
};

export default RootLayout;
