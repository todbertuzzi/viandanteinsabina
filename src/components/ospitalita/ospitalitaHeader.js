import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade"

import Image3 from "../../images/ospitalita_background_desk.jpg"
import ImageMobile from "../../images/ospitalita_background.jpg"

const OspitalitaHeader = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Puoi cambiare 768 con la larghezza che preferisci
    };

    // Aggiungi un listener per l'evento resize
    window.addEventListener("resize", handleResize);

    // Esegui il controllo iniziale
    handleResize();

    // Rimuovi il listener quando il componente viene smontato
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Fade>
      <div className="max-w-7xl mx-auto mt-10">
        <div className="overflow-hidden rounded-xl max-h-96 m-4">
          <img alt="Image" src={isMobile ? ImageMobile : Image3}></img>
        </div>
        <div className="mt-10 px-8">
          <h1 className="font-bold text-xl text-black text-gradient-old bg-gradient-to-r from-pink to-purple">
            IL NOSTRO CONCETTO DI 
          </h1>
          <h2 className="text-black text-6xl font-semibold leading-snug xxs:text-lg xs:text-lg sm:text-3xl lg:text-6xl">
          OSPITALITÀ
          </h2>
        </div>
      </div>
    </Fade>
  )
}

export default OspitalitaHeader
