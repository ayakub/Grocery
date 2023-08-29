import React, { useState } from 'react';
import Reveiw from './Reveiw';
import DetailsSection from './DetailsSection';
import Details from './Details';
import RecentView from './RecentView';


const ProductDetails = () => {


    return (
        <div>
            <DetailsSection />
            <Details />
            <h1 className='text-center text-4xl font-semibold my-10 text-[#3db82f]'>Customer Review</h1>
            <Reveiw />
            <RecentView />
        </div>
    );
};

export default ProductDetails;