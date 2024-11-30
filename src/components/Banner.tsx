import React from 'react'
import Link from 'next/link'

function Banner() {
  return (
    <section id='home' className="bg-bannerImg bg-no-repeat bg-cover bg-bottom">
        <div className="w-full h-screen flex items-end bg-blackOverlay ">
          <div className="container mx-auto mb-40 px-4">
            <h2 className="text-white font-heading uppercase text-5xl lg:text-7xl md:text-6xl font-bold">
              Never Stop
              <br />
              Exploring World
            </h2>
            <p className="text-white w-full max-w-2xl my-8 font-body md:text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, ipsam, earum neque quod nobis consequuntur laborum fugit laboriosam, odio et corrupti officiis hic ipsum culpa doloribus sunt repellendus doloremque vero!
            </p>
            <Link 
              href="#"
              className="bg-green text-white uppercase font-semibold px-6 py-3 rounded-md transition-all inline-block font-body hover:scale-105"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
  )
}

export default Banner
