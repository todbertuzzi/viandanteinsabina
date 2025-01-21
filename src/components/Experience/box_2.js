
import React, { useEffect } from "react"
import { initAccordion } from 'david-ai';
import { FaRegCalendarAlt } from "react-icons/fa";
const Box_2 = () => {
    useEffect(() => {
        initAccordion();
    }, []);


    return (
        <>
            <h3 className="font-bold border-b-2">L’associazione Centro Hodo-APS organizza:</h3>
            <p className="font-semibold mb-3">
                7 incontri di Biodanza a Forano presso La Casa del Viandante
                dalle ore  18.00 alle 20.00
            </p>
            <p className="mb-2">
                La Biodanza è un sistema di integrazione umana basata sulla musica e il movimento naturale agito in  un gruppo accogliente.
            </p>
            <p className="mb-2">Cerchio, ritmo, fluidità, respiro, rallentare, apertura, coraggio, cura, incontro, tenerezza, saranno le parole e i contenuti che ci accompagneranno in questo viaggio.
            </p>
            <p className="mb-2">
                Conduce Angelo Palfrader, Oso blanco
            </p>
            <p className="mb-2"> Facilitatore, didatta di Biodanza dal 1997, ricercatore di Visione, portatore di Chanupa del cammino rosso di Itzachilatlan.
            </p>
            <div className="group block w-full pb-5" aria-disabled="false" data-dui-accordion-container data-dui-accordion-mode="exclusive">
                <div
                    className="flex items-center justify-between w-full py-2 text-left font-medium text-stone-800 cursor-pointer"
                    data-dui-accordion-toggle
                    data-dui-accordion-target="#basicAccordionInfo"
                    aria-expanded="false">
                    
                    <div className="flex items-center">
                        <FaRegCalendarAlt className="mr-2" /> CALENDARIO DEGLI INCONTRI
                    </div>
                    <svg data-dui-accordion-icon width="1.5em" height="1.5em" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" className="h-4 w-4 rotate-180">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </div>
                <div id="basicAccordionInfo" className="overflow-hidden transition-all duration-300 border-b border-stone-200 ">
                    {/* 
                    Date:
                    Febbraio 14
                    Marzo      07, 14 e 28
                    Aprile     04, 11, 18
                    Per informazioni ed iscrizioni :
                    Whatsapp al 3334383509
                    Centrohodo@gmail.com
                     */}
                    <ul>
                        <li>Febbraio 14</li>
                        <li>Marzo 07, 14 e 28</li>
                        <li className="mb-2">Aprile 04, 11, 18</li>
                        <li>Per informazioni ed iscrizioni : Whatsapp al 3334383509 oppure Centrohodo@gmail.com</li>

                    </ul>
                </div>


            </div>

        </>
    )
}

export default Box_2
