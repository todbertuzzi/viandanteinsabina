import React from "react"


const ExperienceCard = ({ title,image, openModal }) => {
 

 

  return (
    /* RANDOM USO UNA DELLE SAMPLE */
    <div className="experienceCard flex items-end justify-center  bg-gradient-to-r from-pink to-purple p-0 rounded-xl m-2 md:m-5  flex-1 "
      style={{ backgroundImage: `url(${image.url })` }}>
      <div className="content bottom-0 w-full pb-0">
        <h3 className="bg-colore bg-opacity-50 text-black text-lg font-semibold">{title}</h3>
        <button onClick={openModal} className="bg-colore bg-opacity-10 inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm rounded-md py-0 my-1 px-2 bg-transparent border-transparent text-stone-800 hover:bg-stone-800/5 hover:border-stone-800/5 shadow-none hover:shadow-none">LEGGI TUTTO</button>
  
        
      </div>
    </div>

  )
}

export default ExperienceCard
