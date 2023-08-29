import React from 'react';
import Navbar2 from './Navbar2/Navbar2';
import { Outlet } from "react-router-dom";
import Footer2 from './Footer2/Footer2';

const Home2Layout = () => {
    return (
        <div>
            <Navbar2/>
            <Outlet/>
            <Footer2/>
        </div>
    );
};

export default Home2Layout;