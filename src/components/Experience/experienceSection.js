import React from "react"
import Fade from "react-reveal/Fade"
import ExperienceCard from "./experienceCard"
// Assets
import HeroImage from "../../images/holographic-background-1.webp"
import Image1 from "../../images/3D-liquid-abstract-1.webp"
import Image2 from "../../images/3D-liquid-abstract.webp"
import Image3 from "../../images/3D-liquid-abstract-3.webp"

const ExperienceSection = () => {
  return (
   
      <Fade bottom cascade>
        <div id="attivita" className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row content-center justify-center align-middle text-center">
          <ExperienceCard numSample = "0"/>

          <ExperienceCard numSample = "1"/>
          <ExperienceCard numSample = "2"/>
          <ExperienceCard numSample = "3"/>
        </div>
      </Fade>
    
      
  )
}

export default ExperienceSection
