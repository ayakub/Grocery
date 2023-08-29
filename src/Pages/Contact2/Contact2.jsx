import React from 'react';
import Lottie from "lottie-react";
import contact from './contact.json';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import BreadCump from '../../Component/BreadCump';

const Contact2 = () => {
    return (
        <div className='my-10 max-w-6xl mx-auto'>
            <BreadCump/>
            <h1 className='text-center text-3xl font-semibold text-gray-500'> <img className='w-80 mx-auto' src="./assets/contact2.png" alt="" /> </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 p-3'>
                <div data-aos="zoom-in">
                    <Lottie className="lg:w-[450px]" animationData={contact} loop={true} />
                    <div className='flex items-center text-xl text-[#008000] mt-5'>
                        <span className='mr-4 border border-[#008000]  p-2 rounded-full'><AiOutlineMail /></span>
                        <span>Email: grocery@shop.com</span>
                    </div>
                    <div className='flex items-center text-xl text-[#008000] mt-5'>
                        <span className='mr-4 border border-[#008000]  p-2 rounded-full'><AiOutlinePhone /></span>
                        <span>Phone: +9875241556</span>
                    </div>
                    <div className='flex items-center text-xl text-[#008000] mt-5'>
                        <span className='mr-4 border border-[#008000]  p-2 rounded-full'><AiOutlineMail /></span>
                        <span>Address: 105 Middle Badda, Dhaka - 1212,</span>
                    </div>
                </div>
                <div className='my-10'>
                    <div className='my-2'>
                        <label className='font-semibold'>Your Name</label>
                        <input type='text' className='w-full border focus:border-green-600 focus:outline-none p-2 my-2 rounded' placeholder='Name' required />
                    </div>
                    <div className='my-2'>
                        <label className='font-semibold'>Your Email</label>
                        <input type='text' className='w-full border focus:border-green-600 focus:outline-none p-2 my-2 rounded' placeholder='Email' required />
                    </div>
                    <div className='my-2'>
                        <label className='font-semibold'>Your Phone</label>
                        <input type='text' className='w-full border focus:border-green-600 focus:outline-none p-2 my-2 rounded' placeholder='Phone' required />
                    </div>
                    <div className='my-2'>
                        <label className='font-semibold'>Your Message</label>
                        <textarea type='text' className='w-full border focus:border-green-600 focus:outline-none p-2 my-2 rounded' placeholder='Message' required />
                    </div>
                    <div className='mt-7'>
                        <button className='px-5 py-2 border transitation duration-300 hover:bg-[#0ecc0e] bg-primery text-white rounded'>Submit Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact2;