import React, { useState } from "react"
import { Link } from "gatsby"
import logoPilota from "../images/logoRev.png"
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <nav className="bg-transparent">
      <div className="max-w-7xl mx-auto px-3 py-4 rounded-md">
        <div className="flex items-center justify-between h-16">
          <div className="w-full justify-between flex items-center">
            <a
              className="text-black flex-shrink-0 font-montserrat font-semibold"
              href="/"
            >
              {/*  <span className="text-gradient-old bg-gradient-to-r from-pink to-purple font-semibold">
                <logoPilota />
              </span> */}
              <div
                className="logo bg-cover"
                style={{ backgroundImage: `url(${logoPilota})`, width: 50, height: 50 }}
              ></div>
            </a>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <a
                  className="text-black opacity-50 hover:opacity-100 px-3 py-3 rounded-md text-m font-medium font-montserrat"
                  href="/#prenota"
                >
                  Prenota
                </a>
                <a
                  className="text-black opacity-50 hover:opacity-100 px-3 py-3 rounded-md text-m font-medium font-montserrat"
                  href="/#attivita"
                >
                  Attività
                </a>

                <a
                  className="text-black opacity-50 hover:opacity-100 px-3 py-3 rounded-md text-m font-medium font-montserrat"
                  href="/#contattaci"
                >
                  Contattaci
                </a>
                <a
                  className="text-black opacity-50 hover:opacity-100 px-3 py-3 rounded-md text-m font-medium font-montserrat"
                  href="/#dove"
                >
                  Dove Siamo
                </a>
                {/*  <Link
                  className="relative after:rounded after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 text-black opacity-70 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-montserrat"
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className="relative after:rounded after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 text-black opacity-70 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-montserrat"
                  to="/about"
                >
                  About
                </Link>

                <Link
                  className="relative after:rounded after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 text-black opacity-70 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-montserrat"
                  to="/gallery"
                >
                  Gallery
                </Link>
                <Link
                  className="relative after:rounded after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 text-black opacity-70 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-montserrat"
                  to="/blog"
                >
                  Blog
                </Link>
                <Link
                  className="relative after:rounded after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 text-black opacity-70 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-montserrat"
                  to="/contact"
                >
                  Contact
                </Link> */}
                <div className="items-center">
                  <a
                    href="tel:#"
                    className="transition-all duration-500ms ease-in-out hover:ease-in-out bg-transparent mt-5 py-2.5 px-4 text-base font-medium text-center text-black rounded-lg border border-purple hover:text-white border-black  hover:bg-black"
                  >
                    Chiamaci
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              id="al"
              aria-label="Menu"
              onClick={() => setOpenMenu(!openMenu)}
              className="text-gray-800 dark:text-white hover:text-black-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              <svg
                width="20"
                height="20"
                fill="black"
                className="h-8 w-8"
                viewBox="0 0 1792 1792"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {openMenu && (
        <div className="transition duration-1000 ease-in-out md:hidden">
          <div className="md-px-2 pt-2 pb-3 space-y-1 sm:px-3 transition duration-1000 ease-in-out">
            <a
              className="text-black opacity-50 hover:opacity-100 px-3 py-3 rounded-md text-m font-medium font-montserrat"
              href="/#prenota"
            >
              Prenota
            </a>
            <a
              className="text-black opacity-50 hover:opacity-100 px-3 py-3 rounded-md text-m font-medium font-montserrat"
              href="/#attivita"
            >
              Attività
            </a>

            <a
              className="text-black opacity-50 hover:opacity-100 px-3 py-3 rounded-md text-m font-medium font-montserrat"
              href="/#contattaci"
            >
              Contattaci
            </a>
            <a
              className="text-black opacity-50 hover:opacity-100 px-3 py-3 rounded-md text-m font-medium font-montserrat"
              href="/#dove"
            >
              Dove Siamo
            </a>

            {/* <div className="items-center mt-20 py-3">
              <a
                href="tel:#"
                className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-black text-white hover:text-black border border-purple  hover:bg-transparent md:text-lg md:px-10 "
              >
                Chiamaci
              </a>
            </div> */}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
