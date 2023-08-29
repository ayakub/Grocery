import React from "react";
import { useForm } from "react-hook-form";
import BreadCump from "../Component/BreadCump";

const cheakOut = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <>
    <BreadCump/>
    <div className='w-full md:w-1/3  mx-auto my-10 p-5 border rounded border-[#58e458]' data-aos="fade-up" data-aos-duration="1000">
      <h1 className='text-center text-3xl font-semibold text-[#008000] mb-10'>Payment form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='my-2'>
          <label className='font-semibold'>Email Address</label>
          <input type='email' className='w-full border focus:border-green-600 focus:outline-none p-2 my-2 rounded' {...register("email")} placeholder='Email' required />
        </div>
        <div className='my-2'>
          <label className='font-semibold'>Credid Card Number</label>
          <input type='text' className='w-full border focus:border-green-600 focus:outline-none p-2 my-2 rounded' {...register("card")} placeholder='xxxx xxxx xxxx xxxx' required />
        </div>
        <div className="flex my-2">
          <div className='mr-2'>
            <label className='font-semibold'>Expiry Date</label>
            <input type='text' className='w-full border focus:border-green-600 focus:outline-none p-2 my-2 rounded' {...register("expiry")} placeholder='mm / yy' required />
          </div>
          <div className='ml-2'>
            <label className='font-semibold'>CVV</label>
            <input type='text' className='w-full border focus:border-green-600 focus:outline-none p-2 my-2 rounded' {...register("cvv")} placeholder='xxx' required />
          </div>
        </div>
        <div className="flex justify-between my-2">
          <p className="font-semibold">Subtotal</p>
          <p className="font-semibold">$ 780</p>
        </div>
        <div className="flex justify-between my-2">
          <p className="font-semibold">Tax Fee</p>
          <p className="font-semibold">$ 78</p>
        </div>
        <hr className="border-b my-2" />
        <div className="flex justify-between my-2">
          <p className="font-semibold">Total Amount</p>
          <p className="font-semibold">$ 858</p>
        </div>
        <div>
          <button className='w-full text-center transition duration-500 hover:bg-[#333533] bg-[#008000] text-white rounded font-semibold text-lg my-3 py-3' type='submit'>Make Payment</button>
        </div>


      </form>
    </div>
    </>
  );
};

export default cheakOut;
