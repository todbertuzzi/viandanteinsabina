import React, { useEffect, useState } from "react"
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Fade from "react-reveal/Fade"
import ExperienceCard from "./experienceCard"

// Assets
import HeroImage from "../../images/holographic-background-1.webp"
import Image1 from "../../images/3D-liquid-abstract-1.webp"
import Image2 from "../../images/3D-liquid-abstract.webp"
import Image3 from "../../images/3D-liquid-abstract-3.webp"

import Box_1 from "./box_1"
import Box_2 from "./box_2"
import Box_3 from "./box_3"
import Box_4 from "./box_4"

const ExperienceSection = () => {
  const [modalState, setModalState] = useState({ id: null, isOpen: false });

  function openModal(id) {
    setModalState({ id, isOpen: true });
  }

  const closeModal = () => {
    setModalState({ id: null, isOpen: false });
  };

  const renderBox = () => {
    switch (modalState.id) {
      case 0:
        return <Box_1 />;
      case 1:
        return <Box_2 />;
      case 2:
        return <Box_3 />;
      case 3:
        return <Box_4 />;
      default:
        return null;
    }
  };
  const titoloModale = ["La voce e la vita", "BioDanza in 10 incontri", "Scrittura Creativa", "Le stagioni del corpo"]
  return (

    <Fade bottom cascade>
      
      <div id="attivita" className=" max-w-7xl mx-auto lg:px-8 md:px-3">
        <div className="mx-auto max-w-7xl px-4 sm:mt-5 sm:px-6 md:mt-5 lg:mt-10 lg:px-0 xl:mt-10 flex flex-col lg:flex-row gap-3 lg:flex-justify">
          

          <div className=" sm:text-center lg:text-right flex flex-col justify-center">

            <h3 className="text-black text-2xl font-bold xxs:text-2xl mt-10 xs:text-2xl sm:text-3xl lg:text-4xl text-gradient-old bg-gradient-to-r from-pink to-purple">
            ATTIVITÀ
            </h3>

           
          </div>
        </div>
      </div>

      <div  className="  md:mx-0 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row content-center justify-center align-middle text-center">
        <ExperienceCard title={titoloModale[0]} numSample="0" openModal={() => openModal(0)} />
        <ExperienceCard title={titoloModale[1]}  numSample="1" openModal={() => openModal(1)} />
        <ExperienceCard title={titoloModale[2]}  numSample="2" openModal={() => openModal(2)} />
        <ExperienceCard title="La voce e la vita" numSample="3" openModal={() => openModal(3)} />

        <Transition show={modalState.isOpen} as={Fragment} className="test" >
          <Dialog as="div" className="relative z-50 modal fixed inset-0" onClose={closeModal}>
            {/* Sfondo trasparente */}
            <Transition.Child
              as={Fragment}
              
            >
              <div className="sfondo bg-black bg-opacity-50" />
            </Transition.Child>

            {/* Contenitore della modale */}
            <div className="sm:w-[90%] md:w-[70%]  p-4 m-auto">
              <Transition.Child
                as={Fragment}
               
              >
                {/* max-w-md  */}

                <Dialog.Panel className="w-full modale transform overflow-hidden rounded-lg bg-white py-4 px-8 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title className="text-black text-3xl font-bold xxs:text-1xl xs:text-2xl sm:text-5xl lg:text-3xl text-gradient-old bg-gradient-to-r from-pink to-purple ">
                    {titoloModale[modalState.id]}

                  </Dialog.Title>
                  
                  <div className="mt-3">

                    {renderBox()}
                  </div>

                  <div className="mt-2 text-center">
                  
                    <button
                      type="button"
                      className="inline-flex items-center justify-center border align-middle select-none font-sans font-bold text-center transition-all ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-md py-2 px-4 shadow-sm bg-transparent relative text-stone-700 hover:text-stone-700 border-stone-500 hover:bg-transparent duration-150 hover:border-stone-600 rounded-lg hover:opacity-60 hover:shadow-none"
                      onClick={closeModal}
                    >
                      CHIUDI
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </div>
    </Fade>


  )
}

export default ExperienceSection
