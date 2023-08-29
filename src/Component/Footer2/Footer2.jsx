import React from 'react';
import {Link} from 'react-router-dom'

import { CiFacebook } from 'react-icons/ci'
import { TiSocialTwitterCircular } from 'react-icons/ti'
import { AiFillYoutube, AiOutlineShoppingCart } from 'react-icons/ai'
import { MdOutlineLocationOn, MdOutlinePhoneInTalk, MdOutlineMail } from 'react-icons/md'
import List from '../List';
import ListItem from '../ListItem';

const Footer2 = () => {
    return (
        <div className='bg-[#333533] p-5' data-aos="fade-up" data-aos-duration="1000">
            <div className='max-w-[80%] my-10 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    <div className='mx-auto'>
                    <div className='h-[60px] rounded mx-3 flex justify-start items-center  text-[#0ebd0e]'>
            <AiOutlineShoppingCart className='text-3xl mx-2'/>
            <h1 className='text-2xl font-semibold '>Grocer</h1>
            
          </div>
                        <p className='text-white my-5 font-semibold'>Grocer Shop started life as a business lines and calls provider in Birmingham City Centre, we moved our offices to Halesowen in 2012. We expanded over the following years to cover all forms of business communications and gained customers from all over the UK.</p>
                        <div className='flex my-5'>
                            <span className='text-[#0ebd0e] text-6xl mr-3'><CiFacebook /></span>
                            <span className='text-[#0ebd0e] text-6xl mr-3'><TiSocialTwitterCircular /></span>
                            <span className='text-[#0ebd0e] text-6xl mr-3'><AiFillYoutube /></span>
                        </div>
                    </div>
                    <div className='text-white md:mx-auto'>
                        <h1 className='text-3xl font-semibold text-[#0ebd0e]'> Menu
                        </h1>
                        <List>
                        <ListItem className="flex justify-between items-center cursor-pointer mb-2 mt-10">
                <Link to="/about">About</Link>
              </ListItem>
              <ListItem className="flex justify-between items-center cursor-pointer my-2">
                <Link to="/shop">Shop</Link>
              </ListItem>
              <ListItem className="flex justify-between items-center cursor-pointer my-2">
                <Link to="/blog">Blog</Link>
              </ListItem>
              <ListItem className="flex justify-between items-center cursor-pointer my-2">
                <Link to="/contact">Contact</Link>
              </ListItem>
              <ListItem className="flex justify-between items-center cursor-pointer my-2">
                <Link to="/cheakOut">CheakOut</Link>
              </ListItem>
                        </List>
                    </div>
                    <div className='text-white md:mx-auto'>
                        <h1 className='text-3xl font-semibold text-[#0ebd0e]'>Contact Us
                        </h1>
                        <div className='mt-10 flex'>
                            <span className=' '><MdOutlineLocationOn className='text-4xl bg-[#008000] p-2 rounded-full mr-3' /></span>
                            <h1 className='font-semibold'>Grocer Shop Group Ltd,<br /> Commercial House, 21a Stone Street,<br /> Dudley, West Midlands, DY1 1NJ</h1>
                        </div>

                        <div className='mt-5 flex'>
                            <span className=' '><MdOutlinePhoneInTalk className='text-4xl bg-[#008000] p-2 rounded-full mr-3' /></span>
                            <h1 className='font-semibold'>0800 849 8585</h1>
                        </div>
                        <div className='mt-5 flex'>
                            <span className=' '><MdOutlineMail className='text-4xl bg-[#008000] p-2 rounded-full mr-3' /></span>
                            <h1 className='font-semibold'>grocer@shop.com</h1>
                        </div>
                    </div>
                </div>
                <hr className='border-t-2 border-white my-10' />
                <h1 className='font-semibold text-center my-3 text-[#0ebd0e]'>© 2023 Grocer Shop Group Holdings Ltd. All Rights Reserved.</h1>
            </div>
        </div>
    );
};

export default Footer2;