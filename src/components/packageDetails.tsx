"use client";
import { Package } from "@/models/package";
import { useState } from "react";
import BookingForm from "./BookingForm";


const PackageDetails = ({pkgInfo}: {pkgInfo: Package}) => {
    const [popStatus, setPopStatus] = useState(false)
    return (
        <>
            <aside 
                className="group w-full sm:w-1/2 lg:w-1/3 bg-cover bg-center"
                style={{ backgroundImage: `url(/${pkgInfo.bgImg})` }}
            >
                <div 
                    className="opacity-0 group-hover:opacity-100 bg-black bg-opacity-75 w-full h-[550px] flex flex-col justify-center items-center transition duration-150"
                >
                    <h3 className="text-white text-center uppercase text-4xl font-semibold">
                        {pkgInfo.name}
                        <br />
                        <small className="text-xl font-normal tracking-widest">{pkgInfo.location}</small>
                    </h3>
                    <h4 className="text-3xl my-6 text-white font-semibold">{pkgInfo.price}</h4>
                    <a
                        onClick={() => setPopStatus(true)}
                        className="cursor-pointer bg-green text-white font-semibold px-5 py-1.5 rounded-full"
                    >
                        Book Now
                    </a>
                </div>
            </aside>
            <BookingForm 
                pkgName={pkgInfo.name} 
                popStatus={popStatus} 
                location={pkgInfo.location} 
                closePop={(status) => setPopStatus(status)}
            />
        </>
    )
}

export default PackageDetails;