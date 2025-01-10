import React from "react"
import Fade from "react-reveal/Fade"

// Assets
import HeroImage from "../../images/holographic-background-1.webp"
import Image1 from "../../images/3D-liquid-abstract-1.webp"
import Image2 from "../../images/3D-liquid-abstract.webp"
import Image3 from "../../images/3D-liquid-abstract-3.webp"
import SampleImage_1 from "../../images/sample_1.avif"
import SampleImage_2 from "../../images/sample_2.avif"
import SampleImage_3 from "../../images/sample_3.avif"
import SampleImage_4 from "../../images/sample_4.avif"

const ExperienceCard = ({numSample}) => {
  let sample = [SampleImage_1, SampleImage_2, SampleImage_3, SampleImage_4]
  let random = Math.floor(Math.random() * sample.length)

  return (
    /* RANDOM USO UNA DELLE SAMPLE */
    <div className="experienceCard flex items-end justify-center w-1/3 bg-gradient-to-r from-pink to-purple p-0 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3"
      style={{ backgroundImage: `url(${sample[numSample]})` }}>
      <div class="content bottom-0 w-full pb-0">
        <h3 className="bg-colore bg-opacity-50 text-black text-2xl">Titolo experience</h3>
        <h4 className="bg-colore bg-opacity-50 mt-5 text-black  opacity-70 text-xl">breve testo</h4>
      </div>
    </div>

  )
}

export default ExperienceCard
