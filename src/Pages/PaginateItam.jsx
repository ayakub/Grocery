import React, { useState } from 'react';
import Blog from './Blog';
import ReactPaginate from 'react-paginate';
import './pagination.css'
import Inputbox from '../Component/Inputbox';
import { AiOutlineSearch } from 'react-icons/ai';
import { SiBlogger } from 'react-icons/si';
import PhotoViewer from '../Component/PhotoView/PhotoViewer';
import { Link } from 'react-router-dom';

const PaginateItam = ({ data }) => {
    const itemsPerPage = 3;
    const [itemOffset, setItemOffset] = useState(0);
    console.log(data)



    const endOffset = itemOffset + itemsPerPage;
    const currentItems = data.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(data.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };
    console.log(currentItems)
    return (
        <div className='max-w-7xl mx-auto p1'>
            <div className='flex flex-col-reverse md:flex-row my-10'>
                <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mr-2">
                    {
                        currentItems.map(data => (
                            <div key={data.btn} className="w-full border mx-auto p-4 group hover:shadow-lg hover:bg-primery duration-300">
                                <PhotoViewer imgSrc={data.img} className="lg:w-[400px] h-[230px]" />
                                <h1 className="text-xl text-[#26901b] font-semibold cursor-pointer my-3 group-hover:text-white">{data.heading}</h1>
                                <p className="font-semibold group-hover:text-white">{data.details}</p>
                                <Link to='/blog-details'><h1 className="text-indigo-600 group-hover:text-white text-right my-auto cursor-pointer">{data.btn}</h1></Link>

                            </div>

                        ))
                    }
                </div>
                <div className='md:w-1/3 rounded-md bg-white ml-2'>
                    <div className='flex justify-center items-center border shadow-md'>
                        <Inputbox
                            type="text"
                            className=" py-4 px-5 rounded-md w-full"
                            placeholder="Search your product"

                        />
                        <AiOutlineSearch className="text-sm text-gray-300  w-8 h-8" />
                    </div>
                    <div className="shadow-lg px-3 my-3 rounded-md">
                        <h1 className="font-semibold text-2xl py-5 border-b">Blog cetegory</h1>
                        <div className="flex justify-between border-b hover:border-none hover:shadow-md hover:translate-x-1 px-3 rounded py-2 cursor-pointer">
                            <div className="flex justify-center items-center ">
                                <p className="text-[#26901b]">
                                    <SiBlogger />
                                </p>
                                <p className="text-xl ml-4 hover:text-[#26901b]">
                                    Muffins & Donuts
                                </p>
                            </div>
                            <p>45</p>
                        </div>
                        <div className="flex justify-between border-b hover:border-none hover:shadow-md hover:translate-x-1 px-3 rounded py-2 cursor-pointer">
                            <div className="flex justify-center items-center ">
                                <p className="text-[#26901b]">
                                    <SiBlogger />
                                </p>
                                <p className="text-xl ml-4 hover:text-[#26901b]">Snack Cakes</p>
                            </div>
                            <p>98</p>
                        </div>
                        <div className="flex justify-between border-b hover:border-none hover:shadow-md hover:translate-x-1 px-3 rounded py-2 cursor-pointer">
                            <div className="flex justify-center items-center ">
                                <p className="text-[#26901b]">
                                    <SiBlogger />
                                </p>
                                <p className="text-xl ml-4 hover:text-[#26901b]">Custom Cake</p>
                            </div>
                            <p>67</p>
                        </div>
                        <div className="flex justify-between border-b hover:border-none hover:shadow-md hover:translate-x-1 px-3 rounded py-2 cursor-pointer">
                            <div className="flex justify-center items-center ">
                                <p className="text-[#26901b]">
                                    <SiBlogger />
                                </p>
                                <p className="text-xl ml-4 hover:text-[#26901b]">
                                    Instant Coffee
                                </p>
                            </div>
                            <p>32</p>
                        </div>
                        <div className="flex justify-between border-b hover:border-none hover:shadow-md hover:translate-x-1 px-3 rounded py-2 cursor-pointer">
                            <div className="flex justify-center items-center cursor-pointer">
                                <p className="text-[#26901b]">
                                    <SiBlogger />
                                </p>
                                <p className="text-xl ml-4 hover:text-[#26901b]">Cold Coffee</p>
                            </div>
                            <p>72</p>
                        </div>
                        <div className="flex justify-between border-b hover:border-none hover:shadow-md hover:translate-x-1 px-3 rounded py-2 cursor-pointer">
                            <div className="flex justify-center items-center cursor-pointer">
                                <p className="text-[#26901b]">
                                    <SiBlogger />
                                </p>
                                <p className="text-xl ml-4 hover:text-[#26901b]">Frozen Breakfast</p>
                            </div>
                            <p>27</p>
                        </div>
                        <div className="flex justify-between border-b hover:border-none hover:shadow-md hover:translate-x-1 px-3 rounded py-2 cursor-pointer">
                            <div className="flex justify-center items-center ">
                                <p className="text-[#26901b]">
                                    <SiBlogger />
                                </p>
                                <p className="text-xl ml-4 hover:text-[#26901b]">
                                    Meet & Fish
                                </p>
                            </div>
                            <p>22</p>
                        </div>
                    </div>
                </div>
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel="Next>"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="<Previous"
                renderOnZeroPageCount={null}
                containerClassName='pagination'
                pageLinkClassName='page-number'
                previousLinkClassName='page-number'
                nextLinkClassName='page-number'
                activeClassName='active'
            />
        </div>
    );
};

export default PaginateItam;