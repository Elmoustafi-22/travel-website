import { Package } from "@/models/package";
import Link from "next/link";

const PackageDetails = ({pkgInfo}: {pkgInfo: Package}) => {
    return (
        <aside 
            className="group w-1/3 bg-cover bg-center"
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
                <Link 
                    href="#"
                    className="bg-green text-white font-semibold px-5 py-1.5 rounded-full"
                >
                    Book Now
                </Link>
            </div>
        </aside>
    )
}

export default PackageDetails;