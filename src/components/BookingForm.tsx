"use client"
import React, { useEffect, useState } from 'react'
import { useForm, FieldValues } from "react-hook-form";

interface BookingFormData {
  name: string;
  email: string;
  contactNo: string;
  pkgName: string;
  location: string;
}

function BookingForm({
    pkgName, 
    location,
    popStatus,
    closePop
}: {
    pkgName:string;
    location: string;
    popStatus: boolean;
    closePop: (status: boolean) => void;
}) {
  const {
    register, 
    reset, 
    handleSubmit, 
    formState: {errors},
    setValue,
} = useForm();
  const [msg, setMsg] = useState<string>();

  useEffect(() => {
    setValue("pkgName", pkgName);
    setValue("location", location);
  }, [pkgName, location, setValue])
  const onBooking = (data: FieldValues) => {
    const bookingData = data as BookingFormData;  // Type assertion
    if (bookingData) {
        console.log(bookingData);
        setMsg("Thanks for your interest... Back to you shortly!");
        reset();

        const timer = setTimeout(() => {
        setMsg("");
        clearInterval(timer);
        }, 2000);
    }
};
  return (
    popStatus && (   
        <section className='fixed z-50 top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-80'>
        <aside className='bg-green p-7 rounded 2xl w-full max-w-[450px] shadow-md relative'>
            <a 
                onClick={() => closePop(false)} 
                className='absolute -right-5 -top-3 cursor-pointer'
            >
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                        className="w-10 h-10"
                        >
                        <circle cx="64" cy="64" r="64" fill="#c93636" />
                        <path
                            d="m100.3,90.4l-26.4-26.4,26.3-26.4c.4-.4.4-1,0-1.4l-8.5-8.5c-.4-.4-1-.4-1.4,0l-26.3,26.4-26.3-26.3c-.4-.4-1-.4-1.4,0l-8.5,8.5c-.4.4-.4,1,0,1.4l26.2,26.3-26.3,26.3c-.4.4-.4,1,0,1.4l8.5,8.5c.4.4,1.1.4,1.4,0l26.4-26.3,26.3,26.3c.4.4,1.1.4,1.5.1l8.5-8.5c.4-.4.4-1,0-1.4Z"
                            fill="#fff"
                />
                </svg>
            </a>
            <h2 className='text-center text-2xl font-semibold font-body text-white'>
                <small>Booking For</small>
                <br />
                {pkgName} - {location}
            </h2>
            {msg && <p className='text-black text-sm font-body text-center font-semibold'>
                {msg}    
            </p>
            }
            <form onSubmit={handleSubmit(onBooking)}>
                <div className="my-3">
                    <h4 className='text-white font-semibold text-sm mb-1 font-body'>Your Name</h4>
                    <input 
                        type="text" 
                        placeholder='Your name'  
                        className='w-full text-base px-3 py-1.5 shadow-md outline-none font-body rounded'
                        {...register("name", {required: true})}
                    />
                    {errors.name && (
                        <p className='font-body text-sm text-white font-medium'>
                            Please Mention Your Name
                        </p>
                    )}
                </div>
                <div className="my-3">
                    <h4 className='text-white font-semibold text-sm mb-1 font-body'>Email</h4>
                    <input 
                        type="email" 
                        placeholder='E-mail Address'  
                        className='w-full text-base px-3 py-1.5 shadow-md outline-none font-body rounded'
                        {...register("email", {required: true})}
                    />
                    {errors.email && (
                        <p className='font-body text-sm text-white font-medium'>
                            Please Mention Your Contact E-mail
                        </p>
                    )}
                </div>
                <div className="my-3">
                    <h4 className='text-white font-semibold text-sm mb-1 font-body'>Contact No.</h4>
                    <input 
                        type="tel" 
                        placeholder='Contact Number'  
                        className='w-full text-base px-3 py-1.5 shadow-md outline-none font-body rounded'
                        {...register("contactNo", {required: true})}
                    />
                    {errors.contactNo && (
                        <p className='font-body text-sm text-white font-medium'>
                            Please Mention Your Contact Number
                        </p>
                    )}
                </div>
                <div className="my-3">
                    <h4 className='text-white font-semibold text-sm mb-1 font-body'>Details</h4>
                    <textarea 
                        placeholder='Details' 
                        className='w-full text-base px-3 py-1.5 shadow-md outline-none min-h-24 font-body rounded'
                        {...register("details")}
                    >
                    </textarea>
                </div>
                <div className='flex justify-end mt-5'>
                    <button type="submit" className='bg-white text-black hover:bg-darkGray hover:text-white transition-all ease-linear py-2 px-5 rounded font-body font-medium uppercase shadow-md'>Send</button>
                </div>
            </form>
        </aside>
    </section>
     )
  )
}

export default BookingForm