import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import traveler from "../../public/traveler.jpg";

export default function About() {
  return (
    <section id="about" className="py-20">
        <div className="group container mx-auto px-4">
          <div className="flex items-center gap-4 lg:gap-0 flex-col lg:flex-row justify-center">
            <article className="w-full lg:w-6/12 bg-white shadow-lg relative z-30 lg:-mr-20 lg:group-hover:-mr-56 rounded transition-all delay-200 ease-linear">
              <div className="p-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-darkGray mb-3 uppercase">
                  About Me
                  <span className="inline-block bg-green w-40 h-1 ml-2"></span>
                </h2>
                <p className="text-sm text-darkGray mb-3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                  Magnam quis placeat nobis hic autem libero inventore molestias. 
                  Praesentium quos minus, beatae laborum, 
                  libero blanditiis consectetur adipisci cum in, aspernatur est.
                </p>
                <p className="text-sm text-darkGray mb-3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                  Magnam quis placeat nobis hic autem libero inventore molestias. 
                  Praesentium quos minus, beatae laborum, 
                  libero blanditiis consectetur adipisci cum in, aspernatur est.
                </p>
                <p className="text-sm text-darkGray mb-3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                  Magnam quis placeat nobis hic autem libero inventore molestias. 
                  Praesentium quos minus, beatae laborum, 
                  libero blanditiis consectetur adipisci cum in, aspernatur est.
                </p>
                <p className="text-sm text-darkGray mb-3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                  Magnam quis placeat nobis hic autem libero inventore molestias. 
                  Praesentium quos minus, beatae laborum, 
                  libero blanditiis consectetur adipisci cum in, aspernatur est.
                </p>
                <h3 className="text-darkGray text-xl font-semibold uppercase mt-8 mb-3">
                  Social Connection
                  <span className="inline-block bg-green w-40 h-0.5 ml-2"></span>
                </h3>
                <div className="flex gap-4">
                  <Link 
                    href="#"
                    className="scale-100 hover:scale-125 transition-all ease-in-out"
                  >
                    <svg
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10"
                    >
                      <g clipPath="url(#clip0_31_216)">
                        <path
                          d="M35 17.5C35 7.83508 27.1649 0 17.5 0C7.83508 0 0 7.83494 0 17.5C0 26.2347 6.39953 33.4746 14.7656 34.7874V22.5586H10.3223V17.5H14.7656V13.6445C14.7656 9.25859 17.3783 6.83594 21.3756 6.83594C23.2903 6.83594 25.293 7.17774 25.293 7.17774V11.4844H23.0863C20.9122 11.4844 20.2344 12.8334 20.2344 14.2174V17.5H25.0879L24.312 22.5586H20.2344V34.7874C28.6005 33.4746 35 26.2348 35 17.5Z"
                          fill="#1877F2"
                        />
                        <path
                          d="M24.312 22.5586L25.0879 17.5H20.2344V14.2174C20.2344 12.8332 20.9124 11.4844 23.0863 11.4844H25.293V7.17773C25.293 7.17773 23.2903 6.83594 21.3756 6.83594C17.3783 6.83594 14.7656 9.25859 14.7656 13.6445V17.5H10.3223V22.5586H14.7656V34.7874C15.6702 34.9292 16.5844 35.0002 17.5 35C18.4156 35.0003 19.3298 34.9292 20.2344 34.7874V22.5586H24.312Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_31_216">
                          <rect width="35" height="35" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    className="scale-100 hover:scale-125 transition-all ease-in-ou"
                  >
                    <svg
                      width="512"
                      height="512"
                      viewBox="0 0 512 512"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10"
                    >
                      <g clipPath="url(#clip0_723_3)">
                        <path
                          d="M314.757 147.525H197.243C190.714 147.525 184.249 148.811 178.217 151.309C172.185 153.808 166.704 157.47 162.087 162.087C157.47 166.703 153.808 172.184 151.31 178.216C148.811 184.249 147.525 190.714 147.525 197.243V314.757C147.525 327.943 152.764 340.589 162.087 349.913C166.704 354.53 172.185 358.192 178.217 360.69C184.249 363.189 190.714 364.475 197.243 364.475H314.757C327.943 364.475 340.589 359.236 349.913 349.912C359.236 340.589 364.474 327.943 364.474 314.757V197.243C364.475 190.714 363.189 184.249 360.69 178.217C358.192 172.185 354.53 166.704 349.913 162.087C345.296 157.47 339.816 153.808 333.784 151.309C327.751 148.811 321.286 147.525 314.757 147.525ZM256 324.391C242.474 324.391 229.251 320.38 218.004 312.865C206.758 305.35 197.992 294.669 192.815 282.172C187.639 269.675 186.285 255.924 188.924 242.657C191.562 229.391 198.076 217.205 207.641 207.64C217.205 198.076 229.391 191.562 242.658 188.923C255.925 186.284 269.676 187.639 282.172 192.815C294.669 197.991 305.351 206.757 312.865 218.004C320.38 229.251 324.391 242.473 324.391 256C324.391 264.981 322.622 273.874 319.185 282.172C315.748 290.47 310.711 298.009 304.36 304.36C298.009 310.71 290.47 315.748 282.172 319.185C273.875 322.622 264.982 324.391 256 324.391ZM327.242 201.58C324.024 201.58 320.878 200.626 318.202 198.838C315.527 197.05 313.441 194.509 312.209 191.536C310.978 188.563 310.655 185.292 311.283 182.135C311.911 178.979 313.46 176.08 315.736 173.804C318.011 171.528 320.91 169.979 324.067 169.351C327.223 168.723 330.495 169.045 333.468 170.276C336.441 171.508 338.982 173.593 340.77 176.269C342.558 178.945 343.512 182.091 343.512 185.309C343.512 189.624 341.798 193.763 338.747 196.814C335.696 199.865 331.558 201.58 327.242 201.58Z"
                          fill="url(#paint0_linear_723_3)"
                        />
                        <path
                          d="M256 211.545C247.208 211.545 238.613 214.152 231.302 219.037C223.991 223.922 218.294 230.865 214.929 238.988C211.564 247.111 210.684 256.049 212.399 264.673C214.114 273.296 218.348 281.217 224.566 287.434C230.783 293.651 238.704 297.885 247.327 299.601C255.951 301.316 264.889 300.436 273.012 297.071C281.135 293.706 288.078 288.008 292.963 280.698C297.848 273.387 300.455 264.792 300.455 256C300.455 244.21 295.771 232.902 287.434 224.565C279.097 216.229 267.79 211.545 256 211.545Z"
                          fill="url(#paint1_linear_723_3)"
                        />
                        <path
                          d="M256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 0 256 0ZM389.333 312.5C389.332 332.877 381.237 352.419 366.828 366.828C352.419 381.237 332.877 389.332 312.5 389.333H199.5C179.123 389.332 159.58 381.237 145.171 366.828C130.762 352.42 122.667 332.877 122.666 312.5V199.5C122.667 179.123 130.762 159.58 145.171 145.171C159.58 130.763 179.123 122.668 199.5 122.667H312.5C332.877 122.668 352.419 130.763 366.828 145.172C381.237 159.581 389.332 179.123 389.333 199.5V312.5Z"
                          fill="url(#paint2_linear_723_3)"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_723_3"
                          x1="8.00038"
                          y1="504"
                          x2="506.325"
                          y2="5.6749"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FFCB52" />
                          <stop offset="0.318" stopColor="#FF6341" />
                          <stop offset="0.658" stopColor="#CD39A2" />
                          <stop offset="1" stopColor="#515BCA" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_723_3"
                          x1="7.99997"
                          y1="504"
                          x2="506.325"
                          y2="5.67497"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FFCB52" />
                          <stop offset="0.318" stopColor="#FF6341" />
                          <stop offset="0.658" stopColor="#CD39A2" />
                          <stop offset="1" stopColor="#515BCA" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_723_3"
                          x1="8"
                          y1="504"
                          x2="506.325"
                          y2="5.675"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FFCB52" />
                          <stop offset="0.318" stopColor="#FF6341" />
                          <stop offset="0.658" stopColor="#CD39A2" />
                          <stop offset="1" stopColor="#515BCA" />
                        </linearGradient>
                        <clipPath id="clip0_723_3">
                          <rect width="512" height="512" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    className="scale-100 hover:scale-125 transition-all ease-in-ou"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 246.15 246.15"
                      className="w-10 h-10"
                    >
                      <path
                        d="M246.15,123.06A123,123,0,0,1,123.24,246.15h-.16c-2.94,0-5.84-.11-8.72-.31A123.07,123.07,0,1,1,246.15,123.06Z"
                        fill="#e60000"
                      />
                      <path
                        d="M241.21,157.69a123.14,123.14,0,0,1-118.13,88.46c-2.94,0-5.84-.11-8.72-.31L58,154.42,187.73,90.54Z"
                        fill="#e60000"
                      />
                      <rect
                        x="56.42"
                        y="74.49"
                        width="133.31"
                        height="97.14"
                        rx="26.11"
                        fill="#fff"
                      />
                      <polygon
                        points="108.81 109.87 108.81 136.25 137.34 123.06 108.81 109.87"
                        fill="#e60000"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    className="scale-100 hover:scale-125 transition-all ease-in-ou"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 500 500"
                      className="w-10 h-10"
                    >
                      <path
                        d="M500,250c0,138.07-111.93,250-250,250S0,388.07,0,250,111.93,0,250,0,500,111.93,500,250Z"
                        fill="#cb2128"
                      />
                      <path
                        d="M270.17,334.78c-18.89-1.48-26.83-10.84-41.65-19.85-8.16,42.74-18.1,83.71-47.61,105.12-9.09-64.6,13.36-113.13,23.81-164.61-17.78-30,2.13-90.24,39.67-75.38,46.17,18.26-40,111.35,17.86,123,60.39,12.14,85-104.77,47.59-142.81-54.12-54.9-157.52-1.24-144.79,77.36,3.09,19.21,23,25,7.92,51.57-34.62-7.68-45-35-43.63-71.4,2.16-59.6,53.55-101.33,105.12-107.12,65.24-7.29,126.45,24,134.89,85.3,9.51,69.24-29.44,144.22-99.18,138.85Z"
                        fill="#f2f2f2"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    className="scale-100 hover:scale-125 transition-all ease-in-ou"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 963.66 963.66"
                      className="w-10 h-10"
                    >
                      <circle
                        cx="481.83"
                        cy="481.83"
                        r="481.33"
                        stroke="#fff"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M185.33,203,415.4,510.58,183.88,760.69H236l202.7-219,163.77,219H779.78l-243-324.92L752.26,203H700.15L513.48,404.63,362.65,203ZM262,241.34h81.46l359.72,481H621.68Z"
                        fill="#fff"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    className="scale-100 hover:scale-125 transition-all ease-in-ou"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      className="w-10 h-10"
                    >
                      <path
                        d="M24,48A24,24,0,1,0,0,24,24,24,0,0,0,24,48Z"
                        fill="#25d366"
                      />
                      <path
                        d="M24.79,37.35h0A14.31,14.31,0,0,1,18,35.62l-7.57,2,2-7.4a14.27,14.27,0,1,1,12.37,7.15ZM18.32,33l.43.26a11.84,11.84,0,0,0,6,1.65h0a11.86,11.86,0,1,0-10-5.56l.28.45-1.19,4.38Zm13.17-6.88a1.14,1.14,0,0,1,.49.33,2.94,2.94,0,0,1-.21,1.69,3.7,3.7,0,0,1-2.4,1.7,4.94,4.94,0,0,1-2.25-.14,21.51,21.51,0,0,1-2-.76,15.67,15.67,0,0,1-6-5.29L19,23.59h0a7,7,0,0,1-1.45-3.69A4,4,0,0,1,18.72,17a.46.46,0,0,1,.07-.07,1.29,1.29,0,0,1,.95-.45h.76c.21,0,.47,0,.72.61l.4,1c.3.75.64,1.57.7,1.69a.66.66,0,0,1,0,.63l-.05.1A2.16,2.16,0,0,1,22,21c-.06.07-.12.15-.19.22a5.26,5.26,0,0,1-.35.41.51.51,0,0,0-.15.72,10.3,10.3,0,0,0,2,2.47,9.28,9.28,0,0,0,2.63,1.67l.24.1c.35.18.56.15.77-.08s.89-1.05,1.13-1.4.47-.3.8-.18,2.08,1,2.44,1.16Z"
                        fill="#fdfdfd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
            <aside className="w-full lg:w-4/12 relative z-0 transition-all delay-200 ease-linear">
              <Image 
                src={traveler}
                alt="Travel"
                width={550}
                height={850}
                priority={true}
                className="w-full h-auto object-cover rounded"
              />
            </aside>
          </div>
        </div>
      </section>
  )
}
