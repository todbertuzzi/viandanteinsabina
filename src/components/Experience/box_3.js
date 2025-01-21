import React, { useEffect } from "react"
import { initAccordion } from 'david-ai';
import { IoIosInformationCircleOutline } from "react-icons/io";

const Box_3 = () => {
    useEffect(() => {
        initAccordion();
    }, []);


    return (
        <>
            <h3 className="font-bold border-b-2">Giornata immersiva Di Scrittura Creativa</h3>
            <p className="font-semibold mb-1">
                Sabato 15 Febbraio 2025
            </p>
            <ul>
                <li> Ore 10- 13 Presentazione, Primi esercizi</li>
                <li> Ore 13 Pranzo Condiviso ( Ognuno porta qualcosa)</li>
                <li> Ore 14-17 Esercitazioni di Scrittura, Saluti</li>
            </ul>

            <br />
            <p className="mb-2">
                Attraverso visualizzazioni guidate, esercizi e giochi per sviluppare la creatività, scriveremo nuove storie che raccontino di noi, in un clima di fiducia e non giudizio dove sperimentare nuove capacità espressive per il proprio benessere psicofisico.
            </p>
            <p className="mb-2 font-bold">Contributo Richiesto 30 euro
            </p>
            <div className="group block w-full pb-5" aria-disabled="false" data-dui-accordion-container data-dui-accordion-mode="exclusive">
                <div
                    className="flex items-center justify-between w-full py-2 text-left font-medium text-stone-800 cursor-pointer"
                    data-dui-accordion-toggle
                    data-dui-accordion-target="#basicAccordionInfo"
                    aria-expanded="false">
                    <div className="flex items-center">
                        <IoIosInformationCircleOutline className="mr-2"/> INFORMAZIONI
                    </div>
                    <svg data-dui-accordion-icon width="1.5em" height="1.5em" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" className="h-4 w-4 rotate-180">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </div>
                <div id="basicAccordionInfo" className="overflow-hidden transition-all duration-300 border-b border-stone-200 ">

                    <ul>
                        <li>Conduce: Valentina Baldazzi</li>
                        <li>Poetessa
                            Marionettista e Burattinaia
                            Counselor a Mediazione Artistica
                            Ricercatrice della Visione
                            Portatrice di Chanupa
                            secondo il disegno del Fuoco Sacro
                            di Itzachilatlan, Messico</li>
                        <li className="font-semibold">Per info e prenotazioni 3278722504</li>
                    </ul>
                </div>


            </div>
            <p className="mb-2"> Presso La Casa del Viandante</p>
            <p className="mb-2">Contrada Galantina, 1 02044 Forano (di fronte al Snack Bar Alessio)</p>
            <p className="mb-2 font-bold">prenotazione obbligatoria - posti limitati</p>
        </>
    )
}



export default Box_3
