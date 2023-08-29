import React from 'react';
import { cetegorys } from './cetegorys';

const ProductCegegory = () => {
   
    return (
        <>
        <h1 className='text-center text-2xl font-semibold mt-5'>Product Cetegorys</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl my-5 mx-auto'>
            
            {
                cetegorys.map(cetegory => <div key={cetegory.name} className='border border-gray-300 mx-auto w-full p-5'>
                    <div className='flex justify-between items-center'>
                    <h1>{cetegory.name}</h1>
                    <>{cetegory.icon}</>
                    </div>
                </div>)
                

            }
        </div>
        </>
    );
};

export default ProductCegegory;