import React from "react"
import Fade from "react-reveal/Fade"

// Assets
import HeroImage from "../../images/holographic-background-1.webp"
import Image1 from "../../images/3D-liquid-abstract-1.webp"
import Image2 from "../../images/3D-liquid-abstract.webp"
import Image3 from "../../images/3D-liquid-abstract-3.webp"
import SampleImage_1 from "../../images/la_voce_e_la_vita.jpg"
import SampleImage_2 from "../../images/bio_danza.jpg"
import SampleImage_3 from "../../images/scrittura_creativa.jpg"
import SampleImage_4 from "../../images/box_attivita_4.jpg"


const ExperienceCard = ({ numSample,title, openModal }) => {
  let sample = [SampleImage_1, SampleImage_2, SampleImage_3, SampleImage_4]
  let random = Math.floor(Math.random() * sample.length)
  let titolo = [
    "Bagno Sonoro",
    "Laboratori",
    "Massaggi",
    "Yoga e meditazione",
  ]
  let descrizione = [
  ]

  /* function onClick(){
    openModal()
  } */

  return (
    /* RANDOM USO UNA DELLE SAMPLE */
    <div className="experienceCard flex items-end justify-center  bg-gradient-to-r from-pink to-purple p-0 rounded-xl m-2 md:m-5  flex-1 "
      style={{ backgroundImage: `url(${sample[numSample]})` }}>
      <div className="content bottom-0 w-full pb-0">
        <h3 className="bg-colore bg-opacity-50 text-black text-lg font-semibold">{title}</h3>
        <button
          onClick={openModal}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Apri Modal
        </button>
      </div>
    </div>

  )
}

export default ExperienceCard
