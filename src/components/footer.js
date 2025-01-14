import { Link } from "gatsby"
import React from "react"
import logoPilota from "../images/logoRev.png"
import logo from "../images/3D-liquid-abstract-5.webp"

const Footer = () => {
  return (
    <div  className="m-4">
      <div className="max-w-7xl mx-auto mt-10 h-auto lg:mb-8 sm:mb-4 xs:mb-4 xxs:mb-4">
        <div className="footer   bg-gray-800  p-10 mt-10 rounded-xl">
          <div className="grid grid-cols-3 xxs:grid-cols-1 lg:grid-cols-3">
            <div>
              <img className="max-h-28 max-w-xs" src={logoPilota} alt="Holo"></img>
              <p className="text-white opacity-70 text-sm mt-5 ">

                La Casa del Viandante<br></br> <span className="text-xs">CONTRADA GALANTINA, 1 FORANO 02044 (RIETI)</span>
                <br></br><span  ><a className="text-sm" href="mailto:ilviandanteinsabina@gmail.com">ilviandanteinsabina@gmail.com</a></span>
                
              </p>
              <p className="text-white text-lg font-bold mt-20">
                <span className="text-white font-montserrat font-semibold text-xs mt-20">
                  &copy; {new Date().getFullYear()}. All Rights Reserved.
                </span>
              </p>
              
            </div>
            <div className="place-self-end self-center xxs:hidden lg:block">
              <span className="text-xl text-white">Menu</span>
              <ul className=" font-montserrat font-medium">
                <li>
                  <a href="#prenota" className="text-sm opacity-70">Prenota</a>
                </li>
                <li>
                <a href="#attivita" className="text-sm opacity-70">Attività</a>
                </li>
                <li>
                <a href="#contattaci" className="text-sm opacity-70">Contattaci</a>
                </li>{" "}
                <li>
                <a href="#dove" className="text-sm opacity-70">Dove siamo</a>
                </li>
               
              </ul>
            </div>
            <div className="place-self-end self-center xxs:hidden lg:block">
              <span className="text-xl text-white">Amici</span>
              <ul className=" font-montserrat font-medium">
                <li>
                  <a className="text-sm opacity-70">Link Amico 1</a>
                </li>
                <li>
                <a className="text-sm opacity-70">Link Amico 2</a>
                </li>
                <li>
                <a className="text-sm opacity-70">Link Amico 3</a>
                </li>{" "}
                <li>
                <a className="text-sm opacity-70">Link Amico 4</a>
                </li>
                <li>
                <a className="text-sm opacity-70">Link Amico 5</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
