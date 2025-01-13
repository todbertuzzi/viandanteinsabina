import React from "react"
import Fade from "react-reveal/Fade"
import { Link } from "gatsby"
import hero from "../../images/hero_rev.jpg"
import { TbBrandBooking } from "react-icons/tb";
import { TbBrandAirbnb } from "react-icons/tb";

const Header = () => {
  return (
    <Fade duration={2200}>
      {/*  <div className="max-w-7xl mx-auto lg:px-6 md:px-3">
        <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-0 xl:mt-28 flex gap-10 lg:flex-justify lg:flex flex-col lg:flex-row flex-col-reverse">
          <div className="text-center lg:text-left flex flex-col justify-center">
            <h1 className="text-black text-4xl font-semibold opacity-70">
              MY NAME IS HOLO
            </h1>
            <h2 className="text-black text-gradient-old bg-gradient-to-r from-pink to-purple text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl">
              Hi there!
            </h2>

            <p className="mt-3 text-base text-black-70 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              I'm a streamlined, lightweight theme starter kit crafted on
              Gatsby. My design marries minimalist elegance with contemporary
              flair, offering an unparalleled aesthetic experience for the
              modern web.
            </p>

            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md">
                <a
                  href="/contact"
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-black text-white hover:text-black border border-purple  hover:bg-transparent md:text-lg md:px-10 "
                >
                  Contact Us
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="/about"
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 border border-purple text-base font-medium rounded-md text-black hover:text-white bg-transparent hover:bg-black md:py-3 md:text-lg md:px-10"
                >
                  Get To Know Us
                </a>
              </div>
            </div>
          </div>

          <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4 flex lg:justify-end justify-center">
            <img
              className="rounded-xl w-auto h-full object-cover flex justify-center"
              src={hero}
              alt=""
            ></img>
          </div>
        </div>
      </div> */}
      <div
        className="relative flex items-center justify-center h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-1xl md:text-4xl lg:text-5xl font-bold mb-4 color-viandante">
            La Casa del Viandante
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-0 color-viandante">
            La via non è nel cielo. La via è nel cuore.
          </p>
          <span className="text-sm sm:text-md md:text-1xl lg:text-sm mb-8 italic block color-viandante">
            Buddha
          </span>
          {/* <Link
            to="/about"
            className="px-6 py-2 sm:px-8 sm:py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700"
          >
            Scopri di più
          </Link> */}
          <button type="button" class="text-gray-900 airbnb_book focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600  me-2 mb-2">
            <TbBrandAirbnb size="40"/>
             intero alloggio
          </button>
          <button type="button" class="text-gray-900  booking_book  focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 0   me-2 mb-2">
          <TbBrandBooking size="40"/>
            camere
          </button>
        </div>
      </div>
    </Fade>
  )
}

export default Header
