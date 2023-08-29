import React from 'react';
import { BsStarHalf } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai'

const Reveiw = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-5 my-10 p-5'>
                <div className='relative p-5 border bg-[#8cf183] rounded-md'>
                    <img className='w-36 h-36 mb-[-60px] rounded-[50%] mx-auto' src="https://www.therepublic.com/wp-content/uploads/2022/02/128130635_web1_20211114cr-Pence-Greg.jpg" alt="" />
                    <div className='bg-[#3db82f] pt-20 text-white rounded-br-3xl rounded-tl-3xl rounded-tr rounded-bl px-3'>
                        <h1 className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsam accusamus illum ullam doloribus nesciunt provident sequi repudiandae ut inventore!</h1>
                        <h1 className='text-xl font-semibold text-center text-yellow-400'>Devid Warner</h1>
                        <div className='text-yellow-500 text-2xl flex my-3 pb-3 justify-center items-center'>
                            <span>< AiFillStar /></span>
                            <span>< AiFillStar /></span>
                            <span>< AiFillStar /></span>
                            <span>< AiFillStar /></span>
                            <span className='text-xl'><BsStarHalf /></span>
                        </div>
                    </div>

                </div>
                <div className='relative p-5 border bg-[#8cf183] rounded-md'>
                    <img className='w-36 h-36 mb-[-60px] rounded-[50%] mx-auto' src="https://www.therepublic.com/wp-content/uploads/2022/02/128130635_web1_20211114cr-Pence-Greg.jpg" alt="" />
                    <div className='bg-[#3db82f] pt-20 text-white rounded-br-3xl rounded-tl-3xl rounded-tr rounded-bl px-3'>
                        <h1 className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsam accusamus illum ullam doloribus nesciunt provident sequi repudiandae ut inventore!</h1>
                        <h1 className='text-xl font-semibold text-center text-yellow-400'>Devid Miller</h1>
                        <div className='text-yellow-500 text-2xl flex my-3 pb-3 justify-center items-center'>
                            <span>< AiFillStar /></span>
                            <span>< AiFillStar /></span>
                            <span>< AiFillStar /></span>
                            <span>< AiFillStar /></span>
                            <span className='text-xl'><BsStarHalf /></span>
                        </div>
                    </div>

                </div>
                <div className='relative p-5 border bg-[#8cf183] rounded-md'>
                    <img className='w-36 h-36 mb-[-60px] rounded-[50%] mx-auto' src="https://www.therepublic.com/wp-content/uploads/2022/02/128130635_web1_20211114cr-Pence-Greg.jpg" alt="" />
                    <div className='bg-[#3db82f] pt-20 text-white rounded-br-3xl rounded-tl-3xl rounded-tr rounded-bl px-3'>
                        <h1 className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsam accusamus illum ullam doloribus nesciunt provident sequi repudiandae ut inventore!</h1>
                        <h1 className='text-xl font-semibold text-center text-yellow-400'>Devid Warner</h1>
                        <div className='text-yellow-500 text-2xl flex my-3 pb-3 justify-center items-center'>
                            <span>< AiFillStar /></span>
                            <span>< AiFillStar /></span>
                            <span>< AiFillStar /></span>
                            <span>< AiFillStar /></span>
                            <span className='text-xl'><BsStarHalf /></span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Reveiw;