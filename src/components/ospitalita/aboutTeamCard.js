import React from "react"
import Fade from "react-reveal/Fade"

const AboutTeamCard = ({ imgSrc, position }) => {
  return (
    <Fade bottom cascade>
      <div className="w-full h-96 relative overflow-hidden rounded-xl flex flex-col justify-end items-center">
        <img className="object-cover h-full w-full absolute" src={imgSrc}></img>
        <h3 className="bg-white absolute p-2 rounded-xl w-3/4 mb-4 text-center">
          {position}
        </h3>
      </div>
    </Fade>
  )
}

export default AboutTeamCard
