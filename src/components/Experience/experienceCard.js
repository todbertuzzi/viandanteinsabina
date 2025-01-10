import React from "react"
import Fade from "react-reveal/Fade"

// Assets
import HeroImage from "../../images/holographic-background-1.webp"
import Image1 from "../../images/3D-liquid-abstract-1.webp"
import Image2 from "../../images/3D-liquid-abstract.webp"
import Image3 from "../../images/3D-liquid-abstract-3.webp"
import SampleImage_1 from "../../images/box_attivita_1.jpg"
import SampleImage_2 from "../../images/box_attivita_2.jpg"
import SampleImage_3 from "../../images/box_attivita_3.jpg"
import SampleImage_4 from "../../images/box_attivita_4.jpg"

const ExperienceCard = ({numSample,iexRef}) => {
  let sample = [SampleImage_1, SampleImage_2, SampleImage_3, SampleImage_4]
  let random = Math.floor(Math.random() * sample.length)
  let titolo = [
    "Bagno Sonoro",
    "Laboratori",
    "Massaggi",
    "Yoga e meditazione",
  ]
  return (
    /* RANDOM USO UNA DELLE SAMPLE */
    <div className="experienceCard flex items-end justify-center w-1/3 bg-gradient-to-r from-pink to-purple p-0 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3"
      style={{ backgroundImage: `url(${sample[numSample]})` }}>
      <div class="content bottom-0 w-full pb-0">
        <h3 className="bg-colore bg-opacity-50 text-black text-2xl">{titolo[numSample]}</h3>
        <h4 className="bg-colore bg-opacity-50 mt-5 text-black  opacity-70 text-md">scopri di più</h4>
      </div>
    </div>

  )
}

export default ExperienceCard
