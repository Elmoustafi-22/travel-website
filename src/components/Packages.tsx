import React from 'react'
import PackageDetails from "@/components/packageDetails";
import { Package } from "@/models/package";

const packages = [
  {
    bgImg: "venice.jpg",
    name: "City of Canal",
    location: "Venice",
    price: "$1230.00",
  },
  {
    bgImg: "moscow.jpg",
    name: "The Heritage City",
    location: "Moscow",
    price: "$1430.00",
  },
  {
    bgImg: "paris.jpg",
    name: "City of Love",
    location: "Paris",
    price: "$1030.00",
  },
  {
    bgImg: "mumbai.jpg",
    name: "City of Dreams",
    location: "Mumbai",
    price: "$830.00",
  },
  {
    bgImg: "tokyo.jpg",
    name: "City of Anime",
    location: "Tokyo",
    price: "$2830.00",
  },
  {
    bgImg: "beijing.jpg",
    name: "The Forbidden City",
    location: "Beijing",
    price: "$2230.00",
  },
]

export default function Packages() {
  return (
    <section id='packages' className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-6xl font-heading font-bold text-darkGray mb-3 uppercase">
            Packages
            <span className="inline-block bg-green w-40 h-1 ml-2"></span>
          </h2>
          <p className="text-sm text-darkGray w-full max-w-[750px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis officiis provident error facilis veniam quam dolor molestias ullam nulla, quo ut? Harum minima dolorum nam, itaque aperiam tenetur dicta soluta.
          </p>
          <div className="flex flex-wrap mt-8">
            {packages.map((pkg: Package, i: number) => {
                return <PackageDetails key={i} pkgInfo={pkg}/>
            })}
          </div>
        </div>
      </section>
  )
}
